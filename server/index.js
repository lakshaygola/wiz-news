const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { PORT, DB_CONNECTION_URL, DB_NAME }  = require("./config");
const adminRoutes = require("./routes/admin.js");
const userRoutes = require("./routes/user.js");


// Instializing an express application
const app = express();

// Adding body-parser, cors,  as a middleware
app.use(express.json());
app.use(cors());


app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

// Defining routes
app.get("//health-checkup", (req, res) => {
    res.status(200).json({
        message: "Working fine"
    });
});


// Connecting to MongoDB
mongoose.connect(`${DB_CONNECTION_URL}${DB_NAME}`);


// Establishing a listener
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});