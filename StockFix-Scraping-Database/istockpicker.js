"use strict";
var fs = require('fs');
var Nightmare = require('nightmare');
var csvWriter = require('csv-write-stream')

function iStockPick(){
	var iStockpick = new Nightmare()
	.viewport(1280,1000)
	.goto()
	.wait()
	.evaluate(function(){
		console.log(document.querySelector('').innerText);
		return document.querySelector('').innerText;
	})
	.end()
	.then(function(data){
		console.log(data);
	})

}