import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Split from './Views/Split'
import Home from './Views/Home'
import Error from './Views/Error'
import Header from './Components/Header'
import { AppProvider } from './AppContext'


function App() {
  return (
    <AppProvider>
      <Router>
        <Header></Header>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/split" component={Split} ></Route>
            <Route component={Error} ></Route>
          </Switch>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
