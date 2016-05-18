##nodemailer-mailgunapi-transport

[![Build](https://travis-ci.org/bandwidthcom/nodemailer-mailgunapi-transport.png)](https://travis-ci.org/bandwidthcom/nodemailer-mailgunapi-transport)


Mailgun api transport module for Nodemailer 1.0+

## Install

```
npm install nodemailer-mailgunapi-transport
```

## Usage

```
var nodemailer = require("nodemailer");
var mailgunApiTransport = require("nodemailer-mailgunapi-transport");
var transporter = nodemailer.createTransport(mailgunApiTransport({apiKey: "MAILGUN_API_KEY"}));
```

## Options
 * `apiKey` is api key of Mailgun (required)
 * `domain` is specific domain of Mailgun

## Extra

Also this mailgun api transport contains some usefull functions to register routes to forward email messages from addresses like "reply-{ID}@your-domain.com" to your urls (you can pass extracted ID as url param '\1', i.e. like https://my-domain/emailCallback/\1). Read [here](http://documentation.mailgun.com/user_manual.html#routes) more about mailgun routes.

```
var transport = mailgunApiTransport({apiKey: "MAILGUN_API_KEY"});

transport.registerEmailPattern(emailPattern, callbackUrl, "route description", function(err, routeId){}); // create (or use exisitng) route for email pattern (you can use {ID} inside it, extracted id can be passed to callback url as param)
// Example
// emailPattern: reply-{ID}@test.com, callbackUrl: http://test.com/callback/\1
// all incoming messages to reply-1000@test.com will be redirected to http://test.com/callback/1000, etc
// Parameter {ID} is optional. You can use it only if you need. The value of ID can be any letters and/or numbers


transport.parseMessage(message); //transform incoming message of callback url handler to pretty form

transport.verifySignature(token, timestamp, signature); //allow to check signature of incoming message inside callback handler
```

