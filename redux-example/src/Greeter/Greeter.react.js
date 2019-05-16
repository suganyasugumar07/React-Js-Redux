import React from 'react';

import {connect} from 'react-redux'

const Greeter = (props) => {

    return (
        <div >
            {props.txtmsg}
            <button onClick={props.birthday}>Birthday</button>
            <button onClick={props.weddingday}>Wedding Day</button>
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        txtmsg : state.text
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        birthday :() => {
            dispatch({type:'BIRTHDAY',text:'Happy Birthday'})
        },
        weddingday : () => {
            dispatch({type:'WEDDINGDAY',text:'Happy Anniversary'})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Greeter);