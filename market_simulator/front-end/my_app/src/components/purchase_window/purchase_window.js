import React from 'react';
import BuyWindow from './buy_window/buy_window';
import SellWindow from './sell_window/sell_window';
import BuyButton from '../general_components/js/buy_button'
import SellButton from '../general_components/js/sell_button'
import "./purchase_window.css"
import CloseIcon from '@mui/icons-material/Close';

const PurchaseWindow = (props) =>
{
    let window = <BuyWindow/>
    if(props.mode === "sell")
    {
        window = <SellWindow/>
    }

    return(
        <div className='purchase-window' style={{width : props.width}}>
            <h1>Purchase</h1>
            <CloseIcon className="close-icon" onClick={props.close_func} />
            <BuyButton func = {props.set_buy_func}/>
            <SellButton func = {props.set_sell_func}/>
            Stock: <input type = "text" defaultValue={props.stock}/>
            {window}
            <button>Submit!</button>
        </div>
    )
}


export default PurchaseWindow;