import './App.css';
import Header from './components/general_components/js/header';
import ProtfolioPage from './components/protfolio/js/protfolio_page';
import ResearchTradePage from './components/research&trade/js/reasearch&trade'
import LoginPage from './components/login/js/login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PurchaseWindow from './components/purchase_window/purchase_window';
import React, {useState} from "react";

function App() {

  const [wid, setWid] = useState("25%");
  const [mode, setMode] = useState("buy");
  const openPurchseWindow = ( ) => {
    setWid("25%");
 }

  const closePurchseWindow = ( ) => {
  setWid("0%");
}

  


  return (
    <BrowserRouter>
    <div className="App">
        <header>
            <Header />
        </header>
        <div className="page-content">
          <PurchaseWindow close_func = {closePurchseWindow} width = {wid} symbol = "APPL"/>
          <LoginPage />
          <Switch>
            <Route exact path="/">
              <ProtfolioPage/>
            </Route>

            <Route exact path="/research&trade">
              <ResearchTradePage/>
            </Route>

          </Switch>
      
        </div>  
    </div>
    </BrowserRouter>

  );
}

export default App;
