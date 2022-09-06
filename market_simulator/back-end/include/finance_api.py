import yfinance as yf

def GetStock(symbol):
    return yf.Ticker(symbol)

def GetStockInfo(stock):
    try:
        return stock.info
    except:
        return "Null"

def GetInfoKey(stock,key):
    try:
        return stock.info[key]
    except:
        return "Null"

def GetStockMarketPrice(stock):
    return GetInfoKey(stock,"regularMarketPrice")

def GetStockSector(stock):
    return GetInfoKey(stock,"sector")


def GetLongBussinessSummary(stock):
    return GetInfoKey(stock,"longBusinessSummary")

    

def GetStockShortName(stock):
    return GetInfoKey(stock,"shortName")

def GetStockLongName(stock):
    return GetInfoKey(stock,"longName")


def GetStockLogoUrl(stock):
    return GetInfoKey(stock,"logo_url")


def GetPreviousClose(stock):
    return GetInfoKey(stock,"regularMarketPreviousClose")


def GetOpen(stock):
    return GetInfoKey(stock,"open")


def GetBid(stock):
    return GetInfoKey(stock,"bid")

def GetAsk(stock):
    return GetInfoKey(stock,"ask")


def GetDaysRange(stock):
    pass

def GetYearRange(stock):
    pass

def GetVolume(stock):
    return GetInfoKey(stock,"volume")

def GetAverageVolume(stock):
    return GetInfoKey(stock,"averageVolume")

def GetMarketCap(stock):
    return GetInfoKey(stock,"marketCap")

def GetBeta(stock):
    return GetInfoKey(stock,"beta")

def GetEPS(stock):
    pass

def GetPERatio(stock):
    pass

def GetEarningsDate(stock):
    pass

def GetDividendYield(stock):
    return GetInfoKey(stock,"dividendYield")

def GetExDividendDate(stock):
    return GetInfoKey(stock,"exDividendDate")

def GetYearTargetEstimate(stock):
    pass
