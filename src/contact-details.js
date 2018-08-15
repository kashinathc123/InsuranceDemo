import React, {Component} from 'react';

class ContactDetails extends Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div>
                <h1>Contact Details</h1>
                <small>*Marked fields must be completed, and can only be completed in english.</small>
                <p><label>Given Names:</label><label>{this.props.data.contactInfo.name}</label></p>
                <p><label>Family Names:</label><label>{this.props.data.contactInfo.lastName}</label></p>
            </div>
        )
    }
}

export default ContactDetails;