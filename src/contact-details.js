import React, {Component} from 'react';
import * as ReactBootstrap from 'react-bootstrap';

class ContactDetails extends Component{
   
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);

        this.state = {
          show: false,
          name: this.props.data.contactInfo.name,
          lastName: this.props.data.contactInfo.lastName
        };
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
      handleHide() {
        this.setState({ show: false });
      }

      handleChange(event) {   
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value});
        console.log(event.target.value);
      }

      handleSave(){
        this.setState({ 
            name: this.props.data.contactInfo.name,
            lastName: this.props.data.contactInfo.lastName,
            show: false
         });
         this.props.updateData(this.state);
      }


    render(){

        var Grid = ReactBootstrap.Grid;
        var Row = ReactBootstrap.Row;
        var Col = ReactBootstrap.Col;
        var ButtonToolbar = ReactBootstrap.ButtonToolbar;
        var Modal = ReactBootstrap.Modal;
        var Button = ReactBootstrap.Button;
        var Glyphicon = ReactBootstrap.Glyphicon;
        var FormControl = ReactBootstrap.FormControl;
        var edit = this.props.edit;
        var editButton;
        if(edit){
            editButton = <a bsstyle="primary" className="edit-button" onClick={this.handleShow}><Glyphicon glyph="pencil" /> edit </a>
        } else {
            editButton = null;
        }
        return(
                <div>
            <Grid className="contact-details-main">
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                        <Row>
                            <Col sm={6} md={11} lg={11}><h4 className="component-header text-muted">Contact Details                       
                        </h4></Col>
                            <Col className="edit-button" sm={6} md={1} lg={1}>{editButton}</Col>
                        </Row>
                        

                        

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
                
              
                    <Grid>
                    <Row>
                            <Col sm={6} md={2} lg={2}>
                            <label className="text-muted">Given Names:  </label>
                            </Col>
                            <Col sm={6} md={8} lg={8}>
                            <FormControl name="name" style={{width:'300px'}} type="text" value={this.state.name} placeholder="Enter text" onChange={this.handleChange} 
                            />
                            </Col>
                        </Row>  
                        <Row>
                            <Col sm={6} md={2} lg={2}>
                            <label className="text-muted">Family Names:  </label>
                            </Col>
                            <Col sm={6} md={8} lg={8}>
                            <FormControl name="lastName" style={{width:'300px'}} type="text" value={this.state.lastName} placeholder="Enter text"  onChange={this.handleChange}
                            />
                            </Col>
                        </Row>  
                        </Grid>
                        
                
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn-primary" onClick={this.handleSave}>Save</Button>
                <Button onClick={this.handleHide}>Close</Button>
            </Modal.Footer>
            </Modal>
            </ButtonToolbar>

        </div>
        )
    }
}

export default ContactDetails;