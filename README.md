Investment Tracker - 
A comprehensive frontend web application serving as a financial data portal. This portal provides users with an intuitive interface to track, analyze, and manage investments across various asset classes in the Indian stock market (BSE & NSE).

Features - 
Dashboard: Overview of market trends and general stock market data.
Asset Classes:

Equity: Track individual stocks and equity indices.
Bonds: Information and data on government and corporate bonds.
Commodities: Live updates and charts for commodities.
Derivatives: Futures and options data.
Detailed Stock Analysis: Deep dive into individual stocks (stock-detail.html) with historical data and charting capabilities.
Portfolio Management: Tools for users to view and manage their personal portfolios (portfolio.html).
User Authentication: Login interface for personalized experiences (login.html).

Project Structure
index.html - The main dashboard and entry point.
about.html - Information about the portal.
login.html - User authentication page.
portfolio.html - User's personal portfolio tracker.
stock-detail.html - Detailed view for individual securities.
equity.html, bond.html, commodity.html, derivatives.html - Pages dedicated to specific asset classes.
/css - Contains the stylesheets (universal.css, themes.css etc.).
/js - Contains JavaScript for interactivity, data fetching, and charting.
intraday_5min_IBM.csv - Sample financial data used for demonstration purposes.

Technologies Used
HTML5
CSS3 (with custom themes, transitions, and responsive design)
JavaScript
Clone or download the repository.
Open index.html in any modern web browser (Chrome, Firefox, Edge, Safari) to launch the portal. Note: If the application fetches external data or local CSV files like intraday_5min_IBM.csv via JavaScript fetch, you may need to serve the directory using a local web server to avoid CORS issues (e.g., npx http-server or Python's python -m http.server).
Theming
The application supports theming (e.g., light mode) via css/themes.css and inline variables. You can modify the CSS variables to adjust colors, fonts, and other design tokens.
