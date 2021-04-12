import { SET_MOVIELIST } from "./constants";
import movieApi from "../api/movieApi";

export const getMovies = () => {
  return async (dispatch) => {
    try {
      const response = await movieApi.fetchMovies();
      const { data } = response;
      await dispatch({
        type: SET_MOVIELIST,
        payload: data,
      });
      return Promise.resolve(response);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };
};

export const rentMovie = (userId, movieId) => {
  return async (dispatch) => {
    try {
      const response = await movieApi.rentMovie({userId, movieId})
      console.log(response.data)
      await dispatch({
        type: SET_MOVIELIST,
        payload: response.data,
      });
      return Promise.resolve(response.data);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  };
};