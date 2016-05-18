"use strict";
var fs = require('fs');
var Nightmare = require('nightmare');

function read(){
    fs.readFile('nasdaqlisted.txt', function(err, data){
        if(err) throw err;

        const array = data.toString().split("\n");
        const nextSomeThing = char => () => dosomething(char);

        let promise = Promise.resolve();

        for(let i in array){
            promise = promise.then(nextSomeThing(array[i]));
        }

        promise.then(function(){
            console.log('COMPLETE');
        })
    }); 
}

function dosomething(test){
  var dosome = new Nightmare()
    .viewport(1280,1000)
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
      //console.log('run')
      //data = data being scraped and being output on the console log
      console.log(test);
      console.log(data)

    });

  // return promise!
  return dosome;
}

read();