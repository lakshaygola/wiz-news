const { Router } = require("express");
const adminRoutes = require("./admin.js");
const userRoutes = require("./user.js");
const newsRoutes = require("./news.js");

const router = Router();


router.use("/admin", adminRoutes)
router.use("/user", userRoutes);
router.use("/news", newsRoutes);


module.exports = router