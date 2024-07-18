const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {type: String},
    password: String,
    firstName: String,
    lastName: String,
    contactNumber: String,
    isAdmin: Boolean
})

User = mongoose.model("User", userSchema);

module.exports = {
    User
};