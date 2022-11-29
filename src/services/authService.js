import axios from "axios";
import _routes from "./service-routes";

const authService = {
  doLogin: async (postBody) => {
    const res = await axios.post(_routes.login, postBody);
    return res.data;
  },

  handleLoginError: (err, callback) => {},

  doRegister: async (postBody) => {
    const res = await axios.post(_routes.register, postBody);
    return res.data;
  },

  handleRegisterError: (err, callback) => {
    callback("Email already in use");
  },
};

export default authService;
