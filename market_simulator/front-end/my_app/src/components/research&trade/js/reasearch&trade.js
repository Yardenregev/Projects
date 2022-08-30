import React ,{Component} from "react";  
import SearchBar from "../search_bar/js/search_bar";
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import StockPage from "../stock_page/js/stock_page";
const axios = require('axios')
const url = "http://127.0.0.1:8000/stock/"

function getStockDetails(symbol)
{
    if(symbol === "")
    {
        return
    }

    console.log("Get")

        return axios.get(`${url}${symbol}/`)
        .then(
              res => console.log(res.data)
             )
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
        s_p_visibility : "hidden",
        stock_details : {}
    };
  }

  
  handleSearch =  (searchItem) => {
    this.setState({searchTerm : searchItem},async () =>
    {
      const response = await getStockDetails(this.state.searchTerm)
      console.log(response)
      this.setState({s_p_visibility : "visible"},() => {})
    });
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
      <StockPage
                 visibility = {this.state.s_p_visibility}
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