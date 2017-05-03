const router = require('express').Router();
const passport = require('passport');
const middleware = require('./../config/middleware');
const User = require('./../models/User');

module.exports = function(app) {

	router.get('/api/meds/:userId', function(req, res){

		// res.json(db.User.find({_id: req.params.userId}, 'medications').fetch());
		User.find({_id: req.params.userId}, 'medications').then(medications=>{
			res.json(medications);
		}).catch(err=>res.json(err));
	});

	//adding new medication to list
	router.post('/api/add/meds/:userId', function(req, res){
		User.findOneAndUpdate({_id: req.params.userId},
			{$addToSet: {medications: req.body.medication}},
			{new: true})
		.then(user=>res.json({user})).catch(err=>res.json(err));
	});

	//updating a dosage on medication from list
	// router.put('/api/update/meds/:userId', function(req, res){
	//  	//later
	// });

	router.delete('/api/delete/meds/:userId', function(req, res){
		User.findOneAndUpdate({_id: req.params.userId},
			{ $pullAll: {medications: [req.body.newMedication]}},
			{new: true})
		.then(medications=>res.json(medications)).catch(err=>res.json(err));
	});

	app.use('/', router);
}
