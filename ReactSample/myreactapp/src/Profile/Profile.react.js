import React from 'react';
import MyPropTypes from 'prop-types';


const Profile = (props) => {

    return (
        <div >
            <img src={props.imageRef} alt='profilePicture'></img>
            <h1> {props.user.name}</h1>
            <h2>{props.user.password}</h2>
            <p> Points Earned {props.points}</p>
            <p>Level {props.level}</p>
        </div>
    );

}

Profile.propTypes = {
    imageRef: MyPropTypes.string.isRequired,
    points: MyPropTypes.number,
    level: MyPropTypes.string,
    user: MyPropTypes.shape({
        name: MyPropTypes.string,
        email : MyPropTypes.string
    })
}

export default Profile;