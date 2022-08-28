import json
from finance_api import *

if __name__ == "__main__":
    msft = GetStock("MSFT")
    stock_profile = {}
    stock_profile["name"] = GetStockShortName(msft)
    stock_profile["market price"] = GetStockMarketPrice(msft)
    stock_profile["sector"] = GetStockSector(msft)
    stock_profile["summary"] = GetLongBussinessSummary(msft)

    print(json.dumps(stock_profile, indent=4))