/**
 * Stock Data Utilities
 * Handles stock information, sector classification, and market cap classification
 */

const StockData = {
    // Stock database with sector and market cap information
    stockDatabase: {
        // Large Cap Stocks
        'RELIANCE': { name: 'Reliance Industries Ltd', sector: 'Energy', marketCap: 'Large Cap' },
        'TCS': { name: 'Tata Consultancy Services Ltd', sector: 'Technology', marketCap: 'Large Cap' },
        'HDFCBANK': { name: 'HDFC Bank Ltd', sector: 'Banking', marketCap: 'Large Cap' },
        'INFY': { name: 'Infosys Ltd', sector: 'Technology', marketCap: 'Large Cap' },
        'HINDUNILVR': { name: 'Hindustan Unilever Ltd', sector: 'FMCG', marketCap: 'Large Cap' },
        'ICICIBANK': { name: 'ICICI Bank Ltd', sector: 'Banking', marketCap: 'Large Cap' },
        'SBIN': { name: 'State Bank of India', sector: 'Banking', marketCap: 'Large Cap' },
        'BHARTIARTL': { name: 'Bharti Airtel Ltd', sector: 'Telecommunications', marketCap: 'Large Cap' },
        'ITC': { name: 'ITC Ltd', sector: 'FMCG', marketCap: 'Large Cap' },
        'KOTAKBANK': { name: 'Kotak Mahindra Bank Ltd', sector: 'Banking', marketCap: 'Large Cap' },
        'LT': { name: 'Larsen & Toubro Ltd', sector: 'Infrastructure', marketCap: 'Large Cap' },
        'AXISBANK': { name: 'Axis Bank Ltd', sector: 'Banking', marketCap: 'Large Cap' },
        'ASIANPAINT': { name: 'Asian Paints Ltd', sector: 'FMCG', marketCap: 'Large Cap' },
        'MARUTI': { name: 'Maruti Suzuki India Ltd', sector: 'Automobile', marketCap: 'Large Cap' },
        'TITAN': { name: 'Titan Company Ltd', sector: 'FMCG', marketCap: 'Large Cap' },
        'ULTRACEMCO': { name: 'UltraTech Cement Ltd', sector: 'Infrastructure', marketCap: 'Large Cap' },
        'SUNPHARMA': { name: 'Sun Pharmaceutical Industries Ltd', sector: 'Pharmaceuticals', marketCap: 'Large Cap' },
        'NESTLEIND': { name: 'Nestle India Ltd', sector: 'FMCG', marketCap: 'Large Cap' },
        'WIPRO': { name: 'Wipro Ltd', sector: 'Technology', marketCap: 'Large Cap' },
        'ONGC': { name: 'Oil & Natural Gas Corporation Ltd', sector: 'Energy', marketCap: 'Large Cap' },
        'POWERGRID': { name: 'Power Grid Corporation of India Ltd', sector: 'Energy', marketCap: 'Large Cap' },
        'NTPC': { name: 'NTPC Ltd', sector: 'Energy', marketCap: 'Large Cap' },
        'HCLTECH': { name: 'HCL Technologies Ltd', sector: 'Technology', marketCap: 'Large Cap' },
        'BAJFINANCE': { name: 'Bajaj Finance Ltd', sector: 'Banking', marketCap: 'Large Cap' },
        'M&M': { name: 'Mahindra & Mahindra Ltd', sector: 'Automobile', marketCap: 'Large Cap' },
        'TATAMOTORS': { name: 'Tata Motors Ltd', sector: 'Automobile', marketCap: 'Large Cap' },
        'JSWSTEEL': { name: 'JSW Steel Ltd', sector: 'Metals', marketCap: 'Large Cap' },
        'TATASTEEL': { name: 'Tata Steel Ltd', sector: 'Metals', marketCap: 'Large Cap' },
        'ADANIENT': { name: 'Adani Enterprises Ltd', sector: 'Infrastructure', marketCap: 'Large Cap' },
        'HDFCLIFE': { name: 'HDFC Life Insurance Company Ltd', sector: 'Insurance', marketCap: 'Large Cap' },
        'BAJAJFINSV': { name: 'Bajaj Finserv Ltd', sector: 'Banking', marketCap: 'Large Cap' },
        
        // Mid Cap Stocks
        'TECHM': { name: 'Tech Mahindra Ltd', sector: 'Technology', marketCap: 'Mid Cap' },
        'CUMMINSIND': { name: 'Cummins India Ltd', sector: 'Automobile', marketCap: 'Mid Cap' },
        'GLENMARK': { name: 'Glenmark Pharmaceuticals Ltd', sector: 'Pharmaceuticals', marketCap: 'Mid Cap' },
        'LUPIN': { name: 'Lupin Ltd', sector: 'Pharmaceuticals', marketCap: 'Mid Cap' },
        'DABUR': { name: 'Dabur India Ltd', sector: 'FMCG', marketCap: 'Mid Cap' },
        'GODREJCP': { name: 'Godrej Consumer Products Ltd', sector: 'FMCG', marketCap: 'Mid Cap' },
        'MCDOWELL-N': { name: 'United Spirits Ltd', sector: 'FMCG', marketCap: 'Mid Cap' },
        'BIOCON': { name: 'Biocon Ltd', sector: 'Pharmaceuticals', marketCap: 'Mid Cap' },
        'APOLLOHOSP': { name: 'Apollo Hospitals Enterprise Ltd', sector: 'Healthcare', marketCap: 'Mid Cap' },
        'DIVISLAB': { name: 'Divis Laboratories Ltd', sector: 'Pharmaceuticals', marketCap: 'Mid Cap' },
        'DRREDDY': { name: 'Dr. Reddys Laboratories Ltd', sector: 'Pharmaceuticals', marketCap: 'Mid Cap' },
        'TORNTPHARM': { name: 'Torrent Pharmaceuticals Ltd', sector: 'Pharmaceuticals', marketCap: 'Mid Cap' },
        'CADILAHC': { name: 'Zydus Lifesciences Ltd', sector: 'Pharmaceuticals', marketCap: 'Mid Cap' },
        'NMDC': { name: 'NMDC Ltd', sector: 'Metals', marketCap: 'Mid Cap' },
        'NATIONALUM': { name: 'National Aluminium Company Ltd', sector: 'Metals', marketCap: 'Mid Cap' },
        'COALINDIA': { name: 'Coal India Ltd', sector: 'Energy', marketCap: 'Mid Cap' },
        'GAIL': { name: 'GAIL (India) Ltd', sector: 'Energy', marketCap: 'Mid Cap' },
        'IOC': { name: 'Indian Oil Corporation Ltd', sector: 'Energy', marketCap: 'Mid Cap' },
        'BPCL': { name: 'Bharat Petroleum Corporation Ltd', sector: 'Energy', marketCap: 'Mid Cap' },
        'HINDPETRO': { name: 'Hindustan Petroleum Corporation Ltd', sector: 'Energy', marketCap: 'Mid Cap' },
        
        // Small Cap Stocks
        'TRENT': { name: 'Trent Ltd', sector: 'Retail', marketCap: 'Small Cap' },
        'CENTURYPLY': { name: 'Century Plyboards India Ltd', sector: 'FMCG', marketCap: 'Small Cap' },
        'GREENPLY': { name: 'Greenply Industries Ltd', sector: 'FMCG', marketCap: 'Small Cap' },
        'RAMKY': { name: 'Ramky Infrastructure Ltd', sector: 'Infrastructure', marketCap: 'Small Cap' },
        'SUZLON': { name: 'Suzlon Energy Ltd', sector: 'Energy', marketCap: 'Small Cap' },
        'INOXWIND': { name: 'Inox Wind Ltd', sector: 'Energy', marketCap: 'Small Cap' },
        'ORIENTELEC': { name: 'Orient Electric Ltd', sector: 'FMCG', marketCap: 'Small Cap' },
        'VOLTAS': { name: 'Voltas Ltd', sector: 'FMCG', marketCap: 'Small Cap' },
        'CRISIL': { name: 'CRISIL Ltd', sector: 'Financial Services', marketCap: 'Small Cap' },
        'MOIL': { name: 'MOIL Ltd', sector: 'Metals', marketCap: 'Small Cap' },
        
        // NSE Indices
        'NIFTY50': { name: 'Nifty 50', sector: 'Index', marketCap: 'Index' },
        'NIFTYNEXT50': { name: 'Nifty Next 50', sector: 'Index', marketCap: 'Index' },
        'NIFTY100': { name: 'Nifty 100', sector: 'Index', marketCap: 'Index' },
        'NIFTY200': { name: 'Nifty 200', sector: 'Index', marketCap: 'Index' },
        'NIFTY500': { name: 'Nifty 500', sector: 'Index', marketCap: 'Index' },
        'NIFTYMIDCAP': { name: 'Nifty Midcap 50', sector: 'Index', marketCap: 'Index' },
        'NIFTYSMLCAP': { name: 'Nifty Smallcap 50', sector: 'Index', marketCap: 'Index' },
        'NIFTYBANK': { name: 'Nifty Bank', sector: 'Index', marketCap: 'Index' },
        'NIFTYIT': { name: 'Nifty IT', sector: 'Index', marketCap: 'Index' },
        'NIFTYPHARMA': { name: 'Nifty Pharma', sector: 'Index', marketCap: 'Index' },
        'NIFTYFMCG': { name: 'Nifty FMCG', sector: 'Index', marketCap: 'Index' },
        'NIFTYAUTO': { name: 'Nifty Auto', sector: 'Index', marketCap: 'Index' },
        'NIFTYMETAL': { name: 'Nifty Metal', sector: 'Index', marketCap: 'Index' },
        'NIFTYENERGY': { name: 'Nifty Energy', sector: 'Index', marketCap: 'Index' },
        'NIFTYINFRA': { name: 'Nifty Infrastructure', sector: 'Index', marketCap: 'Index' },
        
        // BSE Indices
        'SENSEX': { name: 'S&P BSE Sensex', sector: 'Index', marketCap: 'Index' },
        'BSEMIDCAP': { name: 'BSE Midcap', sector: 'Index', marketCap: 'Index' },
        'BSESMLCAP': { name: 'BSE Smallcap', sector: 'Index', marketCap: 'Index' },
        'BSELARGECAP': { name: 'BSE Largecap', sector: 'Index', marketCap: 'Index' },
        'BSEDIV': { name: 'BSE Dividend', sector: 'Index', marketCap: 'Index' },
        'BSETEAM': { name: 'BSE TECK', sector: 'Index', marketCap: 'Index' },
        'BSEBANKEX': { name: 'BSE Bankex', sector: 'Index', marketCap: 'Index' },
        'BSEIT': { name: 'BSE IT', sector: 'Index', marketCap: 'Index' },
        'BSEPHARMA': { name: 'BSE Pharma', sector: 'Index', marketCap: 'Index' },
        'BSEFMCG': { name: 'BSE FMCG', sector: 'Index', marketCap: 'Index' },
        'BSEAUTO': { name: 'BSE Auto', sector: 'Index', marketCap: 'Index' },
        'BSEMETAL': { name: 'BSE Metal', sector: 'Index', marketCap: 'Index' },
        'BSEENERGY': { name: 'BSE Energy', sector: 'Index', marketCap: 'Index' },
        'BSEREALTY': { name: 'BSE Realty', sector: 'Index', marketCap: 'Index' },
        'BSECAPGOODS': { name: 'BSE Capital Goods', sector: 'Index', marketCap: 'Index' }
    },

    // Search stocks by symbol or name
    searchStocks(query) {
        if (!query || query.length < 1) return [];
        
        const lowerQuery = query.toLowerCase();
        const results = [];
        
        Object.keys(this.stockDatabase).forEach(symbol => {
            const stock = this.stockDatabase[symbol];
            if (symbol.toLowerCase().includes(lowerQuery) || 
                stock.name.toLowerCase().includes(lowerQuery)) {
                results.push({
                    symbol: symbol,
                    name: stock.name,
                    sector: stock.sector,
                    marketCap: stock.marketCap
                });
            }
        });
        
        return results.slice(0, 10); // Limit to 10 results
    },

    // Get stock info by symbol
    getStockInfo(symbol) {
        return this.stockDatabase[symbol.toUpperCase()] || null;
    },

    // Classify market cap based on market cap value (in crores)
    classifyMarketCap(marketCapValue) {
        if (marketCapValue >= 20000) {
            return 'Large Cap';
        } else if (marketCapValue >= 5000) {
            return 'Mid Cap';
        } else {
            return 'Small Cap';
        }
    },

    // Fetch current stock price from API
    async fetchCurrentPrice(symbol, exchange = 'NSE') {
        try {
            const yahooSymbol = exchange === 'NSE' ? `${symbol}.NS` : `${symbol}.BO`;
            const proxyUrl = 'https://api.allorigins.win/raw?url=';
            const yahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${yahooSymbol}?interval=1d&range=1d`;
            
            const response = await fetch(proxyUrl + encodeURIComponent(yahooUrl));
            const data = await response.json();
            
            if (data.chart && data.chart.result && data.chart.result[0]) {
                const meta = data.chart.result[0].meta;
                return {
                    price: meta.regularMarketPrice || meta.previousClose,
                    previousClose: meta.previousClose,
                    high: meta.regularMarketDayHigh,
                    low: meta.regularMarketDayLow,
                    volume: meta.regularMarketVolume,
                    marketCap: meta.marketCap || 0
                };
            }
            return null;
        } catch (error) {
            console.error(`Error fetching price for ${symbol}:`, error);
            return null;
        }
    }
};
