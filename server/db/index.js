const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


// Creating a DB schema for a user/admin sign in
const userSchema = mongoose.Schema({
    username: {type: String},
    password: String,
    firstName: String,
    lastName: String,
    contactNumber: String,
    isAdmin: Boolean
});


// createHashedPassword => adding method to a schema to hash a password with salt
userSchema.methods.createHashedPassword = async function (rawPassword) {
    const saltSize = 10;
    const salt = await bcrypt.genSalt(saltSize);

    const hashedPassword = await bcrypt.hash(rawPassword, salt);
    return hashedPassword;
}


// validatePassword => adding method to a schema to validate raw password against hashed one
userSchema.methods.validatePassword = async function (userPassword) {
    return await bcrypt.compare(userPassword, this.password);
}


User = mongoose.model("User", userSchema);


module.exports = {
    User
};