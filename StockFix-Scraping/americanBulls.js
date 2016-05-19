"use strict";
var fs = require('fs');
var Nightmare = require('nightmare');
var csvWriter = require('csv-write-stream')

function read(){
    fs.readFile('nasdaqlisted.txt', function(err, data){
        if(err) throw err;

        const array = data.toString().split("\n");
        const nextSomeThing = char => () => AbullsScrape(char);

        let promise = Promise.resolve();

        for(let i in array){
            promise = promise.then(nextSomeThing(array[i]));
        }

        promise.then(function(){
            console.log('COMPLETE');
        })
    }); 
}

function wrtieFile(output){
  var stream = fs.createWriteStream("output.txt");
  stream.one('open', function(fd){
    stream.write(output);
    stream.end();
  })
}

function AbullsScrape(test){
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
      console.log(test)
      console.log(data)
      fs.writeFile('output.txt', data);
    });

  // return promise!
  return dosome;
}

read();

//gets the table on the main page of the americanbulls website
function AmerBullsMain(){
  var aBulls = new Nightmare()
  .viewport(1280,1000)
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
