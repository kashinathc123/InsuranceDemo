import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import Contact from './contact';
var dateFormat = require('dateformat');
class Acknowledgement extends Component{
   


    constructor() {
        super();
        var currentDate = new Date(); 
        this.state = {
            date: currentDate
        };
    }

    

    render(){
        var Grid = ReactBootstrap.Grid;
        var Row = ReactBootstrap.Row;
        var Col = ReactBootstrap.Col;

        
        

        return(
            <div>
                
                <Grid>
                     <Row>
                        <Col sm={12} md={12} lg={12}>
                        <div className="ack-main">
                            <h4>Congratulations !</h4>
                            <div className='date'>
                               <p>Your Insurance purchase is confirmed on {dateFormat(this.state.date, "dddd, dd mmmm, yyyy")}.</p> 
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
                            <Route exact path="/" component={Contact}/>
                        </Col>
                     </Row>   

                </Grid>
                
            </div>
        )
    }
}

export default Acknowledgement;