const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const routes = require('./routes');
const app = express();

app.use(express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const PORT = process.env.PORT || 3000;

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));

// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Configure passport-local to use User model for authentication
const User = require('./models/User');
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

var DBUri = process.env.DATABASEURL || "mongodb://localhost/libre-health-db";

mongoose.connect(DBUri).then(() => console.log('connected to DB!')).catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
});
