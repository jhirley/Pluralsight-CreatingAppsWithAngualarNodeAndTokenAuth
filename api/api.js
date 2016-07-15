'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//middleware 
app.use(bodyParser.json());
app.use(function(req,res,next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	next();
})

// routes
app.post('/register', function(req, res){
	res.send("hi gorgious");
	console.log(req.body);
});


// server
var server = app.listen(3000, function(){
	console.log('api listening on ',server.address().port);
});