const { Router } = require("express");
const { userSchema } = require("../utils/validationSchemas");
const { User } = require("../db/index");
const { adminVerification } = require("../middleware/AdminMiddleware");
const { findExistingUser, generateAccessToken } = require("../utils/userUtils");
const { userAuthentication } = require("../middleware/UserMiddleware");


const router = Router();


// User signup api - create a new user
router.post("/signup", adminVerification, async (req, res) => {
    const { username, password, firstName, lastName, 
        confirmPassword, contactNumber, isAdmin } = req.body;
    const validUser = userSchema.safeParse({username, firstName,
                                            lastName, password, 
                                            confirmPassword, contactNumber});
    if (!validUser.success){
        res.status(401).json({
            message: "Enter valid inputs",
            error: validUser.error.issues[0].message
        });
        return;
    }
    const dbUser = await findExistingUser(username);
    if (dbUser !== null) {
        res.status(401).json({
            message: "User with username exist already"
        });
        return;
    }
    const user = await User.create({username, firstName,
                                lastName, contactNumber, isAdmin});
    if (user){
        const hashedPassword = await user.createHashedPassword(password);
        user.password = hashedPassword;
        await user.save();
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
    const user = await findExistingUser(username);
    if (!user) {
        res.status(400).json({
            message: "User not exists, please try with correct username"
        });
        return;
    }
    if (user && await user.validatePassword(password)) {
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


router.post("/change/password", userAuthentication, async (req, res)=> {
    const username = req.headers.username;
    const { currentPassword, password, confirmPassword } = req.body;
    const user = await findExistingUser(username);

    if (password !== confirmPassword) {
        res.status(400).json({
            message: "Passwords not matched",
        });
        return;
    }

    if (user && await user.validatePassword(currentPassword)) {
        const hashedPassword = await user.createHashedPassword(password);
        const updatedUser = await User.updateOne({username: username}, {password: hashedPassword});
        if (updatedUser) {
            res.status(200).json({
                message: "Password updated successfully"
            });
            return;
        }
    }
    res.status(400).json({
        message: "Please enter valid current password"
    });
    return;
});


module.exports = router;