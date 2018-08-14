import React from 'react';
import {
    Row ,
    Col,
    Grid
} from 'react-bootstrap';
export default class Detail extends React.Component{
    render(){
        return(
        <div>   
            <div className="detail">
                <h3> <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i> <span> Work Experience  </span></h3>
                <h5> Front end developer / tecHindustan Solutions</h5>
                <h6> <i className="fa fa-calendar fa-fw w3-margin-right"></i>  <span> Jan 2018 - <span className="tag"> Current </span></span></h6>
                    <p>
                        Enthusiastic, skilled, and reliable JavaScript/ReactJS developer seeking a
                        position that reflects my experience, skills, and personal attributes including
                        dedication, meeting goals, creativity, and the ability to follow through.
                    </p>

                    <hr />
                    <h3> <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i> <span> Projects  </span></h3>
                    <hr />
                    <ul> <h4>Incentive Pro</h4>
                        <li> 
                            Developed a product from scratch using ReactJS, which provide information regarding
                            Central Government and State Government Subsidies
                        </li>
                        <li>
                            Various Highlights which I have done in that is Created referral system and implemented
                            payment portal along with manual and advance search of subsidies.
                        </li>
                        <li>                                
                            ww.incentivepro.in/portal
                        </li>
                        <li>
                            Technologies Used: ReactJS, Redux, React-Router 4, SCSS, HTML5, Axios
                        </li>
                    </ul>
                    <hr/>
                    <ul> <h4>Crispage</h4>
                        <li>
                            Build ReactJS Responsive UI for Multilayered users
                        </li>
                        <li>
                        Integrated APIs and managed data using Redux framework
                        </li>
                        <li>
                            Technologies Used: ReactJS, Redux, React-Router 4, SCSS, HTML5, Axios
                        </li>
                        <li>
                        Link :-   http://crispage.agiledevelopers.in
                        Credentials:- 
                        email:admin@gmail.com , password:admin
                        </li>
                    </ul>
                </div>

                <div className="education">
                    <h3> <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i> <span> Education  </span></h3>
                    <h5> Kurukshetra University </h5>
                    <h6> <i className="fa fa-calendar fa-fw w3-margin-right"></i>  <span> 2013 -2017</span></h6>
                    <h6 className="bachelor_Degree"> Bachelor of Technology in Electronics and Communication Engineering </h6>
                </div>
             
        </div>
        )
    }
}