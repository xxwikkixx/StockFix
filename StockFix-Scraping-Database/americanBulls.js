"use strict";
var fs = require('fs');
var Nightmare = require('nightmare');
var csvWriter = require('csv-write-stream');
var mysql = require('mysql');


//reads the text file with all the stock tickers
function read(){
    fs.readFile('P.txt', 'utf8', function(err, data){
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

//scrapes the americanbulls.com website by inputing the stock tickers in the 
//search bar on the the website then scraping the signals.
function AbullsScrape(test){
  //const file_name = test + '.txt';
  var scrape = new Nightmare()
    .viewport(1280,1000)
    .goto('https://www.americanbulls.com/Default.aspx?lang=en')
    .wait(1000)
    .type('input[id="SearchBox"]', test)
    .wait()
    .click('#SearchButton')
    .wait(5000)
    .screenshot('./screen.png')
    /*.then(function(data){
      store data 
      return evaluate(function(){...})
    }).then(function(){...}){}*/
    .evaluate(function signal(){
      //console.log(document.querySelector('#MainContent_ticker').innerText);
      //console.log(document.querySelector('#MainContent_signalpagehistorytab').innerText);
      return document.querySelector('#MainContent_signalpagehistorytab').innerText;
    })
    .end()
    .then(function signal(data){
      //console.log('run')
      //data = data being scraped and being output on the console log
      //console.log(test)
      
      //fs.appendFile('out.txt', test.toString(), function(err){});
      fs.appendFileSync('P_list.txt', test.toString(),'utf8', function(err){});
      fs.appendFileSync('P_list.txt', data.toString(),'utf8', function(err){});
      console.log(data);
    });
  // return promise!
  return scrape;
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
