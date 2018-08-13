import React, { Component } from 'react';
import styles from './styles/main.scss'
import {
  Grid ,
  Row,
  Col 
} from 'react-bootstrap';
import Overview from './Overview';
import Detail from './Detail'
import actions from './actions'
import { connect } from 'react-redux';
class App extends Component {
    componentDidMount(){
    
    }

    render() {
        return (
            <div>
                <Col item xs={12} sm={12} md={12}>
                    <Col item xs={4} sm={4} md={4} className="col_vheight">
                       <Overview/>
                    </Col>
                    <Col xs={8} sm={8} md={8} className="col_vheight">
                        <Detail/>
                    </Col>
                   
                </Col>
            </div>
        );
    }
}




export default App;
