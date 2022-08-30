from . import finance_api as f

def StockPageJSON(symbol) -> dict:
    stock = f.GetStock(symbol)

    bundle = {}
    bundle["name"] = f.GetStockShortName(stock)
    bundle["summary"] = f.GetLongBussinessSummary(stock)
    bundle["logo_url"] = f.GetStockLogoUrl(stock)
    bundle["market-price"] = f.GetStockMarketPrice(stock)
    bundle["sector"] = f.GetStockSector(stock)

    return bundle


