const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const routes = require('./routes');

const app = express();

app.use(express.static('./public'));
// build folder is where create-react-app CLI will export production
// app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
// Configure passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Configure passport-local to use account model for authentication
const User = require('./models/User');
passport.use(new LocalStrategy(Account.authenticate()));

passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

var DBUri = "mongodb://localhost/libre-health-db";

if(process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect(DBUri)
    .then(()=> console.log('connected to DB!'))
    .catch((err)=> console.log(err));
}


app.use('/', routes);







app.listen(PORT, ()=>{
  console.log("App is running on port ", ${PORT})
})
