import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ContactDetails from './contact-details';
import * as ReactBootstrap from 'react-bootstrap';
import { Route, IndexRoute } from 'react-router';
var data = require('./db.json');

class App extends Component {
  render() {
    var Button = ReactBootstrap.Button;
    return (
      <div className="App">
        
        <ContactDetails data={data}/>

        <Button className="btn-danger">Confirm</Button>
      </div>
    );
  }
}

export default App;
