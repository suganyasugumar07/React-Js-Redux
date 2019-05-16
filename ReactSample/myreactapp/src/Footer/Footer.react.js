import React from 'react';


const styles = { color: "red" };

const Footer = (props) => {
    return (
        <div >
            <h3>Designed during React Training</h3>
            <h3  style={styles} >{props.designed}</h3>
        </div>
    );

}

export default Footer;