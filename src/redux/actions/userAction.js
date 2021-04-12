import { USER_LOGIN, USER_LOGOUT } from "./constants";
import user from "../api/userApi";

export const login = (payload) => {
  return async (dispatch) => {
    try {
      const response = await user.login(payload);
      const { data } = response;
      console.log(data)
      localStorage.setItem("filmatic_user", JSON.stringify(data));
      await dispatch({
        type: USER_LOGIN,
        payload: data,
      });
      return Promise.resolve(response);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      localStorage.removeItem("filmatic_user");
      await dispatch({
        type: USER_LOGOUT
      });
      return Promise.resolve([]);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };
};
