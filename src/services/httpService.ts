import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";
    config.headers.Accept = "application/json";
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const methods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export default methods;
