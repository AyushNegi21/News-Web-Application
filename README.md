📰 NewsApp – React News Portal using NewsAPI
🔹 Project Summary
NewsApp is a responsive, dynamic news portal built with React.js that fetches and displays live news headlines using the NewsAPI. It features categorized news filtering, pagination, and loading indicators to deliver a seamless user experience.

🚀 Features
✅ Fetches real-time news from NewsAPI.org

✅ Categorized headlines (e.g., General, Technology, Sports, Business, etc.)

✅ Pagination support for navigating multiple pages of news

✅ Loading spinner while data is being fetched

✅ Responsive and clean UI using Bootstrap

✅ Dark/Light theme toggle (if implemented)

🛠️ Tech Stack
Frontend: React.js, JSX, Bootstrap

Data: NewsAPI (RESTful API)

Others: React Router, State Management via this.state / useState, Lifecycle methods

📁 Folder Structure Highlights
bash
Copy
Edit
/src
  ├── /Components
  │     ├── News.js          # Main news component with pagination
  │     ├── NewsItem.js      # Reusable component for each news card
  │     ├── Spinner.js       # Loading spinner shown during API fetch
  │     └── Navbar.js        # Navigation bar with category links
  └── App.js                 # Routes and layout
🔑 API Integration
Base URL: https://newsapi.org/v2/top-headlines

Parameters: country, category, pageSize, apiKey, page

Note: A valid API key from newsapi.org is required to fetch news.

📦 Installation & Setup
bash
git clone https://github.com/yourusername/news-app.git
cd news-app
npm install

Then run:
bash
npm start
