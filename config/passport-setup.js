const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
        // options for the google auth
    }),
    ()=>{
        // passport callback after the user is being authenticated
    }
)