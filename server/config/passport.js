const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./../models/User');

passport.serializeUser((user, done) => {
  console.log('serializeUser', user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log('deserializeUser');
  User.findById(user._id, (err, user) => {
    done(null, user);
  });
});

passport.use(new LocalStrategy((username, password, done) => {
  console.log('username', username);
  console.log('password', password);

  User.findOne({username}).then((user) => {
    console.log('incallsbask');
    if (!user) {
      console.log('No such user');
      return done(null, false, {message: 'Incorrect Credentials'})
    }
    let psswd = user
      ? user.password
      : '';
    User.comparePassword(password, psswd, (err, found) => {
      console.log('passport', err, user);
      done(err, found
        ? user
        : false);
    });
  }).catch(err => {
    console.error(err);
    done(null, false, {message: 'User does not exist'})
  });

}));
