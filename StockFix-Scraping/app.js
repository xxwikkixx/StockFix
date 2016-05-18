"use strict";
var fs = require('fs');
var Nightmare = require('nightmare');
var promise = require('promise');
	
//need to read in the file from the NASDAQ list with the stock symbol
//read one symbol at a time, and then run the nightmare funcion
//after every symbol being read return the webpage and save it with that symbol


//reading in the file text into an array into new line
function read(){
	fs.readFile('file.txt', function(err, data){
		if(err) throw err;
		const array = data.toString().split("\n");
		const nextSomeThing = char => () => dosomething(char);
		let promise = Promise.resolve();
		for(i in array){
			promise = promise.then(nextSomeThing(array[i]));
			//console.log(array[i]);
			//dosomething(array[i]);
			//var res = array[i].split("\n");
			//console.log(res);
		}
		promise.then(function(){
			console.log('COMPLETE');
		})
	});	
}

/* copy of the upper fuctions for going back to stock
function read(){
	fs.readFile('file.txt', function(err, data){
		if(err) throw err;
		var array = data.toString().split("\n");
		for(i in array){
			//console.log(array[i]);
			dosomething(array[i]);
			//var res = array[i].split("\n");
			//console.log(res);
		}
	});	
}
*/

function dosomething(test){
	var dosome = new Nightmare()
	.viewport(1000,1000)
	.goto('https://www.americanbulls.com/Default.aspx?lang=en')
	.wait()
	.type('input[id="SearchBox"]', test)
	.wait()
	.click('#SearchButton')
	.wait(1000)
	.screenshot('./screen.png')
	.evaluate(function(){
		 console.log(document.querySelector('#MainContent_signalpagehistorytab').innerText);
	      return document.querySelector('#MainContent_signalpagehistorytab').innerText;
	})
	.end()
	.then(function(data){
	    console.log('run')
	    console.log(data)
	})
	return dosome;
}

//output the file.txt into the console.log with text in an array
//read();

//gets the table on the main page of the americanbulls website
function AmerBullsMain(){
	var aBulls = new Nightmare()
	.viewport(800,600)
	.goto('https://www.americanbulls.com/Default.aspx?lang=en')
	.wait()
	.screenshot('./stock.png')
	.evaluate(function () {
	      console.log(document.querySelector('#MainContent_newpatternofthedaytopright').innerText);
	      return document.querySelector('#MainContent_newpatternofthedaytopright').innerText;
	    })
	.end()
	.then(function(data){
	    console.log('run')
	    console.log(data)
	})
}

//types in the search box of american bulls website
function AmerBullsSearch(){
	var aBullSearch = new Nightmare()
	.viewport(1000,1000)
	.goto('https://www.americanbulls.com/Default.aspx?lang=en')
	//.goto('https://www.americanbulls.com/SignalPage.aspx?lang=en&Ticker=' + 'FB')
	.wait()
	.type('input[id="SearchBox"]', ' FB')
	.wait()
	.click('#SearchButton')
	.wait(1000)
	.screenshot('./screen.png')
	.evaluate(function(){
		 console.log(document.querySelector('#MainContent_signalpagehistorytab').innerText);
	      return document.querySelector('#MainContent_signalpagehistorytab').innerText;
	})
	.end()
	.then(function(data){
	    console.log('run')
	    console.log(data)
	})
}

//AmerBullsSearch();