/**
 * Stock API Helper Functions
 * Handles fetching end-of-day stock data from BSE and NSE
 */

// Yahoo Finance API helper for Indian stocks
// NSE stocks use .NS suffix, BSE stocks use .BO suffix

const StockAPI = {
    /**
     * Fetch stock data from Yahoo Finance API
     * @param {string} symbol - Stock symbol (e.g., 'RELIANCE')
     * @param {string} exchange - Exchange name ('NSE' or 'BSE')
     * @returns {Promise<Object>} Stock data object
     */
    async fetchStockData(symbol, exchange = 'NSE') {
        try {
            const yahooSymbol = exchange === 'NSE' ? `${symbol}.NS` : `${symbol}.BO`;
            const proxyUrl = 'https://api.allorigins.win/raw?url=';
            const yahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${yahooSymbol}?interval=1d&range=3mo`;
            
            const response = await fetch(proxyUrl + encodeURIComponent(yahooUrl));
            const data = await response.json();
            
            if (data.chart && data.chart.result && data.chart.result[0]) {
                const result = data.chart.result[0];
                const meta = result.meta;
                const timestamps = result.timestamp;
                const quote = result.indicators.quote[0];
                
                // Extract historical data
                const historicalData = timestamps.map((timestamp, index) => ({
                    date: new Date(timestamp * 1000),
                    open: quote.open[index],
                    high: quote.high[index],
                    low: quote.low[index],
                    close: quote.close[index],
                    volume: quote.volume[index]
                })).filter(d => d.close !== null).reverse();
                
                // Current stock info
                const currentPrice = meta.regularMarketPrice || meta.previousClose;
                const previousClose = meta.previousClose;
                const change = currentPrice - previousClose;
                const changePercent = ((change / previousClose) * 100).toFixed(2);
                
                return {
                    symbol: symbol,
                    name: meta.shortName || symbol,
                    price: currentPrice,
                    previousClose: previousClose,
                    high: meta.regularMarketDayHigh || currentPrice,
                    low: meta.regularMarketDayLow || currentPrice,
                    open: meta.regularMarketOpen || previousClose,
                    volume: meta.regularMarketVolume || 0,
                    change: change,
                    changePercent: parseFloat(changePercent),
                    marketCap: meta.marketCap || 0,
                    peRatio: meta.trailingPE || 0,
                    eps: meta.trailingEPS || 0,
                    dividendYield: meta.dividendYield || 0,
                    week52High: meta.fiftyTwoWeekHigh || currentPrice,
                    week52Low: meta.fiftyTwoWeekLow || currentPrice,
                    bookValue: meta.bookValue || 0,
                    priceToBook: meta.priceToBook || 0,
                    historicalData: historicalData,
                    exchange: exchange
                };
            }
            return null;
        } catch (error) {
            console.error(`Error fetching stock data for ${symbol}:`, error);
            return null;
        }
    },

    /**
     * Format volume for display
     * @param {number} volume - Volume number
     * @returns {string} Formatted volume string
     */
    formatVolume(volume) {
        if (volume >= 10000000) {
            return (volume / 10000000).toFixed(2) + ' Cr';
        } else if (volume >= 100000) {
            return (volume / 100000).toFixed(2) + ' L';
        } else if (volume >= 1000) {
            return (volume / 1000).toFixed(2) + ' K';
        }
        return volume.toString();
    },

    /**
     * Format currency for display
     * @param {number} value - Currency value
     * @returns {string} Formatted currency string
     */
    formatCurrency(value) {
        if (value >= 10000000) {
            return '₹' + (value / 10000000).toFixed(2) + ' Cr';
        } else if (value >= 100000) {
            return '₹' + (value / 100000).toFixed(2) + ' L';
        }
        return '₹' + value.toFixed(2);
    },

    /**
     * Check if market is open (Indian Standard Time)
     * @returns {boolean} True if market is open
     */
    isMarketOpen() {
        const now = new Date();
        const istTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
        const day = istTime.getDay();
        const hours = istTime.getHours();
        const minutes = istTime.getMinutes();
        
        // Market is open Monday-Friday, 9:15 AM - 3:30 PM IST
        if (day === 0 || day === 6) return false; // Weekend
        if (hours < 9 || (hours === 9 && minutes < 15)) return false;
        if (hours > 15 || (hours === 15 && minutes > 30)) return false;
        
        return true;
    },

    /**
     * Get last trading day
     * @returns {Date} Last trading day
     */
    getLastTradingDay() {
        const today = new Date();
        const istTime = new Date(today.toLocaleString("en-US", {timeZone: "Asia/Kolkata"}));
        let lastTradingDay = new Date(istTime);
        
        // If today is weekend or after market hours, go back
        const day = lastTradingDay.getDay();
        if (day === 0) {
            lastTradingDay.setDate(lastTradingDay.getDate() - 2); // Go to Friday
        } else if (day === 6) {
            lastTradingDay.setDate(lastTradingDay.getDate() - 1); // Go to Friday
        }
        
        return lastTradingDay;
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = StockAPI;
}
