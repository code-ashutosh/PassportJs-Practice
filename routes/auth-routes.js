const router = require('express').Router();
const passport = require('passport');
const passportSetup = require('../config/passport-setup');
//auth login
router.get('/login', (req, res)=>{
    res.render('login',{user: req.user});
});

//auth logout
router.get('/logout', (req, res)=>{
    //handle with passport
    // res.send('logging out');
    req.logout();
    res.redirect('/');
});

//auth google
router.get('/google', passport.authenticate('google',{
    scope:['profile'] //pass what you need from the user on the consent screen   
}));

// after successful signup callback handler for auth/google/redirect
router.get('/google/redirect', passport.authenticate('google'), (req, res)=>{

    // res.send(`Hello ${req.user.username}, You have reached the redirect URL`);
    res.redirect('/profile/');
});
module.exports = router;