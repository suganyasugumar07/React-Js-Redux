import React from 'react';
import {fetchAllTrainers} from '../restStore';
import {connect} from 'react-redux'


const ShowTrainers = (props) => {
    // if(!props.loaded) {
    //     return (
    //         <h1> Click to Load</h1>
    //     )
    // }
    return (
        <div >
            <button onClick={props.getAll}>Show Trainers</button>
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        loadStatus : state.loaded,
        dataList : state.list
    }
}

const mapDispatchToProps =(dispatch,ownProps) =>{
    return {
        getAll: () => {
            dispatch(fetchAllTrainers())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowTrainers)
//export default showTrainers;