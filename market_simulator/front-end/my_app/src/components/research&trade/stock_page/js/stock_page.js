import React from "react";
import BuyButton from "../../../general_components/js/buy_button"
import SellButton from "../../../general_components/js/sell_button"
import MoreInfoButton from "./more_info_button"

function StockPage(props)
{
    return(
        // every props should be given from server according to each stock
        <div className="stock-page">
            <div className="stock-header">
                {props.symbol}
                {props.name}
                <BuyButton/>
                <SellButton is_bought = {false}/>
            </div>
            <div className="stock-graph">
            {props.graph}
            </div>

            <div className="stock-info">
                {props.info}
                <BuyButton/>
                <SellButton is_bought = {true}/>
                <MoreInfoButton symbol = {props.symbol}/>
            </div>
        </div>
    )
}

export default StockPage;