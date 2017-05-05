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
    required: true,
    validate: {
      validator: function(v) {
        return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/.test(v);
      },
        message: 'Password must be at least 8 characters in length include at least 1 lowercase letter, 1 capital letter, 1 number and 1 special character (ie. #?!@$%^&*-_).'
    }
  },
  medications: Array
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

UserSchema.method('comparePassword', function(candidatePassword, dbPassword, cb) {
  console.log(candidatePassword);
  bcrypt.compare(candidatePassword, dbPassword, function(err, isMatch) {
    if (err)
      return cb(err);
    cb(null, isMatch);
  });
});

module.exports = mongoose.model('User', UserSchema);
