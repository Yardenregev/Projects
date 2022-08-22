import React from "react";
import '../css/protfolio.css';
function ChartOfStocks(props) {
    return (
        /* given array of objects as props, map them into a chart */
        <div className="chart-of-stocks">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Quantity</th>
                        <th>Avarage Purchase Price</th>
                        <th>Total Purchase Amount</th>
                        <th>Market Price</th>
                        <th>Market Value</th>
                        <th>Profit</th>
                        <th>Intrest</th>
                    </tr>
                </thead>
                <tbody>
                    {props.stocks.map(stock => (
                        <tr key={stock.id}>
                            <td>{stock.name}</td>
                            <td>{stock.symbol}</td>
                            <td>{stock.quantity}</td>
                            <td>{stock.avaragePurchasePrice}</td>
                            <td>{stock.totalPurchaseAmount}</td>
                            <td>{stock.marketPrice}</td>
                            <td>{stock.marketValue}</td>
                            <td>{stock.totalPurchaseAmount - stock.marketValue}</td>
                            <td>{stock.intrest}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ChartOfStocks;