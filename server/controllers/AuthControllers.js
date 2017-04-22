const mongoose = require('mongoose');
const passport = require('passport');
const User = require('./../models/User');

var userController = {};

// Restrict access to root page
userController.home = function(req, res) {
  res.render('index', { user : req.user });
};
