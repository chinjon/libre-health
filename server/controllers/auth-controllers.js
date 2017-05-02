const router = require('express').Router();
const passport = require('passport');
const middleware = require('./../config/middleware');
const User = require('../models/User');

module.exports = function(app) {

  router.get('/api/authenticate', passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/'
  }));

  // sign-up new user
  router.post('/api/signup', (req, res) => {
    let userData = {
      username: req.body.username,
      password: req.body.password
    }
    // console.log(`new user in api:`);
    // console.log(req.body);

    let newUser = new User(userData);
    console.log(typeof newUser);
    newUser.save(function(err, data) {
      if (err) {
        console.log(err);
        res.status(500).send('User could not be saved');
      } else {
        console.log('success')
        res.json(data);
      }
    });
  });

  //
  router.post('/api/login', passport.authenticate('local'), function(req, res) {
    console.log(req);
    if (req.user) {
      res.json(req.user)

    } else {
      res.status(req.statusCode).send(req.statusMessage);
    }

  });

  router.get('/loginerror', function(req, res) {
    res.status(500).send('Login Error, please contact network administrator.');
  });

  app.use('/', router);

}
