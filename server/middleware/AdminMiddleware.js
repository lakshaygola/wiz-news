const { ADMIN_CODE } = require("../config")


function adminVerification(req, res, next){
    if (req.body.adminCode) {
        const adminCode = req.body.adminCode;
        if (adminCode === ADMIN_CODE) {
            req.body.isAdmin = true;
            next();
            return;
        }
    }
    req.body.isAdmin = false;
    next();
    return;
}


module.exports = {
    adminVerification
}