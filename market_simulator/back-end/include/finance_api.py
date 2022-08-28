import yfinance as yf

def GetStock(symbol):
    return yf.Ticker(symbol)

def GetStockInfo(stock):
    return stock.info

def GetStockMarketPrice(stock):
    return stock.info["regularMarketPrice"]

def GetStockSector(stock):
    return stock.info["sector"]

def GetLongBussinessSummary(stock):
    return stock.info["longBusinessSummary"]

def GetStockShortName(stock):
    return stock.info["shortName"]

def GetStockLongName(stock):
    return stock.info["longName"]

def GetStockLogoUrl(stock):
    return stock.info["logo_url"]