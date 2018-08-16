import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';

class Acknowledgement extends Component{
   

    constructor() {
        super();

        var today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + today.getDay();

        this.state = {
            date: date
        };
    }

    

    render(){
        var Grid = ReactBootstrap.Grid;
        var Row = ReactBootstrap.Row;
        var Col = ReactBootstrap.Col;
        return(
            <div>
                <h4>Your Travel Insurance </h4>
                <Grid>
                     <Row>
                        <Col sm={12} md={12} lg={12}>
                        <div className="ack-main">
                            <h4>Congratulations !</h4>
                            <div className='date'>
                               <p>Your Insurance purchase is confirmed on {this.state.date}</p> 
                               <p>A confirmation email is on it's way.</p> 
                            </div>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                         <Col sm={12} md={12} lg={12}>&nbsp;</Col>
                    </Row>
                    <Row>
                        <Col className="text-center" sm={12} md={12} lg={12}>
                            <Link className="btn btn-lg btn-danger" to="/">Buy new policy</Link>                
                            
                        </Col>
                     </Row>   

                </Grid>
                
            </div>
        )
    }
}

export default Acknowledgement;