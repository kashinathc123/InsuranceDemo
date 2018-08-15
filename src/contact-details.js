import React, {Component} from 'react';

class ContactDetails extends Component{
    constructor(props){
        super();
    }

    render(){
        return(
            <div>
                <h1>Contact Details</h1>
                <p><label>Name:</label><label>{this.props.data.contactInfo.name}</label></p>
            </div>
        )
    }
}

export default ContactDetails;