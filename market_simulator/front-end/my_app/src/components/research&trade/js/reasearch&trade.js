import React ,{Component} from "react";  
import SearchBar from "../search_bar/js/search_bar";
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import StockPage from "../stock_page/js/stock_page";
import ProgressSign from "./progress_sign"

const axios = require('axios')
const url = "http://127.0.0.1:8000/stock/"

function getStockDetails(symbol)
{
    if(symbol === "")
    {
        return
    }

    return axios.get(`${url}${symbol}/`)
      .catch(function(){
          console.log(`No response from symbol ${symbol}`)
      })
}


class ResearchTradePage extends Component
{
  constructor (){
    super();
    this.state = {
        searchTerm : "",
        stock_page_visibility : "hidden",
        progress_sign_display : "none",
        stock_details : {}
    };
  }

  
  handleSearch = async (searchItem) => {
      this.setState({stock_page_visibility : "hidden"})
      this.setState({progress_sign_display:"block"})
      const response = await getStockDetails(searchItem);
      this.setState({searchTerm : searchItem})
      let data = response.data;
      console.log(data)
      if(data.name === "Null")
      {
          alert("No Ticker Found")
          return
      }
      this.setState({stock_details:data});
      this.setState({progress_sign_display:"none"})
      this.setState({stock_page_visibility : "visible"})
  }
  
  render()
  {
  return (
    <div className="research-trade-page">
        {/*
            request data from server and pass it as parameter to SearchBar component
        */}
      <h1>Research & Trade</h1>
      <SearchBar placeholder="Search for stocks.." 
                 search_func = {this.handleSearch}
                 data={[
          {
              name: "Apple",
              logo: <AppleIcon />,
              symbol: "AAPL",
              marketValue: "100$"
          },
          {
              name: "Google",
              logo: <GoogleIcon />,
              symbol: "GOOGL",
              marketValue: "200$"
          }
      ]}/>
      <ProgressSign display = {this.state.progress_sign_display}/>

      <StockPage
                 visibility = {this.state.stock_page_visibility}
                 stock_details = {this.state.stock_details}
                 symbol = {this.state.searchTerm}
                 o_p_w_func = {this.props.o_p_w_func}
                 set_buy_func = {this.props.set_buy_func}
                 set_sell_func = {this.props.set_sell_func}
                 />  
    </div>
  );

  }

}
export default ResearchTradePage;