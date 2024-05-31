import { combineReducers } from "redux";
import questionListReducer from "../reducers/questionListReducer"
import authReducer from "./authReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({questionListReducer,authReducer,userReducer});

export default rootReducer;
