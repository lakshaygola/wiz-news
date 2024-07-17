const { Router } = require("express");
const zod = require("zod");
const { adminSignupSchema } = require("../utils/validationSchemas");
const router = Router();

// Admin signup api
router.post("/signup", (req, res) => {
    // Validate inputs
    const { username, password, confirmPassword, contactNumber, adminCode } = req.body;

    let validAdmin = adminSignupSchema.safeParse(username, 
        password, 
        confirmPassword, 
        contactNumber, 
        adminCode);
    
    if (!validAdmin.success) {
        res.send(400).json({
            message: "Invalid input"
        });
    }

    console.log(validAdmin);
    res.send(200).json({
        message: "Admin creds",
        data: validAdmin.data
    })


    // Check if admin with same creds already exists

    // Create new admin and save to database
})

module.exports = router;