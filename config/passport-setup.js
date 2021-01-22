const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//import keys
const keys = require('./keys');

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
        // done();

    })
)
