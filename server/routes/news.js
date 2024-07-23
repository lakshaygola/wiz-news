const { Router } = require("express");
const router = Router();
const { TOP_HEADLINE_NEWS_ENDPOINT, NEWS_API_KEY } = require("../config");
const axios = require("axios");


// Top headlines API - fetch all top headlines of india
router.get("/top-headlines/all", async (req, res) => {
    const newsEndpoint = `${TOP_HEADLINE_NEWS_ENDPOINT}?country=in&apiKey=${NEWS_API_KEY}`;
    const news = await axios.get(newsEndpoint);
    if (news.status === "error") {
        res.status(403).json({
            message: "Not able to hit news api server"
        });
        return;
    }
    res.status(200).json({
        message: "Fetch news",
        data: news.data.articles
    });
    return;
})


// news apis health checkup
router.get("/checkup", (req, res) => {
    res.status(200).json({
        message: "News api working"
    });
    return;
});


module.exports = router;