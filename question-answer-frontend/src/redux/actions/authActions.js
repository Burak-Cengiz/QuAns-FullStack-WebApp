// src/redux/actions/authActions.js
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
} from "./actionTypes";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {

      let url = apiUrl + "/api/auth/login";
      const response = await axios.post(url, { email, password });
      const token = response.data.access_token;
      localStorage.setItem("token", token);

      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, error: error.message });
    }
  };
};

export const register = (email, password, name, role) => {
  return async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
      let url = apiUrl + "/api/auth/register";
      const response = await axios.post(url, { email, password, name, role });
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: REGISTER_FAILURE, error: error.message });
    }
  };
};
