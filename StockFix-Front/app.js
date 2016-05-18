var express = require('express');

var app = express();
var debug = require('debug')('app');


var port = 5000;

app.use(express.static('public'));
app.use(express.static('src'));
app.use(express.static('src/views'));


app.listen(port, function(err){
	console.log('running server on ' + port);
});