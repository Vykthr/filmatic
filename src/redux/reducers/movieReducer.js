import { SET_MOVIELIST } from "../actions/constants";

const defaultState = {
  movieList: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_MOVIELIST:
      return { ...state, movieList: action.payload };
    default:
      return state;
  }
};
