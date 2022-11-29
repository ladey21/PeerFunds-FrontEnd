import axios from "axios";
import _routes from "./service-routes";

const token = localStorage.getItem("auth-token");

axios.interceptors.request.use(
  (config) => {
    if (token) config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const service = {
  setPageTitle: (component) => (document.title = `Peer2Fund - ${component}`),

  getPayload: () => {
    if (token !== null) {
      const { roles: role, id: user_id, email } = JSON.parse(token);
      return { role, user_id, email };
    }
  },

  browserHeight: () => window.innerHeight - 100,
  isMobile: navigator.userAgent.toLowerCase().match(/mobile/i),

  getCurrentUserData: async () => {
    const res = await axios.get(_routes.currentUserDetails);
    return res.data;
  },

  createGroup: async (postBody) => {
    const res = await axios.post(_routes.groups, postBody);
    return res.data;
  },

  getAllGroups: async () => {
    const res = await axios.get(_routes.groups);
    return res.data;
  },

  getGroupById: async (groupId) => {
    const res = await axios.get(`${_routes.groups}/${groupId}`);
    return res.data;
  },
};

export default service;
