'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

//jf middleware 
app.use(bodyParser.json());

app.use(function(req,res,next) {	//jf this middleware disables CORS
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
	next();
});



//jf mongodb

mongoose.connect('mongodb://localhost/psjwt');
var db = mongoose.connection;
//jf db.on('error', console.error.bind(console, 'connecton error...'));
db.once('open', function callback() {
	console.log(' db opened...');
});

// CONNECTION EVENTS
// When successfully connected
db.on('connected', function () {  
  console.log('Mongoose default connection open to database'); //jf + config.mongodbName);
}); 

// If the connection throws an error
db.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
db.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  db.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 

//jf mongoose models
var User = mongoose.model('User', {
	email: String,
	password: String
}, 'User_0_0_1');

//jf routes
app.post('/register', function(req, res){
	var user = req.body;

	var newUser = new User({
		email: user.email,
		password: user.password
	});

	newUser.save(function(err) {
		res.status(200).json(newUser);;
	});
});

//jf server
var server = app.listen(3000, function(){
	console.log('api listening on ',server.address().port);
});