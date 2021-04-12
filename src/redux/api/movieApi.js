import axios from "axios";

export default {
  fetchMovies() {
    return axios.get(`http://localhost:4000/`);
  },
  rentMovie(payload) {
    return axios.post(`http://localhost:4000/movie/rent`, (payload));
  },
};
