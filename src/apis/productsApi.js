// api/productApi.js
import axiosClient from './axiosClient';

class ProductApi {
  setAdd = (params) => {
    const url = '/todolist';
    return axiosClient.post(url, params);
  };
  getList = () => {
    const url = '/todolist';
    return axiosClient.get(url, {
      params: {
        _sort: 'time',
        _order: 'desc',
        _page: 1,
        _limit: 7
      }
    });
  };

}
const productApi = new ProductApi();
export default productApi;