"use strict";
var mysql = require('mysql');
var db = require('node-mysql');
var fs = require('fs');


function read(){
	fs.readFile('file.txt', function(err, data){
		if(err) throw err;
			const array = data.toString().split("\n");
			var k=0;
				for(let i in array){
					splittedText = array[i];	
					return splittedText;
				}
	});	
}


function loopThroughSplittedText(splittedText) {
    for (var i = 0; i < splittedText.length; i++) {
        // for each iteration console.log a word
        // and make a pause after it
        (function (i) {
            setTimeout(function () {
                console.log(splittedText[i]);
            }, 1000 * i);
        })(i);
    };
}
var splittedText = read();
loopThroughSplittedText(splittedText);