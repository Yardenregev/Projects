import React from "react";
import "../css/buy_sell_button.css";

function SellButton(props)
{
    let color = "gray";
    if(props.is_bought === true)
    {
        color = "red";
    }

    return (
        <button className="buy-sell-button sell-button button-component" 
                style={{backgroundColor: color}}
                onClick = {props.func}> 
            Sell
        </button>
    )
}

export default SellButton;