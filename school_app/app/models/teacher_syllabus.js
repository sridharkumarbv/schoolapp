var mongoose = require('mongoose');

module.exports = mongoose.model('syllabus', {
       sclass : String,
	   subject : String,
	   month : String,
       syllabus : String
});