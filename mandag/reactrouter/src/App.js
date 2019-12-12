import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import data from "./data/data.json"
import Welcome from './components/Welcome'
import AllUsers from './components/AllUsers'
import Details from './components/Details'


function App() {
  return (

    <Router>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/all" component={AllUsers} />
        <Route path="/details/:index" component={Details} />
      </Switch>
    </Router>

  );
}


export default App;
