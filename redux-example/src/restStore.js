import {createStore,applyMiddleware} from 'redux' 
import axios from 'axios';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const nameInitialState = {
    loader:false,
    list: [{}]
}

//action creator

export const fetchTrainer = (frmThunk,status)=>{
    return {
        type :'FETCH_TRAINERS',
        list : frmThunk,
        loaded : status
    }
}

const url ="http://localhost:4000/trainers"

//create a function for thunk
export const fetchAllTrainers =() => {
    return function(dispatch) {
        axios.get(url).then(resp =>dispatch({type:'FETCH_TRAINERS',frmThunk:resp.data,loaded:true}))
    }
}


//Reducer
const trainers = (state = nameInitialState,action) => {
    switch(action.type) {
        case 'FETCH_TRAINERS':
        return action;
        case 'ACTION_TYPE_2':
        return state;
        default:
        return state;

    }
}

const restStore = createStore(trainers,composeWithDevTools(applyMiddleware(thunk)));
export default restStore;