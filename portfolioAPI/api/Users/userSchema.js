const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
    },

    lastName: {
        type: String,,
        require: true,
    }

})