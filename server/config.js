const PORT=3000
const DB_CONNECTION_URL="mongodb+srv://lakshaygola:HUpUATw902nbLaFg@wiznews.q45u8r7.mongodb.net/"
const DB_NAME="wiznews"
const DB_USERNAME="lakshaygola"
const DB_PASSWORD="HUpUATw902nbLaFg"
const ADMIN_CODE="j092irnfodsnfnidfn" 
const JWT_SECRET="JNSNAf918e1n9ISNND21o8"
const NEWS_API_KEY="16e04904b75f4eee8445cd366d263e3d"

const TOP_HEADLINE_NEWS_ENDPOINT="https://newsapi.org/v2/top-headlines"

module.exports = {
    PORT,
    DB_CONNECTION_URL,
    DB_NAME,
    ADMIN_CODE,
    JWT_SECRET,
    NEWS_API_KEY,
    TOP_HEADLINE_NEWS_ENDPOINT
}