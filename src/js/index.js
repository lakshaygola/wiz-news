const NEWS_API_KEY = "2af5ab586fe0422ea3bc79bb6725af12"
const BASE_QUERY_URL = "https://newsapi.org/v2/everything?"

// Adding an event listener when window is loaded
window.addEventListener("load", () => fetchNews(query="India"));

// Adding event listener for dropdowns
// const dropdown = document.querySelector(".category-dropdown")
// dropdown.addEventListener("hover", () => expandDropdown());

// Function to load the news feed of India
async function fetchNews(query) {
    const url = `${BASE_QUERY_URL}q=${query}&apiKey=${NEWS_API_KEY}`;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    renderArticles(result.articles);
}

// Create a news card and render it on the page
function renderArticles(articles){
    const cardContainer = document.getElementById("card-container");
    const newsTemplate = document.getElementById("news-template");

    // This will make sure then latest articles are rendered
    cardContainer.innerHTML = '';

    articles.forEach(article => {
        if (article.urlToImage){
            const newsCardClone = newsTemplate.content.cloneNode(true);
            fillDataToCard(newsCardClone, article);
            cardContainer.appendChild(newsCardClone);
        }
    });
}

// This will fill the data from the article to the cards
function fillDataToCard(newsCardClone, article){
    const cardTitle = newsCardClone.getElementById("card-title");
    cardTitle.innerHTML = article.title;

    const cardSource = newsCardClone.getElementById("card-source");
    const newsDate = new Date(article.publishedAt).toLocaleString("en-US", {
        timeZone: "Asia/Jakarta"
    });
    cardSource.innerHTML = `${article.source.name} | ${newsDate}`;

    const cardDesc = newsCardClone.getElementById("card-desc");
    cardDesc.innerHTML = article.content;

    const cardImg = newsCardClone.getElementById("card-img");
    cardImg.style.backgroundImage = `url(${article.urlToImage})`;

    newsCardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

// Handle the hover event on the dropdown
// function expandDropdown(){
//     const select = dropdown.querySelector(".select");
//     const caret = dropdown.querySelector(".caret");
//     const dropdownMenu = dropdown.querySelector(".dropdown-menu");
//     const dropdownOptions = dropdown.querySelector(".dropdown-menu li");
//     const slected = dropdown.querySelector(".selected");

// }