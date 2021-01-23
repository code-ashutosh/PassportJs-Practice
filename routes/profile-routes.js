const router = require('express').Router();


// create a middleware to check if user is logged in or not
const authCheck = (req, res, next)=>{
    if(!req.user){
        // user not logged in
        res.redirect('/auth/login');
    }
    else{
        // user logged in
        next();
    }
}

router.get('/',authCheck, (req, res)=>{
    // res.send(`Hello ${req.user.username},you are logged in and this is your profile`);
    res.render('profile', {user: req.user});
})
module.exports = router;