import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Contact from './contact';
import Acknowledgement from './acknowledgement';
import * as ReactBootstrap from 'react-bootstrap';
import {BrowserRouter, Route} from 'react-router-dom'
import ReviewConfirm from './review-confirm';


class App extends Component {
  render() {
    var Grid = ReactBootstrap.Grid;
    var Row = ReactBootstrap.Row;
    var Col = ReactBootstrap.Col;
    var ProgressBar = ReactBootstrap.ProgressBar;
    var now = 75;

       return (
      <div className="App">

  <Grid>
  <Row>
      <Col sm={12} md={12} lg={12}>&nbsp;</Col>
  </Row>
  <Row>
  <Col sm={12} md={12} lg={12}>
    <h2 className="text-muted">Your Travel Insurance </h2>
    </Col>
  </Row>
    <Row className="show-grid">
      <Col xs={4} sm={4} md={4} lg={4}>
        1.Personal Details
        
      </Col>
      <Col xs={3} sm={4} md={4} lg={4}>
        2.Review
      </Col>      
      <Col xs={5} sm={4} md={4} lg={4}>
        3.Acknowledgement
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
            <Route exact path="/acknowledgement" component={Acknowledgement}/>       
          </div>
        </BrowserRouter>
        
        
      </div>
    );
  }
}

export default App;
