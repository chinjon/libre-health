exports.authenticated = (req, res, next) => {
    console.log('is authenticaed', req.isAuthenticated());
    if(req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/login');
    }
};

exports.destroySession = (req, res, next)=>{
    req.logOut();
    req.session.destroy();
    res.redirect('/')
}