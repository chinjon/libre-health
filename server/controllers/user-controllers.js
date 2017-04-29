const router = require('express').Router();
const passport = require('passport');
const middleware = require('./../config/middleware');
const db = require('../models');

router.get('/api/meds/:userId', function(req, res){

	// res.json(db.User.find({_id: req.params.userId}, 'medications').fetch());
	res.json(db.User.find({_id: req.params.userId}, 'medications').then(medications=>{
		res.json(medications);
	}).catch(err=>res.json(err));
});

//adding new medication to list
router.post('/api/add/meds/:userId', function(req, res){
	db.User.findOneAndUpdate({_id: req.params.userId}, 
		{ $addToSet: {medications: req.body.newMedication}, 
		{new: true})
	.then(medications=>res.json(medications)).catch(err=>res.json(err));
});

//updating a dosage on medication from list
router.update('/api/update/meds/:userId', function(req, res){
 	//later	
});

router.delete('/api/delete/meds/:userId', function(req, res){
	db.User.findOneAndUpdate({_id: req.params.userId}, 
		{ $pullAll: {medications: [req.body.newMedication]}, 
		{new: true})
	.then(medications=>res.json(medications)).catch(err=>res.json(err));
});

module.exports = router;

