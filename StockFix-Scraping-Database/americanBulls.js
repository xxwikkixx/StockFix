"use strict";
var fs = require('fs');
var Nightmare = require('nightmare');
var csvWriter = require('csv-write-stream');
var mysql = require('mysql');

//sending the data being scraped to the mysql database
function ConDB(date, buy, sell, price){
  var con = mysql.createConnection({
    host: 'localhost',
    user: 'wikki',
    password: '',
    database: 'stockfix'
  });
//sets up the connection to the mysql db and handles erro
  con.connect(function(err){
    if(err){
      console.log('error connection to db');
      return;
    }
    console.log('connection established');
  });


//outputs all the tables from the mysql db to the console
  con.query('SELECT * FROM symbols', function(err, records){
    if(err) throw err;
    console.log('data recieved');
    console.log(records);
  });

  con.end(function(err){

  });
}

//reads the text file with all the stock tickers
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

//scrapes the americanbulls.com website by inputing the stock tickers in the 
//search bar on the the website then scraping the signals.
function AbullsScrape(test){
  const file_name = test + '.txt';
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
      //console.log(file_name);
      console.log(data)
      //fs.writeFile(file_name, (data) => console.log('finished'));
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
