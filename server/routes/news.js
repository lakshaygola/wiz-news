const { Router } = require("express");
const router = Router();
const { newsApiObj } = require("../utils/newsUtils");


const newsApi = newsApiObj();


// Top headlines API - fetch all top headlines of india
router.get("/top-news", async (req, res) => {
    const newsCountry =  req.query.country || "us";
    const newsCategory = req.query.category || "";
    const searchedNews = req.query.q || "";
    const newsSource = req.query.sources || "";

    try {
        const newsData = await newsApi.v2.topHeadlines({
            country: newsCountry,
            category: newsCategory,
            q: searchedNews,
            sources: newsSource
        });
        res.status(200).json({
            message: "Fetched top news",
            data: newsData
        });
        return;
    } catch (e) {
        console.log(e);
        res.status(401).json({
            message: "Error while fetching data",
            error: e
        });
        return;
    }
});


// Category news API - fetch all the latest news for a given category
router.get("/all-news", async (req, res) => {
    const newsLanguage = req.query.language || "en";
    const newsDomains = req.query.domains || "techcrunch.com";
    const searchedNews = req.query.q || "";

    try {
        const newsData = await newsApi.v2.everything({
            language: newsLanguage,
            domains: newsDomains,
            q: searchedNews
        });
        res.status(200).json({
            message: "Fetched category news",
            data: newsData
        });
        return;
    }
    catch (e) {
        console.log(e);
        res.status(401).json({
            message: "Error while fetching a data",
            error: e
        });
        return;
    }
});


// Searched news API - Used to fetch the data based on serach query
router.get("/searched/news", async (req, res) => {
    const newsLanguage = req.query.language || "en";
    const query = req.query.q || "";

    try {
        const newsData = await newsApi.v2.everything({
            language: newsLanguage,
            q: query,
        });
        res.status(200).json({
            message: "Fetched searched news",
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
});


// news apis health checkup
router.get("/checkup", (req, res) => {
    res.status(200).json({
        message: "News api working"
    });
    return;
});


module.exports = router;