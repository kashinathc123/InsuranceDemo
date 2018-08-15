import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Contact from './contact';

import * as ReactBootstrap from 'react-bootstrap';
import {BrowserRouter, Link, Route} from 'react-router-dom'
import ReviewConfirm from './review-confirm';


class App extends Component {
  render() {
    var Button = ReactBootstrap.Button;
    return (
      <div className="App">
        <BrowserRouter>
          <div>
         
          <Route  exact path="/" component={Contact}/>
          <Route  exact path="/review-confirm" component={ReviewConfirm}/>
          
          </div>
        </BrowserRouter>
        
        
      </div>
    );
  }
}

export default App;
