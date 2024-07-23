const { z } = require("zod");

const userSchema = z.object({
    username: z.string()
    .min(1, {message: "Please enter correct username"})
    .email("Enter valid email"),
    firstName: z.string()
    .min(1, {message: "Please enter first name"}),
    lastName: z.string()
    .min(1, {message: "Please enter first name"}),
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
    contactNumber: z.string()
    .min(10, {message: "Please enter valid contact number"})
    .transform( value => Number(value)),
}).refine(data => 
    data.password === data.confirmPassword, 
    {
        message: "Password not matched",
        path: ["confirmPassword"]
    }
);


module.exports = {
    userSchema
}