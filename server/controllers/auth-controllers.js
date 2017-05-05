const router = require('express').Router();
const passport = require('passport');
const middleware = require('./../config/middleware');
const User = require('../models/User');

module.exports = function(app) {

  // sign-up new user
  router.post('/api/signup', (req, res) => {
    let userData = {
      username: req.body.username,
      password: req.body.password
    }
    // console.log(`new user in api:`);
    // console.log(req.body);

    let newUser = new User(userData);

    newUser.save(function(err, data) {
      if (err.message.includes('duplicate')) {
        res.status(500).send({title: 'Duplicate Username', message: 'Please choose another username. Try using your email address.'});
      } else if (err.errors.password) {
        res.status(500).send({title: 'Insecure Password', message: err.errors.password.message});
      } else if (err.errors.username) {
        res.status(500).send({title: 'Invalid Username', message: err.errors.username.message});
      } else {
        res.json(data);
      }
    });
  });


  //
  router.post('/api/login', passport.authenticate('local'), function(req, res) {
    if (req.user) {
      res.json(req.user)
    } else {
      res.status(req.statusCode).send({message:req.statusMessage});
    }

  });

  router.get('/api/logout', function(req, res) {
    req.logout();
  });

  app.use('/', router);

}
