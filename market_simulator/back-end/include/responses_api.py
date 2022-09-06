from . import finance_api as f
import datetime

def StockPageJSON(symbol) -> dict:
    stock = f.GetStock(symbol)
    resp = {}
    
    profile = {}
    profile["name"] = f.GetStockShortName(stock)
    profile["logo_url"] = f.GetStockLogoUrl(stock)
    profile["sector"] = f.GetStockSector(stock)
    profile["industry"] = f.GetInfoKey(stock,"industry")
    profile["website"] = f.GetInfoKey(stock,"website")
    profile["full_time_employees"] = f.GetInfoKey(stock,"fullTimeEmployees")
    profile["summary"] = f.GetLongBussinessSummary(stock)

    summary = {}
    summary["market_price"] = f.GetStockMarketPrice(stock)
    summary["previous_close"] = f.GetPreviousClose(stock)
    summary["open"] = f.GetOpen(stock)
    summary["ask"] = f.GetAsk(stock)
    summary["volume"] = f.GetVolume(stock)
    summary["avrage_volume"] = f.GetAverageVolume(stock)
    summary["bid"] = f.GetBid(stock)
    summary["beta"] = f.GetBeta(stock)
    summary["market_cap"] = f.GetMarketCap(stock)
    summary["dividend_yield"] = f.GetDividendYield(stock)
    summary["ex_dividend_date"] = f.GetExDividendDate(stock)
    

    resp["profile"] = profile
    resp["summary"] = summary

    return resp


