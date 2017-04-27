const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', function saveHook(next){
    const user = this;

    if(user.isModified('password')){
        bcrypt.hash(user.password, null, null, function(err, hash){
            if(err){
                next();
            }
            user.password = hash;
            next();
        });
    }
});

UserSchema.methods.comparePassword = function(attemptedPassword, callback) {
    bcrypt.compare(attemptedPassword, this.password, function(err, isMatch){
        callback(isMatch);
    })
}

module.exports = mongoose.model('User', UserSchema);