import json
from finance_api import *

if __name__ == "__main__":
    msft = GetStock("msft")
    # stock_profile = {}
    # stock_profile["name"] = GetStockShortName(msft)
    # stock_profile["market-price"] = GetStockMarketPrice(msft)
    # stock_profile["sector"] = GetStockSector(msft)
    # stock_profile["summary"] = GetLongBussinessSummary(msft)
    # stock_profile["previous-close"] = GetPreviousClose(msft)
    # stock_profile["open"] = GetOpen(msft)
    # stock_profile["ask"] = GetAsk(msft)
    # stock_profile["volume"] = GetVolume(msft)
    # stock_profile["avrage_volume"] = GetAverageVolume(msft)
    # stock_profile["bid"] = GetBid(msft)
    # stock_profile["beta"] = GetBeta(msft)
    # stock_profile["market-cap"] = GetMarketCap(msft)
    # stock_profile["previous-close"] = GetPreviousClose(msft)
    # stock_profile["dividend-yield"] = GetDividendYield(msft)
    # stock_profile["ex-dividend-date"] = GetExDividendDate(msft)
    
    
    
    
    # print(json.dumps(stock_profile, indent=4))

    # print(msft.info.keys())
    print(msft.info["address1"])