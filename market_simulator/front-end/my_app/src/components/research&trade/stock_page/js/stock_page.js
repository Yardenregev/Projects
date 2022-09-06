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
        const profile = {
            logo : this.props.stock_profile.logo_url,
            symbol : this.props.symbol.toUpperCase(),
            graph : "hello I'm graph",
            name : this.props.stock_profile.name,
            info : this.props.stock_profile.summary,
            website : this.props.stock_profile.website,
            industry : this.props.stock_profile.industry,
            full_time_employees : this.props.stock_profile.full_time_employees
        }

        const summary = {
           market_price : this.props.stock_summary.market_price,
           previous_close : this.props.stock_summary.previous_close,
           open : this.props.stock_summary.open,
           ask : this.props.stock_summary.ask,
           volume : this.props.stock_summary.volume,
           avrage_volume : this.props.stock_summary.avrage_volume,
           bid : this.props.stock_summary.bid,
           beta : this.props.stock_summary.beta,
           market_cap : this.props.stock_summary.market_cap,
           dividend_yield : this.props.stock_summary.dividend_yield === null ? "N/A" : this.props.stock_summary.dividend_yield,
           ex_dividend_date : this.props.stock_summary.ex_dividend_date === null ? "N/A" : this.props.stock_summary.ex_dividend_date
        }

        return(
            // every props should be given from server according to each stock
            <div id="stock-page" style= {{visibility : this.props.visibility}}>
                <section className="stock-header-section">
                    <div className="stock-header-section-item">
                      <img src={profile.logo} alt="logo"/>
                    </div>

                    <div className="stock-header-section-item">
                      {profile.symbol}
                    </div>

                    <div className="stock-header-section-item">
                      {profile.name}
                    </div>
                    
                    <div className="stock-header-section-item">
                        <BuyButton func = {() =>
                                                {
                                                this.props.set_purchased_stock_func(profile.symbol)
                                                this.props.o_p_w_func();
                                                this.props.set_buy_func();
                                                }}/>
                    </div>

                    <div className="stock-header-section-item">
                        <SellButton is_bought = {false} func = {() =>
                                                {
                                                this.props.set_purchased_stock_func(profile.symbol)
                                                this.props.o_p_w_func();
                                                this.props.set_sell_func();
                                                }}/>
                    </div>
                </section>

                <section className="stock-info-section">
                    <h2>Info</h2>
                    <div className="stock-info-section-item">
                        {profile.info}
                    </div>
                    <div className="stock-info-buttons">
                            <BuyButton func = {() =>
                                                {
                                                this.props.set_purchased_stock_func(profile.symbol);
                                                this.props.o_p_w_func();
                                                this.props.set_buy_func();
                                                }}/>

                            <SellButton is_bought = {true} func = {() =>
                                                {
                                                this.props.set_purchased_stock_func(profile.symbol);
                                                this.props.o_p_w_func();
                                                this.props.set_sell_func();
                                                }}/> {/* should change according to user DB*/}

                            <MoreInfoButton symbol = {profile.symbol}/>
                    </div>
                </section>

                <section className="stock-summary">

                    <table>
                        <tbody>

                        <tr>
                            <td>market price</td><td>{summary.market_price}</td>
                        </tr>
                        <tr>
                           <td>previous close</td><td>{summary.previous_close}</td>
                        </tr>
                        <tr>
                            <td>open</td><td>{summary.open}</td>
                        </tr>
                        <tr>
                            <td>ask</td><td>{summary.ask}</td>
                        </tr>
                        <tr>
                            <td>volume</td><td>{summary.volume}</td>
                        </tr>
                        <tr>
                            <td>avrage volume</td><td>{summary.avrage_volume}</td>
                        </tr>
                        <tr>
                                <td>bid</td><td>{summary.bid}</td>
                        </tr>                      
                        <tr>
                                <td>beta</td><td>{summary.beta}</td>
                        </tr>
                        <tr>
                                <td>market cap</td><td>{summary.market_cap}</td>
                        </tr>
                        <tr>
                                <td>dividend_yield</td><td>{summary.dividend_yield}</td>
                        </tr>
                        <tr>
                                <td>ex dividend date</td><td>{summary.ex_dividend_date}</td>
                        </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        )
    }
}

export default StockPage;