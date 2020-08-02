import React from 'react';
import './App.css';
import {Home, Result} from './Pages';
import { Switch, Route, BrowserRouter } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path="/"result render={props => <Result {...props} />} /> 
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
