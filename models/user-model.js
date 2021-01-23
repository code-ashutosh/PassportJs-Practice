    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const userScehma = {
        username: String,
        googleId: String,

    }
    const User = mongoose.model(user, userScehma);

    module.exports = User;