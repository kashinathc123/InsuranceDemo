import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import ContactDetails from './contact-details';
import Acknowledgement from './acknowledgement';
var data = require('./db.json');


class ReviewConfirm extends Component{
    render(){
        return(
            <BrowserRouter>
            <div>
                <h1>Review Confirm</h1>
                <ContactDetails data={data}/>
                <Acknowledgement />
                <Link className="btn btn-danger" to="/acknowledgement">Buy Now</Link>
                
                <Route  exact path="/acknowledgement" component={Acknowledgement}/>
            </div>
            </BrowserRouter>
        )
    }
}
export default ReviewConfirm;