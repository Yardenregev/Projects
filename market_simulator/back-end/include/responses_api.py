from finance_api import *

def StockPageJSON(symbol) -> dict:
    stock = GetStock(symbol)

    bundle = {}
    bundle["name"] = GetStockShortName(stock)
    bundle["summary"] = GetLongBussinessSummary(stock)
    bundle["logo-url"] = GetStockLogoUrl(stock)
    bundle["market-price"] = GetStockMarketPrice(stock)
    bundle["sector"] = GetStockSector(stock)

    return bundle


