/**
 * Created by chintan on 1/3/17.
 */
const INITIAL_STATE = {all: [], post: null};
import {FETCH_POSTS} from '../actions/index';

export default function(state = INITIAL_STATE, action) {
    switch(action.type){
        case FETCH_POSTS:
            return {...state, all: action.payload.data};
        default:
            return state;
    }
}