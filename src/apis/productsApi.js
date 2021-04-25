// api/productApi.js
import axiosClient from './axiosClient';

class ProductApi {
  login = (params) => {
    const url = '/v2/auth';
    return axiosClient.post(url, params);
  };
}
const productApi = new ProductApi();
export default productApi;
