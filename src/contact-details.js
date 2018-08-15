import React, {Component} from 'react';

class ContactDetails extends Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div className="contact-details-main">
                <h3 className="component-header">Contact Details</h3>
                <p><small>*Marked fields must be completed, and can only be completed in english.</small></p>
                <p><label>Given Names:  </label><b>{this.props.data.contactInfo.name}</b></p>
                <p><label>Family Names:  </label><b>{this.props.data.contactInfo.lastName}</b></p>
            </div>
        )
    }
}

export default ContactDetails;