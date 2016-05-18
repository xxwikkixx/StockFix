var request = require("superagent");
var crypto = require("crypto");
var EventEmitter = require("events").EventEmitter;
var utillib = require("util");
var packageData = require("./package.json");

var baseUrl = "https://api.mailgun.net/v2";

var MailgunTransport = function(options){
  EventEmitter.call(this);
  this.name = "Mailgun";
  this.version = packageData.version;
  this.options = options || {};
  this.baseUrl = baseUrl + (this.options.domain? ("/" + this.options.domain): "");
};

utillib.inherits(MailgunTransport, EventEmitter);

MailgunTransport.prototype.send = function(mail, callback) {
  var options = this.options;
  var id;
  if(this.options.domain){
    var id = (mail.message.getHeader("Message-Id") || "").replace(/[<>\s]/g, "");
    var index = id.indexOf("@");
    if(index >= 0){
      id = id.substr(0, index + 1) +  this.options.domain;
    }
    else{
      if(id){
        id += "@" + this.options.domain;
      }
    }
    if(id){
      mail.message.setHeader("Message-Id", "<" + id + ">");
    }
  }

  var req = request.post(this.baseUrl + "/messages.mime").auth("api", this.options.apiKey);
  var to = mail.message.getEnvelope().to;
  if(Array.isArray(to)){
    to = to.join(",");
  }
  req.field("to", to);
  req.field("o:testmode", options.testMode?"yes":"no");
  var stream = mail.message.createReadStream();
  var list = [];
  stream.on("data", function(data){
    list.push(data);
  });
  stream.on("end", function(){
    req.attach("message", Buffer.concat(list), {filename: "message.eml"});
    req.end(function(res){
      if(res.ok){
        var id = ((res.body || {}).id || mail.message.getHeader("Message-Id") || "").replace(/[<>\s]/g, "");
        callback(null, {messageId: id});
      }
      else{
        var err = res.text || "Status code " + res.statusCode;
        callback(err);
      }
    });
  });
};

function pattern2regexp(pattern){
  return "^" + pattern.replace(/\+/g, "\\+").replace(/\-/g, "\\-").replace(/\./g, "\\.").replace("{ID}", "(\\w+)") +"$";
}

MailgunTransport.prototype.registerEmailPattern = function(pattern, callbackUrl, description, callback){
  if(!pattern) return callback(Error("'pattern' is required"));
  if(!callbackUrl) callback(Error("'callbackUrl' is required"));
  if(!description) callback(Error("'description' is required"));
  var options = this.options;
  var baseUrl = this.baseUrl;
  var req = request.get(baseUrl + "/routes").auth("api", options.apiKey).query({limit: 1000});
  req.end(function(res){
    if(!res.ok) return callback(new Error(res.text || "Status code " + res.statusCode));
    var routes = res.body.items;
    var ptrn = "match_recipient(\"" + pattern2regexp(pattern) + "\")";
    var destination = "forward(\"" + callbackUrl + "\")";
    var list = routes.filter(function(r){
      return r.expression == ptrn && (r.actions || [])[0] == destination;
    });
    if(list.length == 0){
      var req = request.post(baseUrl + "/routes").auth("api", options.apiKey);
      req.send({expression: ptrn, action: [destination, "stop()"], description: description});
      req.end(function(res){
        if(!res.ok) return callback(new Error(res.text || "Status code " + res.statusCode));
        callback(null, res.body.route.id);
      });
    }
    else{
      callback(null, list[0].id);
    }
  });
};


MailgunTransport.prototype.parseMessage = function(message){
  return {
    id: message["Message-Id"].replace(/[<>\s]/g, "").trim(),
    from: message.sender,
    to: message.recipient,
    subject: message.subject,
    html: message["stripped-html"],
    text: message["stripped-text"],
    headers: JSON.parse(message["message-headers"] || "[]"),
    userAgent: message["User-Agent"],
    references: message["References"],
    variables: JSON.parse(message["X-Mailgun-Variables"] || "{}")
  };
};

MailgunTransport.prototype.verifySignature = function(token, timestamp, signature){
  if(!token || !timestamp || !signature) return false;
  return signature === crypto.createHmac("sha256", this.options.apiKey).update(timestamp + token).digest("hex");
}


module.exports = function(options){
  return new MailgunTransport(options);
};
