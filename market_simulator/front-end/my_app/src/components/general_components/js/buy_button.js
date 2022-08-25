import React from "react";
import "../css/buy_sell_button.css"

function BuyButton(props)
{
    return(
        <button className="buy-sell-button buy-button button-component" onClick={props.func}>
            Buy
        </button>
        
    )
}

export default BuyButton;