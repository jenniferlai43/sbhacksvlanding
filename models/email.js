var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var emailSchema = new Schema({
	email: {type: String}
});

module.exports = mongoose.model('Email', emailSchema);