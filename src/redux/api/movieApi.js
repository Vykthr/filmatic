import axios from "axios";

export default {
  fetchMovies() {
    return axios.get(`https://filmatic-api.netlify.app/`);
  },
  rentMovie(payload) {
    return axios.post(`http://localhost:4000/movie/rent`, (payload));
  },
};
