import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//React Router
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/home.js'
import Dashboard from './components/Dashboard.js'

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
