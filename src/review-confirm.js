import React, {Component} from 'react';
import ContactDetails from './contact-details';
import { Button } from 'react-bootstrap';
var data = require('./db.json');

class ReviewConfirm extends Component{
    render(){
        return(
            <div>
                <h1>Review Confirm</h1>
                <ContactDetails data={data}/>
                <Button className="btn-danger">Buy Now</Button>
            </div>
        )
    }
}
export default ReviewConfirm;