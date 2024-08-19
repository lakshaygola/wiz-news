# Wiz News

A MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack News application that works on NewsAPI.org.

## About an application

A MERN stack news application powered by NewsAPI.org, offering a personalized news experience with the following features:


  1. User Authentication: Secure login and registration using JSON Web Tokens (JWT).
  2. Categorized News: Browse news across multiple topics, including Sports, Politics, General, and Science, with dedicated tabs for easy navigation.
  3. Search Engine: Quickly find news articles by entering keywords in the search bar.
  4. Country Selection: Filter news by country through a convenient dropdown menu.
  5. Daily News Reminder: Receive daily email reminders with the top news of the day.

  ### Technologies Used
    - Frontend: React.js
    - Backend: Node.js, Express.js
    - Database: MongoDB
    - Authentication: JWT
    - API: NewsAPI.org

## Getting started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites
  - Node.js and npm installed on your machine
  - A NewsAPI.org API key

### Installation
  - Fork the repository on GitHub.
  - Clone the repository to your local machine.
  - Navigate to the server directory and create a new file named config.js.
  - Add your these parameter in your config.js file
      - PORT - port number on which you want your backend to run 
      - DB_NAME and DB_CONNECTION_URL - To store the user data
      - JWT_SECRET - To configure the json web token
      - Add your NewsAPI.org API key to the config.js file in the following format: NEWS_API_KEY=your_news_api_key.
  - In the server directory, run npm install to install the necessary dependencies.
  - Start the server by running node index.js.
  - Navigate to the frontend directory and run npm install to install the necessary dependencies.
  - Add an .env file in frontend folder, and add VITE_BACKEND_URL variable in it that contain the route of your backend
  - Start the client by running npm run dev.


### Usage
Once the project is set up and running, you can view news articles from various sources on the client side.


### Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


Explore the latest news tailored to your interests with this dynamic and user-friendly application.