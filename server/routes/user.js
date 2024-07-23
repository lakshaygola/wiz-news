const { Router } = require("express");
const { userSchema } = require("../utils/validationSchemas");
const { User } = require("../db/index");
const { adminVerification } = require("../middleware/AdminMiddleware");
const { findExistingUser, generateAccessToken } = require("../utils/userUtils");


const router = Router();


// Admin signup api
router.post("/signup", adminVerification, async (req, res) => {
    const { username, password, firstName, lastName, 
        confirmPassword, contactNumber, isAdmin } = req.body;
    const validAdmin = userSchema.safeParse({username, firstName,
                                                    lastName, password, 
                                                    confirmPassword, contactNumber});
    if (!validAdmin.success){
        res.status(401).json({
            message: "Enter valid inputs",
            error: validAdmin.error.issues[0].message
        });
        return;
    }
    const matchedUser = findExistingUser(username=username);
    if (matchedUser) {
        res.status(401).json({
            message: "User with username exist already"
        });
        return;
    }
    const user = await User.create({username, password, firstName,
                                lastName, contactNumber, isAdmin});
    if (user){
        res.status(201).json({
            message: "logged in"
        });
        return;
    }
    res.status(500).json({message: "DB not working"});
    return;
});


// Sign In API - User can sign in on a website using username and password
router.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    const isValidUser = findExistingUser(username, password);
    if (isValidUser) {
        // JWT return
        const token = generateAccessToken(username);
        res.status(200).json({
            message: "signin successfully",
            token: token
        });
        return;
    }
    res.status(400).json({
        message: "Please enter valid username or password"
    });
    return;
});

module.exports = router;