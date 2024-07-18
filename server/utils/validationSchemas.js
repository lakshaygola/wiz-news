const { z } = require("zod");

const userSchema = z.object({
    username: z.string()
    .min(1, {message: "Please enter correct username"})
    .email("Enter valid email"),
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
    firstName: z.string()
    .min(1, {message: "Please enter first name"}),
    lastName: z.string()
    .min(1, {message: "Please enter first name"}),
    contactNumber: z.string()
    .min(10, {message: "Please enter valid contact number"})
    .transform( value => Number(value)),
    adminCode: z.string()
    .min(15, {message: "Please enter valid admin code"})
})


module.exports = userSchema