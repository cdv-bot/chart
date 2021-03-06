import axios from 'axios';
import queryString from 'query-string';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_ORDERS,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response) {
      return response;
    }
    return response;
  },
  (error) => {
    if (error.response.data) {
      toast.error("Đã không thành công 😒")
    }
    return error.response.data;
  }
);
export default axiosClient;
