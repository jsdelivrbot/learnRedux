/**
 * Created by chintan on 12/30/16.
 */
import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action) {
    //console.log("Action received:", action);

    switch (action.type){
        case FETCH_WEATHER:
            // Creates a new array by doing concat on state and payload data
            // Do not do "state.push" here since it will change the current state and
            // will corrupt the state object in reducer.
            // Do not modify state directly in Redux, same as React
            return [action.payload.data, ...state];

    }
    return state;
}