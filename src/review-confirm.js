import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import ContactDetails from './contact-details';
//import Acknowledgement from './acknowledgement';
var data = require('./db.json');
const isLoggedIn = true;


class ReviewConfirm extends Component{
    

    constructor(props){
        super(props);
        this.state = {
            data : data
        }
        this.update = this.update.bind(this);
    }
    
    state={
        isLogged: 'prasas'
    }

    handleBuyNow(){
        this.props.history.push('/acknowledgement');
    }
    update(contactData){
        this.setState({
            data : {contactInfo:contactData}
        });
    }
    render(){
        var Grid = ReactBootstrap.Grid;
    var Row = ReactBootstrap.Row;
    var Col = ReactBootstrap.Col;
    var Button = ReactBootstrap.Button;
    var editBtn = true;
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
                             <ContactDetails msg={this.isLogged} data={this.state.data} edit={editBtn} updateData={this.update}/>
                        </Col>
                    </Row>
                    
                    <Row>
                    <Col sm={12} md={6} lg={6}>&nbsp;</Col>
                        <Col sm={12} md={6} lg={6}>
                            <Button className="pull-right btn btn-lg btn-danger" onClick={this.handleBuyNow.bind(this)}>Buy Now</Button>
                        </Col>
                    </Row>
                 </Grid>      

                
               
               
            </div>
            </BrowserRouter>
        )
    }
}
export default ReviewConfirm;