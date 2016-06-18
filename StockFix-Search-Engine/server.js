var express = require('express');
var mysql = require('mysql');

var app = express();

app.set('views',__dirname + '/views');
app.use(express.static(__dirname + '/JS'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'wikki',
	password : 'wikki123',
	database : 'world'
});
connection.connect();

app.get('/',function(req,res){
res.render('index.html');
});

app.get('/search',function(req,res){
	connection.query('SELECT first_name from TABLE_NAME where first_name like "%'+req.query.key+'%"',
	function(err, rows, fields) {
		if (err) throw err;
		var data=[];
		for(i=0;i<rows.length;i++){
			data.push(rows[i].first_name);
		}
		res.end(JSON.stringify(data));
	});
});

var server=app.listen(3000,function(){
	console.log("We have started our server on port 3000");
});