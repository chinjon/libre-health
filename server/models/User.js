const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const passportLocalMongoose = require('passport-local-mongoose');

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
UserSchema.pre('save', function(next){
    const user = this,
        saltFactor = 10;

        if(!user.isModified('password')) return next();

        bcrypt.genSalt(saltFactor, function(err, salt){
            if(err) return next(err);

            bcrypt.hash(user.password, salt, null, function(err, hash){
                if(err) return next(err);
                user.password = hash;
                next();
            })
        })
});

UserSchema.methods.comparePassword = function(attemptedPassword, callback) {
    bcrypt.compare(attemptedPassword, this.password, function(err, isMatch){
        if (err) {return callback(err);}
        callback(null, isMatch)
    })
}

module.exports = mongoose.model('User', UserSchema);