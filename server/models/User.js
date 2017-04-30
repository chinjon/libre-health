const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const passportLocalMongoose = require('passport-local-mongoose');
const saltFactor = 10;

const UserSchema = new mongoose.Schema({
  username: {
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
    default: []
  }
});

UserSchema.plugin(passportLocalMongoose);

// Pre-save of user to database, hash password if password is modified or new
UserSchema.pre('save', function(next) {
  const user = this
  if (!user.isModified('password'))
    return next();

  bcrypt.genSalt(saltFactor, function(err, salt) {
    if (err)
      return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err)
        return next(err);
      user.password = hash;
      next();
    })
  })
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err)
      return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);
