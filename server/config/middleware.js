exports.authenticated = (req, res, next) => {
  console.log('is authenticated', req.isAuthenticated());
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/');
  }
};

exports.destroySession = (req, res, next) => {
  req.logOut();
  req.session.destroy();
  res.redirect('/')
}
