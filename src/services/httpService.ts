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
    switch (error?.response?.status) {
      case 400: {
        toast.error(error?.response?.data.message);
        break;
      }
      case 401: {
        toast.error("شما برای این عمل، احراز هویت نشده اید");
        break;
      }
      case 403: {
        toast.error("دسترسی غیرمجاز");
        break;
      }
      default: {
        break;
      }
    }
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
