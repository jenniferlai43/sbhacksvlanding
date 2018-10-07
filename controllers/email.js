var mongoose = require('mongoose');

var Email = require('../models/email.js');

module.exports = function(app) {
	app.get('/', (req, res) => {
		res.render('index.ejs');
	});

	app.post('/email', (req, res) => {
		Email.create({
			email: req.body.email
		}, (err, email) => {
			if (err)
			{
				console.log(err);
			}
			else
			{
				res.send("email saved to db");
			}
		});
	});
}