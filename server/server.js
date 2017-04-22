const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const app = express();

app.use(express.static('./public'));
// build folder is where create-react-app CLI will export production
// app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

app.use(passport.initialize());
app.use(passport.session());


// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session());



app.listen(PORT, ()=>{
  console.log("App is running on port ", ${PORT})
})
