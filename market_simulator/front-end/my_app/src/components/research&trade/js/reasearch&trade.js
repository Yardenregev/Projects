import React ,{Component} from "react";  
import SearchBar from "../search_bar/js/search_bar";
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import StockPage from "../stock_page/js/stock_page";

class ResearchTradePage extends Component
{
  constructor (){
    super();
    this.state = {
        searchTerm : ""
    };
  }

  handleSearch =  (searchItem) => {
      this.setState({searchTerm : searchItem},() =>
      {
        // console.log(this.state.searchTerm);
        const element = document.getElementById("stock-page");
        element.style.visibility = "visible";
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
              symbol: "APPL",
              marketValue: "100$"
          },
          {
              name: "Google",
              logo: <GoogleIcon />,
              symbol: "GOOGL",
              marketValue: "200$"
          }
      ]}/>
      <StockPage symbol = {this.state.searchTerm}/>  
    </div>
  );

  }

}
export default ResearchTradePage;