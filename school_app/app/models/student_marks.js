var mongoose = require('mongoose');

module.exports = mongoose.model('studentmark', {
		sclass : Number,
		section : String,
		students   : String,
		subject: String,
		month: String,
		marks: String
		
});