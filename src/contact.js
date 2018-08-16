import React, {Component} from 'react';
import ContactDetails from './contact-details';
import * as ReactBootstrap from 'react-bootstrap';
var data = require('./db.json');


class Contact extends Component{
    constructor(props){
        super();
        this.state = {
            data : data
        }
       
    }
    handleReviewConfirm(){
        this.props.history.push('/review-confirm');
    }
 
    
    render(){

    var Grid = ReactBootstrap.Grid;
    var Row = ReactBootstrap.Row;
    var Col = ReactBootstrap.Col;
    var Button = ReactBootstrap.Button;
    var editBtn = false;
        return(
            <div>
                <Grid>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                        <ContactDetails data={this.state.data} edit={editBtn}/>
                        </Col>
                    </Row>
                    <Row>
                    <Col sm={12} md={6} lg={6}>&nbsp;</Col>
                        <Col sm={12} md={6} lg={6}>
                            <Button className="pull-right btn btn-lg btn-danger" onClick={this.handleReviewConfirm.bind(this)}>Confirm</Button>
                        </Col>
                    </Row>
                   </Grid> 

                
                
            </div>
        )
    }
}

export default Contact;