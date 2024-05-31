// src/redux/reducers/authReducer.js
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "../actions/actionTypes";
import initialState from "./initialState";

const authReducer = (state = initialState.AuthInformations, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        LoginInformations: {
          ...state.LoginInformations,
          loading: true,
          error: null,
          userId:null
        },
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        LoginInformations: {
          ...state.LoginInformations,
          loading: false,
          token: action.payload.access_token,
          error: "",
          userId: action.payload.data.id,
        },
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        LoginInformations: {
          ...state.LoginInformations,
          loading: false,
          error: action.error,
          userId:null
        },
      };
    case REGISTER_REQUEST:
      return {
        ...state,
        RegisterInformations: {
          ...state.RegisterInformations,
          loading: true,
          error: null,
        },
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        RegisterInformations: {
          ...state.RegisterInformations,
          loading: false,
          error: "empty",
        },
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        RegisterInformations: {
          ...state.RegisterInformations,
          loading: false,
          error: action.error,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
