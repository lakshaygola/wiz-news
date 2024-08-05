const NewsAPI = require("newsapi");
const { NEWS_API_KEY } = require("../config");


function newsApiObj() {
    const newsApi = new NewsAPI(NEWS_API_KEY);
    console.log(newsApi);
    return newsApi;
}


module.exports = {
    newsApiObj
}