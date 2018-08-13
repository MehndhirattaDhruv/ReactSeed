import React from 'react';
import { 
        Navbar ,
        Nav,
        MenuItem,
        NavDropdown,
        NavItem 

} from 'react-bootstrap';
export default class Overview extends React.Component{
  render(){
    return(
            <div className="overview">
            <div className="w3-display-container">
                <img className="overview_image" src="/images/avatar_hat.jpg" />
            </div>
            <div className="div_list_view">
                <p> <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i> <span>  Front end developer </span></p>
                <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>  <span> Chandigarh , India </span></p>
                <p> <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>  <span> dmrrattaa7@gmail.com </span> </p>
                <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i> <span> 8295238079  </span></p>
              
                <hr/>
                <h5> <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>  <span> Skills </span></h5>
                <hr />

                <p><i className="fab fa-node-js"></i> <span> Javascript </span></p>
                <p><i className="fab fa-react"></i> <span> React js  </span></p>
                <p><i className="fab fa-react"></i> <span> Redux </span></p>
                <p><i className="fab fa-css3"></i> <span> SCSS </span></p>
                <p><i className="fab fa-html5"></i> <span> SCSS </span></p>
                <p><i className="fab fa-node"></i> <span> Node  </span></p>

                <hr />
                <h5><i className='fa fa-globe fa-fw w3-margin-right w3-text-teal'></i> <span> Languages </span></h5>
                <hr />

                <p><i className="fas fa-globe"></i> <span> English </span></p>
                <p><i className="fas fa-globe"></i> <span> Hindi  </span></p>
              
          </div>
                
            </div>
        )

    }
}