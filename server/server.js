const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const errorhandler = require('errorhandler');
const cookieParser = require('cookie-parser');
const passportConfig = require('./config/passport');
const LocalStrategy = require('passport-local');
const mongoose = require('mongoose');

mongoose.Promise = Promise;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())
app.set('trust proxy', 1) // trust first proxy

//need sessions to persist state of user
app.use(session({
  secret: '3or8h1o2h1o28u12o38j12',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
// Configure passport-local to use User model for authentication
const User = require('./models/User');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const PORT = process.env.PORT || 4000;

// RUNS WHEN YOU USE 'YARN BUILD'
    // build folder will be created
var DBUri = process.env.DATABASEURL || "mongodb://localhost/libre-health-db";

mongoose.connect(DBUri).then(() => console.log('connected to DB!')).catch((err) => console.log(err));

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

require("./controllers/auth-controllers.js")(app);
require("./controllers/med-controllers.js")(app)

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
});
