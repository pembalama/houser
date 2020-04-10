import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Link} from "react-router-dom";

//importing components

// import Dashboard from './Components/Dashboard/Dashboard';
// import Wizard from './Components/Wizard/Wizard';
import Header from './Components/Header/Header';
import routes from "./routes";
// import Dashboard from './Components/Dashboard/Dashboard';

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
            <Header />
              <Link to='/'>Dashboard</Link>
              <Link to='/wizard'>Wizard</Link>
              {routes}
        </div>
      </HashRouter>
    )
  }
}
