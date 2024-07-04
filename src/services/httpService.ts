import axios from "axios";
import toast from "react-hot-toast";

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
    toast.error(error.response.data);
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
