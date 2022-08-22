import './App.css';
import Header from './components/general_components/js/header';
import ProtfolioPage from './components/protfolio/js/protfolio_page';
import ResearchTradePage from './components/research&trade/js/reasearch&trade'
import LoginPage from './components/login/js/login';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
    <div className="App">
        <header>
            <Header />
        </header>
        <div className="page-content">
          <LoginPage />
          <Switch>
            <Route exact path="/">
              <ProtfolioPage />
            </Route>

            <Route exact path="/research&trade">
              <ResearchTradePage />
            </Route>

          </Switch>
      
        </div>  
    </div>
    </BrowserRouter>

  );
}

export default App;
