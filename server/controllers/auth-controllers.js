const router = require('express').Router();
const passport = require('passport');
const middleware = require('./../config/middleware');
const User = require('../models/User.js');

module.exports = function(app) {

    router.get('/api/authenticate', passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/'
    }));

    // sign-up new user
    router.post('/api/signup', (req, res)=>{
        let user = {
            username: req.body.username,
            password: req.body.password
        }
        console.log(`new user in api: ${user}`);
        User.findOne({username: user.username}, (err, user)=>{
            if(!user) {
                let newUser = new User(user);
                newUser.save((err, data)=>{
                    if(err){
                        console.log(err);
                        res.status(500).send('User could not be saved');
                    } else {
                        res.json(data);
                    }
                });
            }

            res.status(500).send('User already exists, please use sign-in button');
        })
    });

    router.post('/api/login',
        passport.authenticate('local', { successRedirect: '/dashboard',
                                       failureRedirect: '/api/login',
                                       failureFlash: true })
    );

    // router.post('/api/login', function(req, res, next){

    //     let user = {
    //         username: req.body.username,
    //         password: req.body.password
    //     }
    //     console.log(`login user in api: ${user}`);

    //     User.findOne({username: user.username}, (err, user)=>{
    //         if(!user) {
    //             res.status(500).send('User could not be found. Please sign-up.');
    //         } 
    // });

    app.use('/', router);

}