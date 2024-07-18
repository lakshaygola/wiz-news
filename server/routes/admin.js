const { Router } = require("express");
const zod = require("zod");
const { adminSignupSchema } = require("../utils/validationSchemas");
const router = Router();
const { User } = require("../db/index");

// Admin signup api
router.post("/signup", (req, res) => {
    // Validate inputs
    const { username, password, firstName, lastName, 
        confirmPassword, contactNumber, adminCode } = req.body;
    const validAdmin = adminSignupSchema.safeParse({username, 
                                                    password, 
                                                    confirmPassword, 
                                                    contactNumber, 
                                                    adminCode});
    
    if (!validAdmin.success) {
        res.status(400).json({
            message: "Invalid input",
            error: validAdmin.error
        });
        return;
    }else {
        validAdmin = validAdmin.data;
    }
    // Check if password and confirm password matches
    if (validAdmin.password !== validAdmin.confirmPassword) {
        res.status(400).json({
            message: "Password not matched"
        });
        return;
    }
    // Check if username already exists in db
    User.findOne({username: validAdmin.username}, (err, user) => {
        if (user) {
            res.status(400).json({
                message: "Username already exist"
            })
            return;
        }
        if (err) {
            console.log(err);
            res.status(401).json({
                "message": "Not able to access database"
            });
            return;
        }
    })

    User.create({validAdmin});
    res.status(201).json({
        message: "Logged in"
    })
})

module.exports = router;