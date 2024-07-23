const { User } = require("../db/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");


function generateAccessToken(username){
    return jwt.sign({username}, JWT_SECRET);
}


async function findExistingUser(username, password=false) { 
    console.log(username, password);
    if (password) {
        const user = await User.findOne({username, password});
    }else {
        const user = await User.findOne({username});
    }
    if (user){
        return user;
    }
    return null;
}


module.exports = {
    findExistingUser,
    generateAccessToken
}