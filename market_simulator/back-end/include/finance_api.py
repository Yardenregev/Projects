import yfinance as yf

def GetStock(symbol):
    return yf.Ticker(symbol)

def GetStockInfo(stock):
    try:
        return stock.info
    except:
        return "Null"

def GetStockMarketPrice(stock):
    try:
        return stock.info["regularMarketPrice"]
    except:
        return "Null"

def GetStockSector(stock):
    try:
        return stock.info["sector"]
    except:
        return "Null"

def GetLongBussinessSummary(stock):
    try:
        return stock.info["longBusinessSummary"]
    except:
        return "Null"

def GetStockShortName(stock):
    try:
        return stock.info["shortName"]
    except:
        return "Null"

def GetStockLongName(stock):
    try:
        return stock.info["longName"]
    except:
        return "Null"

def GetStockLogoUrl(stock):
    try:
        return stock.info["logo_url"]
    except:
        return "Null"