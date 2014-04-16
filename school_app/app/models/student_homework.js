var mongoose = require('mongoose');

module.exports = mongoose.model('Studenthomework', {
		sclass : Number,
		section : String,
		subject: String,
  Homeworkdate: String,
  homework: String

		
});