import React, {Component} from 'react';
import ContactDetails from './contact-details';
import * as ReactBootstrap from 'react-bootstrap';
import {BrowserRouter, Link, Route} from 'react-router-dom';
var data = require('./db.json');


class Contact extends Component{
    constructor(props){
        super();
    }
    reviewConfirm(props){
       
    }
    render(){

        var Grid = ReactBootstrap.Grid;
    var Row = ReactBootstrap.Row;
    var Col = ReactBootstrap.Col;

        return(
            <div>
                <Grid>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                        <ContactDetails data={data}/>
                        </Col>
                    </Row>
                    <Row>
                    <Col sm={12} md={6} lg={6}>&nbsp;</Col>
                        <Col sm={12} md={6} lg={6}>
                            <Link className="pull-right btn btn-lg btn-danger" to="/review-confirm">Confirm</Link>
                        </Col>
                    </Row>
                   </Grid> 

                
                
            </div>
        )
    }
}

export default Contact;