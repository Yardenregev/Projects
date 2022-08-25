import ProtfolioHeader from './protfolio_header';
import BalanceReportButton from './balance_report_button';
import ChartOfStocks from './chart_of_stocks';
import '../css/protfolio.css';
function ProtfolioPage(props)
{
    return(
    <div className="protfolio">
    <h1 className="App-title">Protfolio</h1>
      <div className='App-header'>
            {/* the parameters cashBalance and protfolioBalance 
            should be taken from user database */}
            <ProtfolioHeader cashBalance={500} protfolioBalance={200} />
            <h1 className='App-title protfolio-header-item'>Welcome to Protfolio</h1>
            <BalanceReportButton />
      </div>

      <div className='App-body'>
         {/*
          each user should have an array of stocks tracking the following information,
          this is for example purposes only:
         */}
          <h2>Stocks</h2>
          <ChartOfStocks stocks={[{
            id: 1,
            name: 'Apple',
            symbol: 'AAPL',
            quantity: 100,
            avaragePurchasePrice: 100,
            totalPurchaseAmount: 10000,
            marketPrice: 120,
            marketValue: 12000,
            intrest: 0.1
          },
          {
            id: 2,
            name: 'Microsoft',
            symbol: 'MSFT',
            quantity: 100,
            avaragePurchasePrice: 50,
            totalPurchaseAmount: 12000,
            marketPrice: 120,
            marketValue: 666600,
            intrest: 0.1
          }
          ]} />
      </div>
    </div>
    )
}

export default ProtfolioPage;