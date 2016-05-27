"use strict";
var fs = require('fs');
var mysql = require('mysql');
var db = require('node-mysql');



function tableMaker(test){
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
	//con CREATE TABLE test
	con.end(function(err){
	});
//returns the connections to the promise in the read function
	return con;
}


function read(){
	fs.readfile('nasdaqlisted.txt', function(err, data){
			if(err) throw err;
			const array = data.toString().split("\n");
			const nextSymbol = char => () => tableMaker(char);

			let promise = Promise.resolve();
			for(let i in array){
				promise = promise.then(nextSymbol(array[i]));
				console.log(array[i]);
			}
			promise.then(function(){
				console.log('complete');
			})
	});
}

//start the read function and begin the process of making tables
read();