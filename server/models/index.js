const mongoose = require('mongoose');

module.exports.connect = (uri) => {
  // plug in the promise lib for mongoose
  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  require('./User')
}
