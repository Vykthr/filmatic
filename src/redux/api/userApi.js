import axios from "axios";

export default {
  login(payload) {
    return axios.post("http://localhost:4000/auth/login", payload);
  },
  register(payload) {
    return axios.post("http://localhost:4000/auth/create", payload);
  },
};
