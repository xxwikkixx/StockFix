"use strict";
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "wikki",
	password: ""
});

con.connect(function(err){
	if(err){
		console.log('error connection to db');
		return;
	}
	console.log('connection established');
});

con.end(function(err){

})''