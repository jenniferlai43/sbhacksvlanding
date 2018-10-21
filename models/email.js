var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var emailSchema = new Schema({
	email: 
	{
		type: String,
		unique: true
	}
});

module.exports = mongoose.model('Email', emailSchema);