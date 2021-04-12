import axios from "axios";
const $axios = axios.create({
  headers: {
    "Access-Control-Allow-Origin" : "*",
  },
})
export default {
  fetchMovies() {
    return $axios.get(`https://filmatic-api.netlify.app/`);
  },
  rentMovie(payload) {
    return $axios.post(`https://filmatic-api.netlify.app/movie/rent`, (payload));
  },
};
