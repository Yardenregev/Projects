import React, { Component } from "react";
import BuyButton from "../../../general_components/js/buy_button"
import SellButton from "../../../general_components/js/sell_button"
import MoreInfoButton from "./more_info_button"
import "../css/stock_page.css"

class StockPage extends Component
{
    render()
    {
        // const stock_details = getStockDetailsFromAPI(this.props.symbol)
        // fill in everything according to stock details
        const stock_details = {
            symbol : this.props.symbol,
            name : "Google",
            graph : "hello I'm graph",
            info : "yes, Google is a company"
        }

        return(
            // every props should be given from server according to each stock
            <div id="stock-page">
                <section className="stock-header-section">
                    
                    <div className="stock-header-section-item">
                      {stock_details.symbol}
                    </div>

                    <div className="stock-header-section-item">
                      {stock_details.name}
                    </div>
                    
                    <div className="stock-header-section-item">
                        <BuyButton/>
                    </div>

                    <div className="stock-header-section-item">
                        <SellButton is_bought = {false}/>
                    </div>
                </section>

                <section className="stock-graph-section">
                    {stock_details.graph}
                </section>

                <section className="stock-info-section">
                    <h2>Info</h2>
                    <div className="stock-info-section-item">
                        {stock_details.info}
                    </div>
                    <div className="stock-info-buttons">
                            <BuyButton/>

                            <SellButton is_bought = {true}/> {/* should change according to user DB*/}

                            <MoreInfoButton symbol = {stock_details.symbol}/>
                    </div>
                </section>
            </div>
        )
    }
}

export default StockPage;