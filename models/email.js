var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var emailSchema = new Schema({
	email_address: String
});

module.exports = mongoose.model('email_address', emailSchema);