const { Router } = require("express");
const zod = require("zod");
const { adminSignupSchema } = require("../utils/validationSchemas");
const router = Router();
const { User } = require("../db/index");


module.exports = router;