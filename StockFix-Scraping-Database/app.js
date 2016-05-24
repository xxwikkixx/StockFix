"use strict";
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "wikki",
	password: "",
	database: "mydb"
});

con.connect(function(err){
	if(err){
		console.log('error connection to db');
		return;
	}
	console.log('connection established');
});


var record= { firstname: 'Rahul', lastname: 'Kumar', email: 'abc@domain.com', test: 'this is a test message, the fox was here storing data inside the SQL db' };

con.query('SELECT * FROM users',function(err, records){
  if(err) throw err;

  console.log('Data received from Db:n');
  console.log(records);
});

con.end(function(err){

});