import axios from "axios";
import { USER_FAILURE, USER_REQUEST, USER_SUCCESS } from "./actionTypes";

const apiUrl = process.env.REACT_APP_API_URL;

export const getUserProfile = (id) => {
  return async (dispatch) => {
    dispatch({ type: USER_REQUEST });
    try {
      let url = apiUrl + "/api/users/" + id;
      const response = await axios.get(url);
      dispatch({ type: USER_SUCCESS, payload: response.data.data});
    } catch (error) {
      dispatch({ type: USER_FAILURE, payload: error.message });
    }
  };
};
