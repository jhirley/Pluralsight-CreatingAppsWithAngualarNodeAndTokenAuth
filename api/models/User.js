'use strict';
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

//jf mongoose models
var UserSchema = new mongoose.Schema({
	email: String,
	password: String
})

exports.model = mongoose.model('User', UserSchema, 'User_0_0_1');

UserSchema.pre('save',  function(next) {
	var user = this;

	if(!user.isModified('password')) return next();

	bcrypt.genSalt(10, function(err, salt) {
		if (err) return next(err);

		bcrypt.hash(user.password, salt, function( err, hash) {
			if (err) return next(err);
			else{
				user.password = hash;
				next();
			}

		})
	})
})