const router = require('express').Router();
const passport = require('passport');
const passportSetup = require('../config/passport-setup');
//auth login
router.get('/login', (req, res)=>{
    res.render('login');
});

//auth logout
router.get('/logout', (req, res)=>{
    //handle with passport
    res.send('logging out');
});

//auth google
router.get('/google', passport.authenticate('google',{
    scope:['profile'] //pass what you need from the user on the consent screen   
}));

// after successful signup callback handler for auth/google/redirect
router.get('/google/redirect', (req, res)=>{
    res.send('You have reached the redirect URL');
});
module.exports = router;