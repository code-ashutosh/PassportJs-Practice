const express = require('express');
const authRoutes = require('./routes/auth-routes');
const ejs = require('ejs');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const PORT = process.env.PORT || 3000;
const app = express();

// setting view engine
app.set('view engine','ejs');

// connect to mongodb
mongoose.connect(keys.mongodb.uri, {useNewUrlParser:true, useUnifiedTopology:true}, ()=>{
    // connection established
    console.log('connected successfully');
});

// set up auth routes
app.use('/auth', authRoutes);

// home route
app.get('/', (req, res)=>{
    res.render('home');
})

app.listen(PORT , ()=>console.log(`app is listening on port: ${PORT}`));