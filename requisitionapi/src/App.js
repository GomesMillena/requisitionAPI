import React from 'react';
import './App.css';
import {Home, SearchBar} from './components';
import { Switch, Route, BrowserRouter } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route  path="/" render={props => <SearchBar {...props} />} /> 
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
