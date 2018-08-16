import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import ContactDetails from './contact-details';
import Acknowledgement from './acknowledgement';
var data = require('./db.json');
const isLoggedIn = true;


class ReviewConfirm extends Component{
    
    constructor(props){
        super(props);
        console.log("swds",this.state.isLogged)
    }
    
    state={
        isLogged: 'prasas'
    }
    
    render(){
        var Grid = ReactBootstrap.Grid;
    var Row = ReactBootstrap.Row;
    var Col = ReactBootstrap.Col;
        return(
            <BrowserRouter>
            <div>

                 <Grid>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <h1>Review Confirm</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                             <ContactDetails msg={this.isLogged} data={data}/>
                        </Col>
                    </Row>
                    
                    <Row>
                    <Col sm={12} md={6} lg={6}>&nbsp;</Col>
                        <Col sm={12} md={6} lg={6}>
                             <Link className="pull-right btn btn-lg btn-danger" to="/Acknowledgement">Buy Now</Link>                
                            <Route exact path="/acknowledgement" component={Acknowledgement}/>
                        </Col>
                    </Row>
                 </Grid>      

                
               
               
            </div>
            </BrowserRouter>
        )
    }
}
export default ReviewConfirm;