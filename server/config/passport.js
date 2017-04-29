const passport = require('passport');
const localStrategy = require('local-strategy').Strategy;
const db = require('./../models');

passport.serializeUser((user, done)=> {
    console.log('serializeUser', user);
    done(null, user);
});

passport.deserializeUser((user, done)=>{
    console.log('deserializeUser');
    db.User.findById(id, (err, user)=>{
        done(null, user);
    });
});

passport.user(new localStrategy((username, password, done)=>{
    console.log('username', username);
    console.log('password', password);

    db.User.findOne({username: username}).then((user)=>{
        if(!user) {
            return done(null, false, {message: 'Incorrect Credentials'})
        }
        let psswd = user ? user.password: '';
        db.User.validPassword(password, psswd, (err, found) =>{
            console.log('passport', err, user);
            done(err, found ? user : false);
        });
    });
}));