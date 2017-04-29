const router = require('express').Router();
const passport = require('passport');
const middleware = require('./../config/middleware');
const db = require('../models');

router.get('*', (req,res) => {
  response.render("./../../build/index.html")
});

router.get('/api/authenticate', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/'
}));

// sign-up new user
router.post('/api/new-user', (req, res)=>{
    let user = {
        username: req.username,
        password: req.password
    }
    db.User.findOne({username: user.username}, (err, user)=>{
        if(!user) {
            let newUser = new User(user);
            newUser.save((err, data)=>{
                if(err){
                    console.log(err);
                    return res.redirect('/');
                } else {
                    res.redirect('/dashboard');
                }
            }).catch((err)=>{
                console.log(err);
                res.redirect('/');
            })
        }
    })
})

module.exports = router;