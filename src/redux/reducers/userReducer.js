import { USER_LOGOUT, USER_LOGIN } from "../actions/constants";

const userData = JSON.parse(localStorage.getItem("filmatic_user"));

const defaultState = {
  authenticated: !!userData,
  userData: userData,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case USER_LOGOUT:
      return defaultState;
    case USER_LOGIN:
      return { ...state, authenticated: true, userData: action.payload };
    default:
      return state;
  }
};
