import React, { Component } from "react";
import BuyButton from "../../../general_components/js/buy_button"
import SellButton from "../../../general_components/js/sell_button"
import MoreInfoButton from "./more_info_button"
import "../css/stock_page.css"

class StockPage extends Component
{


    render()
    {

        return(
            // every props should be given from server according to each stock
            <div id="stock-page">
                <div className="stock-header">
                    {this.props.symbol}
                    {this.props.name}
                    <BuyButton/>
                    <SellButton is_bought = {false}/>
                </div>
                <div className="stock-graph">
                {this.props.graph}
                </div>

                <div className="stock-info">
                    {this.props.info}
                    <BuyButton/>
                    <SellButton is_bought = {true}/>
                    <MoreInfoButton symbol = {this.props.symbol}/>
                </div>
            </div>
        )
    }
}

export default StockPage;