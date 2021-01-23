const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const ejs = require('ejs');
const passport = require('passport');
const keys = require('./config/keys');
const passportSetup = require('./config/passport-setup');

const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');

const PORT = process.env.PORT || 3000;

const app = express();

// setting view engine
app.set('view engine','ejs');


// connect to mongodb
mongoose.connect(keys.mongodb.localUri, {useNewUrlParser:true, useUnifiedTopology:true}, ()=>{
    // connection established
    console.log('connected successfully');
});

// cookie setup 
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // 1 day : time has to be in millisecond
    keys: [keys.session.cookieKey]
}));

// initialize passport 
app.use(passport.initialize());
app.use(passport.session());

// set up auth routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

// home route
app.get('/', (req, res)=>{
    res.render('home', {user: req.user});
})

app.listen(PORT , ()=>console.log(`app is listening on port: ${PORT}`));