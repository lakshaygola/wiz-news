const { User } = require("../db/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");


function generateAccessToken(username){
    return jwt.sign({username}, JWT_SECRET);
}


function verifyAccessToken(token){
    try{
        const decoded = jwt.verify(token, JWT_SECRET)
        if (decoded) {
            return decoded.username;
        }
        return false;
    }catch(e) {
        console.log(e)
        return false;
    }
}


async function findExistingUser(username) {
    const user = await User.findOne({username});
    return user;
}


module.exports = {
    findExistingUser,
    generateAccessToken,
    verifyAccessToken
}