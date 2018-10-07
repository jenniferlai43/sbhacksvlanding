var mongoose = require('mongoose');

var Email = require('../models/email.js');

module.exports = function(app) {
	app.get('/', (req, res) => {
		res.render('index.ejs');
	});

	app.post('/email', (req, res) => {
		console.log(req.body.email);
		Email.create({
			email: req.body.email
		}, (err, email) => {
			console.log()
			if (err)
			{
				res.send({'error': 'An error has occurred'});
			}
			else
			{
				res.json(email);
			}
		});
	});
}