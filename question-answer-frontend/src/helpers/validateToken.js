import axios from "axios";

export const validateToken = async (token) => {
  const apiUrl = process.env.REACT_APP_API_URL;

  try {
    let url = apiUrl + "/api/auth/profile";
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    });
    if (response.data.success) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
