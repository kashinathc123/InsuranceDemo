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
    var Grid = ReactBootstrap.Grid;
    var Row = ReactBootstrap.Row;
    var Col = ReactBootstrap.Col;
    var Clearfix = ReactBootstrap.Clearfix;
    var ProgressBar = ReactBootstrap.ProgressBar;
    var now = 75;

       return (
      <div className="App">

     


  <Grid>
  <Row>
      <Col sm={12} md={12} lg={12}>&nbsp;</Col>
  </Row>
    <Row className="show-grid">
      <Col sm={6} md={4} lg={4}>
        Personal Details
        
      </Col>
      <Col sm={6} md={4} lg={4}>
        Review
      </Col>      
      <Col sm={6} md={4} lg={4}>
        Acknowledgement
      </Col>     
    </Row>
    <Row>
      <Col className="progressbar" sm={12} md={12} lg={12}>      
        <ProgressBar now={now} />
      </Col>
  </Row>
    
    
  </Grid>

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
