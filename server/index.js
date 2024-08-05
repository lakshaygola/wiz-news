const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const { PORT, DB_CONNECTION_URL, DB_NAME }  = require("./config");
const rootRoutes = require("./routes/index.js");


// Instializing an express application
const app = express();

// Adding body-parser, cors,  as a middleware
app.use(cors()); 
app.use(express.json());
app.use("/api/v1", rootRoutes);


// Defining routes
app.get("/health-checkup", (req, res) => {
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