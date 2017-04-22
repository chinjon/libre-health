import passport from 'passport';
import User from './models/User';
import express from 'express';

const routes = express.Router();

routes.get('/', (req, res)=>{
  res.render('index');
});

routes.get('/register', (req, res)=>{
  res.render('register');
})


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


export default routes;
