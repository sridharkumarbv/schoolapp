var mongoose = require('mongoose');

module.exports = mongoose.model('student', {
    _id    : String,
	studentname  : String,
	studentid  : String,
	studentclass  : String,
	section  : String,
	age :Number,
    fathername   : String,
	contactnumber  : Number
	
});