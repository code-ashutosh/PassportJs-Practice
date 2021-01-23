const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

//import keys
const keys = require('./keys');

// import user model
const User = require('../models/user-model');

// serialize user
passport.serializeUser((user, done)=>{
    done(null, user.id); // In the first param you have to pass if an error occurs for now it's null
})

// deserialize user
passport.deserializeUser((id, done)=>{
    // lookup if a user exists with this id(mongodb id)
    User.findById(id).then((user)=>{
        done(null, user);
    })
    .catch((ex) => console.log(ex));
})

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
        User.findOne({googleId: profile.id}).then( (currentUser)=>{
            if(currentUser){
                // user already exist 
                console.log("user already exists" + currentUser);
                done(null ,currentUser);
            }
            else{
                // create user

                const user = new User({
                    username: profile.displayName,
                    googleId: profile.id

                });
                // save user profile
                user.save()
                .then((newUser)=>{
                    console.log('User saved:' + newUser);
                })
                .catch((ex)=>{
                    console.log(ex);
                });
            }
        })
        .catch((ex)=>{
            console.log(ex.message);
        })
        // done();
    })
)
