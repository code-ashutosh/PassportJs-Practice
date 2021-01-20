const router = require('express').Router();

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
router.get('/google', (req, res)=>{
    //handle with passport
    res.send('google auth loggin in');
});

module.exports = router;