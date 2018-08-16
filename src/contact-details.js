import React, {Component} from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import Greeting from './EditContact';

class ContactDetails extends Component{
   
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    
        this.state = {
          show: false
        };
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
      handleHide() {
        this.setState({ show: false });
      }

    render(){

        var Grid = ReactBootstrap.Grid;
        var Row = ReactBootstrap.Row;
        var Col = ReactBootstrap.Col;
        var ButtonToolbar = ReactBootstrap.ButtonToolbar;
        var Modal = ReactBootstrap.Modal;
        var Button = ReactBootstrap.Button;
        var FormControl = ReactBootstrap.FormControl;
        return(
                <div>
            <Grid className="contact-details-main">
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                        <h3 className="component-header text-muted">Contact Details  <a href="#" bsStyle="primary" onClick={this.handleShow}>
                     edit
                 </a></h3>
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

            <ButtonToolbar>
              
            <Modal
            {...this.props}
            show={this.state.show}
            onHide={this.handleHide}
            dialogClassName="custom-modal">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-lg">
                Edit contact details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                
                <p>
                    <Grid>
                    <Row>
                            <Col sm={6} md={2} lg={2}>
                            <label className="text-muted">Given Names:  </label>
                            </Col>
                            <Col sm={6} md={8} lg={8}>
                            <FormControl style={{width:'300px'}} type="text" value={this.props.data.contactInfo.name} placeholder="Enter text" 
                            />
                            </Col>
                        </Row>  
                        <Row>
                            <Col sm={6} md={2} lg={2}>
                            <label className="text-muted">Family Names:  </label>
                            </Col>
                            <Col sm={6} md={8} lg={8}>
                            <FormControl style={{width:'300px'}} type="text" value={this.props.data.contactInfo.lastName} placeholder="Enter text" 
                            />
                            </Col>
                        </Row>  
                        </Grid>
                        
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
            </Modal>
            </ButtonToolbar>

        </div>
        )
    }
}

export default ContactDetails;