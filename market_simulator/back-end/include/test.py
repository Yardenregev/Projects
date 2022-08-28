from finance_api import GetStockInfo

if __name__ == "__main__":
    info = GetStockInfo("MSFT")
    print(info)