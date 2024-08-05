const { Router } = require("express");
const router = Router();
const { TOP_HEADLINE_NEWS_ENDPOINT, NEWS_API_KEY } = require("../config");
const axios = require("axios");
const { newsApiObj } = require("../utils/newsUtils");


const newsApi = newsApiObj();


// Top headlines API - fetch all top headlines of india
router.get("/top-headlines/all", async (req, res) => {
    try {
        const newsData = await newsApi.v2.topHeadlines({
            language: 'en',
            country: 'us'
        });
        res.status(200).json({
            message: "Fetch category news",
            data: newsData
        });
        return;
    } catch (e) {
        console.log(e);
        res.status(400).json({
            message: "Not able to fetch the data"
        });
        return;
    }
});


// Category news API - fetch all the latest news for a given category
router.get("/category/top-news", async (req, res) => {
    const newsCategory = req.query.category
    try {
        const newsData = await newsApi.v2.sources({
            category: newsCategory,
            language: "en",
            country: "us"
        });
        res.status(200).json({
            message: "Fetch category news",
            data: newsData
        });
        return;
    }
    catch (e) {
        console.log(e);
        res.status(400).json({
            message: "Not able to fetch the data"
        });
        return;
    }
})


// news apis health checkup
router.get("/checkup", (req, res) => {
    res.status(200).json({
        message: "News api working"
    });
    return;
});


module.exports = router;