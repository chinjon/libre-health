const express = require('express');
const routes = express.Router();
const auth = require('./controllers/AuthControllers');



routes.get('/', (req, res)=>{
  res.render('index');
});

routes.get('/register', (req, res)=>{
  res.render('register');
})

userController.doRegister = function(req, res) {
  User.register(new User({ username : req.body.username, name: req.body.name }), req.body.password, function(err, user) {
    if (err) {
      return res.render('register', { user : user });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/');
    });
  });
};


// app.post('/api/signup', function(req, res) {
//   //todo
//   //passport authenticate here
// });
//
// app.post('/api/login', function(req, res) {
//   //todo
//   //passport login
// });
//
// app.post('/api/submitinfo', function(req, res) {
//   //save info
//   //return user with new info
// });

app.post('/api/addMeds', function(req, res) {
  // updates user model with new medication
  // return with updated medication list 
})


module.exports = routes;
