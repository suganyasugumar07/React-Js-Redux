import React from 'react';
import Heading from '../Heading/Heading.react';
import Content from '../Content/Content.react';
import Footer from '../Footer/Footer.react';

import './AdminDashboard.css';

class AdminDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='admindashboard_wrapper'>
                <div className="row"><Heading majorHeading='Heading from Admin'></Heading>
                <hr></hr></div>
                <div className="row"><Content></Content>
                <hr></hr></div>
                <div className="row"><Footer designed="designed in Verizon TR 9002"></Footer>
                <hr></hr></div>
                
                
                
            </div>
        );
    }
}

export default AdminDashboard;