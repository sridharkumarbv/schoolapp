var mongoose = require('mongoose');

module.exports = mongoose.model('teacher', {
    _id: String,
    name: String,
    contact : Number,
    subject : Array,
    classes: Array
});