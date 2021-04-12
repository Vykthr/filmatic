import axios from "axios";
const $axios = axios.create({
  headers: {
    "Access-Control-Allow-Origin" : "*",
  },
})
export default {
  login(payload) {
    return $axios.post("https://filmatic-api.netlify.app/auth/login", payload);
  },
  register(payload) {
    return $axios.post("https://filmatic-api.netlify.app/auth/create", payload);
  },
};
