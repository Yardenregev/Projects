import yfinance as yf

def GetStockInfo(symbol):
    return yf.Ticker(symbol).info

