var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
        sclass:String,
		subject:String,
		month:String,
		text : String
});