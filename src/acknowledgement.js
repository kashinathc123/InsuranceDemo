import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
class Acknowledgement extends Component{
    render(){
        return(
            <div>
                <h4>Your Travel Insurance </h4>
                <ul className="ack-progress">
                    <li>Personal Details</li>
                    <li>Review</li>
                    <li>Acknowledgement</li>
                </ul>
                <div>
                    <p>Congratulations !</p>
                </div>
            </div>
        )
    }
}

export default Acknowledgement;