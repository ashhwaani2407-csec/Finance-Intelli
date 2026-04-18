# FIIntell (FIIntell/1.0)

Multi-Asset Financial Intelligence Platform (Modules A → D):
- A: Multi-Asset Data Ingestion (prices + news)
- B: Feature Engineering (technicals + fundamentals + sentiment + geopolitics mock)
- C: Decision Engine (weighted fallback and optional XGBoost model)
- D: Streamlit Dashboard (dark mode)

## Prerequisites
- Python 3.11+ (3.12 recommended)

## Install
```powershell
cd c:\Algorithm\FIIntell
python -m pip install -r requirements.txt
pip install -e .
```

## Configure (optional)
Set environment variables:
- `FIINTELL_ENABLE_FINBERT=true|false`
- `FIINTELL_BACKEND_URL=http://localhost:8000` (Streamlit will prefer backend API if available)

## Run Backend (FastAPI)
```powershell
cd c:\Algorithm\FIIntell
python -m uvicorn backend.main:app --host 0.0.0.0 --port 8000
```

### Batch recommendations
```powershell
curl -X POST "http://localhost:8000/recommend/batch" -H "Content-Type: application/json" -d "{ \"tickers\": [\"TSLA\",\"BTC-USD\"], \"enable_finbert\": false }"
```

## Run Dashboard (Streamlit)
```powershell
cd c:\Algorithm\FIIntell
streamlit run frontend/app.py
```

## Train XGBoost model (for Module C model-mode)
```powershell
cd c:\Algorithm\FIIntell
python backend/training/train_xgb_classifier.py --tickers TSLA AAPL BTC-USD GC=F RELIANCE.NS --max-days-per-ticker 60
```

