import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
const Schema = mongoose.Schema;

const User = new Schema({
  userName: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  medications: {
    type: Array,
    required: false
  }
});

// plugin options https://github.com/saintedlama/passport-local-mongoose#options
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
