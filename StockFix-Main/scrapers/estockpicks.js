"use strict";
var fs = require('fs');
var Nightmare = require('nightmare');
var csvWriter = require('csv-write-stream')

function eStockPics(){
	var writer = csvWriter()
	var nightmare = new Nightmare()
	.viewport(1280,1000)
	.goto('https://www.estockpicks.com/my-account/')
	.wait()
	//login to the website
	.type('input[id="username"]', 'labtest3333@gmail.com')
	.type('input[id="password"]', 'password')
	.click('#login')
	.wait(1000)
	//clicks on the dashboard button 
	.click('')
	.evaluate(function(){
		console.log(document.querySelector('').innerText);
		return document.querySelector('').innerText;
	})
	.end()
	.then(function(data){
		console.log(data)
	})

}