import React from 'react';
import {
    Row ,
    Col,
    Grid
} from 'react-bootstrap';
export default class Detail extends React.Component{
    render(){
        return(
        <div className="detail">   
            <h3> <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i> <span> Work Experience  </span></h3>
            <h5> Front end developer / tecHindustan Solutions</h5>
            <h6> <i className="fa fa-calendar fa-fw w3-margin-right"></i>  <span> Jan 2018 - <span className="tag"> Current </span></span></h6>
                <p>
                    Enthusiastic, skilled, and reliable JavaScript/ReactJS developer seeking a
                    position that reflects my experience, skills, and personal attributes including
                    dedication, meeting goals, creativity, and the ability to follow through.
                </p>
        </div>
        )
    }
}