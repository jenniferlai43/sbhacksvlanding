var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var emailSchema = new Schema({
	email: String
});

module.exports = mongoose.model('Email', emailSchema);