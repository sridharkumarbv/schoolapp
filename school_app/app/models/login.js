/*var mongoose = require('mongoose'); 
var Schema = new mongoose.Schema({
	_id    : String,
	password   : String,
	userid : String
});*/
 
var mongoose = require('mongoose');

module.exports = mongoose.model('user', {
    _id    : String,
	password   : String,
	userid : String,
	name:String
});