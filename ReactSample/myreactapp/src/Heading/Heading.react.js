import React from 'react';
import logo from '../images/logo.svg';
import smile from '../images/smile.png';
import NavBar from '../NavBar/NavBar.react';


const Heading = (props) => {

    return (
        <div >
            
            <img src={smile} alt="Logo"></img>
            <h1>React JS and REDUX Training</h1>
            <h1>{props.majorHeading}</h1>
            {/* <img src={'../images/logo.svg'} alt="One more Logo"></img> */}
        </div>
    );

}

export default Heading;