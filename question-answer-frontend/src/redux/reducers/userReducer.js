import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes"


export default function userReducer(state=initialState.userProfile,action){
    switch (action.type) {  
        case actionTypes.USER_REQUEST:
            return state
        case actionTypes.USER_SUCCESS:
            return action.payload
        case actionTypes.USER_FAILURE:
            return action.payload
        default:
            return state
    }
}