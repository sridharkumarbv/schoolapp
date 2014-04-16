var mongoose = require('mongoose');

module.exports = mongoose.model('report', {
	sclass : Number,
		section : String,
		students   : String,
	 subject: String,
		month: String,
		report: String
		
});