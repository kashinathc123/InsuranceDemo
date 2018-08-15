import React, {Component} from 'react';
import ContactDetails from './contact-details';
import {BrowserRouter, Link, Route} from 'react-router-dom'
var data = require('./db.json');

class Contact extends Component{
    constructor(props){
        super();
    }
    reviewConfirm(props){
       
    }
    render(){
        return(
            <div>
                <ContactDetails data={data}/>
                <Link className="btn-danger" to="/review-confirm">Confirm</Link>
            </div>
        )
    }
}

export default Contact;