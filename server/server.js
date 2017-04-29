const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const errorhandler = require('errorhandler');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

// RUNS WHEN YOU USE 'YARN BUILD'
    // build folder will be created

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