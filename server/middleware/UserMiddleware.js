const jwt = require("jsonwebtoken");
const { verifyAccessToken } = require("../utils/userUtils");

function userAuthentication(req, res, next) {
    const auth_token = req.headers["authorization"];
    if (!auth_token) {
        res.send(401).json({
            message: "Authentication token not provided"
        });
        return;
    }
    const token = auth_token.split(" ")[1];
    const username = verifyAccessToken(token);
    if (username){
        req.headers.username = username;
        next();
        return;
    }
    res.status(403).json({
        message: "Access token is not valid"
    });
    return;
}

module.exports = {
    userAuthentication
}