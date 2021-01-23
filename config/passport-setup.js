const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//import keys
const keys = require('./keys');

// import user model
const User = require('../models/user-model');

passport.use(
    new GoogleStrategy({
        // options for the google auth
        callbackURL:'http://localhost:3000/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret:keys.google.clientSecret
    },
    (accessToken, refreshToken, profile, done)=>{
        // passport callback after the user is being authenticated
        console.log('Inside passport callback');
        console.log(profile);
        const user = new User({
            username: profile.displayName,
            googleId: profile.id
        });
        
        console.log("User before saving:" + user);

        // save user profile
        user.save()
        .then((newUser)=>{
            console.log('User saved:' + newUser);
        })
        .catch((ex)=>{
            console.log(ex);
        });
        done();

    })
)
