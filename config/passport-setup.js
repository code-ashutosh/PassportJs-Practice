const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

//import keys
const keys = require('./keys');

passport.use(
    new GoogleStrategy({
        // options for the google auth
        clientID: keys.google.clientID,
        clientSecret:keys.google.clientSecret
    }),
    ()=>{
        // passport callback after the user is being authenticated
    }
)