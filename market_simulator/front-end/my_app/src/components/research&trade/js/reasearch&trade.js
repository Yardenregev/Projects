import React from "react";  
import SearchBar from "../search_bar/js/search_bar";
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';

function ResearchTradePage() {
  return (
    <div className="research-trade-page">
        {/*
            request data from server and pass it as parameter to SearchBar component
        */}
      <h1>Research & Trade</h1>
      <SearchBar placeholder="Search for stocks.." data={[
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

      {/* <StockPage /> */}
      <div id="stock-page-wrapper">
        
      </div>
    </div>
  );
}
export default ResearchTradePage;