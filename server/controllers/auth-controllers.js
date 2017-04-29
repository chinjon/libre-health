const router = require('express').Router();
const passport = require('passport');
const middleware = require('./../config/middleware');
const User = require('../models/User.js');

module.exports = function(app) {

    // router.get('/api/authenticate', passport.authenticate('local', {
    //     successRedirect: '/dashboard',
    //     failureRedirect: '/'
    // }));

    // sign-up new user
    router.post('/api/signup', (req, res)=>{
        let userData = {
            username: req.body.username,
            password: req.body.password
        }
        // console.log(`new user in api:`);
        // console.log(req.body);

        let newUser = new User(userData);
        console.log(newUser);

        //THIS IS NOT WORKING --- WHY???
        newUser.save({validateBeforeSave: true}, function(err, data){
            if(err){
                console.log(err);
                res.status(500).send('User could not be saved');
            } else {
                console.log('success')
                res.json(data);
            }
        });
        // User.findOne({username: userData.username}, (err, user)=>{
        //     if(!user) {
        //         let newUser = new User(userData);
        //         console.log(newUser);
        //         newUser.save(function(err, data){
        //             if(err){
        //                 console.log(err);
        //                 res.status(500).send('User could not be saved');
        //             } else {
        //                 console.log('success')
        //                 res.json(data);
        //             }
        //         });
        //     } else {
        //         res.status(501).send('User already exists, please use sign-in button');
        //     }
        // }).catch(err=>{if(err) res.json(err)});
    });

    router.post('/api/login', passport.authenticate('local'), function(req, res) {
            console.log("authenticate ran");
            console.log(req.user);
            if (err) res.json(err);
            else res.json(req.user);
    });


    router.get('/loginerror', function(req, res){
        res.status(500).send('Login Error, please contact network administrator.');

    });

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