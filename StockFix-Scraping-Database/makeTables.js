"use strict";
var fs = require('fs');
var mysql = require('mysql');
var db = require('node-mysql');
var wait = require('wait.for');

//logic:
//setup connection db
//read file.txt
//store it in array
//send the query to con.query CREATE TABLE
//check if tabe is in the db, else create it
//move to the next variable in the array

function tableMaker(test){
	var tableName = test;
	var con = mysql.createConnection({
		host: "localhost",
		user: "wikki",
		password: "",
		database: "stockfix"
	});

	con.connect(function(err){
		if(err){
			console.log('error connection to db');
			return;
		}
		console.log('connection established');
	});
	//con CREATE TABLE test
	con.query(
	    "CREATE TABLE "+ tableName + " (" +
	    "   `title` varchar(50) NOT NULL,"+
	    "   `text` varchar(50),"+
	    "   `created` timestamp NULL,"+
	    "   PRIMARY KEY (`title`));"
	);
	con.end(function(err){
	});
//returns the connections to the promise in the read function
	return con;
}

function read(){
    fs.readFile('file.txt', function(err, data){
        if(err) throw err;

        const array = data.toString().split("\n");
        const nextSymbol = char => () => tableMaker(char);

        let promise = Promise.resolve();

        for(let i in array){
            promise = promise.then(nextSymbol(array[i]));
        }
        promise.then(function(){
            console.log('COMPLETE');
        })
    }); 
}

//start the read function and begin the process of making tables
read();