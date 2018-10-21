var mongoose = require('mongoose');

var Email = require('../models/email.js');

module.exports = function(app) {
	app.get('/', (req, res) => {
		res.render('index.ejs');
	});

	app.post('/email', (req, res) => {
		/*
		Email.find({email: req.body.email}, (err, emailAddresses) =>
		{
			if (emailAddresses.length)
			{
				console.log("already exists. didn't add");
				res.status(404).send({message: 'duplicate'});
			}
			else
			{
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
			}
		});
		*/
		Email.create({
					email: req.body.email
				}, (err, email) => {
					if (err)
					{
						//res.send({'error': 'An error has occurred'});
						res.status(404).send({message: 'duplicate'});
					}
					else
					{
						res.json(email);
					}
				});
		
	});
}