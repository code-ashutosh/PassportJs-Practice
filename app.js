const express = require('express');
const authRoutes = require('./routes/auth-routes');
const ejs = require('ejs');

const PORT = process.env.PORT || 3000;
const app = express();

// setting view engine
app.set('view engine','ejs');

// set up auth routes
app.use('/auth', authRoutes);

// home route
app.get('/', (req, res)=>{
    res.render('home');
})

app.listen(PORT , ()=>console.log(`app is listening on port: ${PORT}`));