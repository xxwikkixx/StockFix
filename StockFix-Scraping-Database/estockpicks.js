"use strict";
var fs = require('fs');
var Nightmare = require('nightmare');
var csvWriter = require('csv-write-stream')

function eStockPics(){
	var nightmare = new Nightmare()
		.viewport(1280,1000)
		.goto('https://www.estockpicks.com/my-account/')
		.wait(500)
		//login to the website
		.type('#username', 'email')
		.wait()
		.type('#password', 'password')
		.wait()
		//.click('#login')
		//.wait(1000)
		.screenshot('./screenn.png')
		//clicks on the dashboard button 
		.evaluate(function(){
			console.log(document.querySelector('#avda-row').innerText);
			return document.querySelector('#avda-row').innerText;
		})
		.end()
		.then(function(data){
			console.log('run')
			console.log(data)
		});
}

eStockPics();