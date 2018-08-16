import React, {Component} from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import Greeting from './EditContact';

class ContactDetails extends Component{
    constructor(props){
        super(props);
        console.log("props is",this.props.msg);
    }

    render(){

        var Grid = ReactBootstrap.Grid;
        var Row = ReactBootstrap.Row;
        var Col = ReactBootstrap.Col;

        return(

            <Grid className="contact-details-main">
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                        <h3 className="component-header text-muted">Contact Details</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                        <p><small>*Marked fields must be completed, and can only be completed in english.</small></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12} lg={12}>&nbsp;</Col>
                    </Row>    

                    <Row>
                        <Col sm={12} md={12} lg={12}>
                        <Row>
                            <Col sm={6} md={2} lg={2}>
                            <label className="text-muted">Given Names:  </label>
                            </Col>
                            <Col sm={6} md={8} lg={8}>
                            <b>{this.props.data.contactInfo.name}</b>
                            </Col>
                        </Row>                       
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12} lg={12}>&nbsp;</Col>
                    </Row>    
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <Row>
                                <Col sm={6} md={2} lg={2}>
                                <label className="text-muted">Family Names:  </label>
                                </Col>
                                <Col sm={6} md={8} lg={8}>
                                <b>{this.props.data.contactInfo.lastName}</b>
                                </Col>
                            </Row>                            
                        </Col>
                    </Row>
            </Grid> 

        
        )
    }
}

export default ContactDetails;