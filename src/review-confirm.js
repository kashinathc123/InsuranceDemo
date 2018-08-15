import React, {Component} from 'react';
import ContactDetails from './contact-details';
import { Button } from 'react-bootstrap';


class ReviewConfirm extends Component{
    render(){
        return(
            <div>
                <h1>Review Confirm</h1>
                <ContactDetails />
                <Button className="btn-danger">Buy Now</Button>
            </div>
        )
    }
}