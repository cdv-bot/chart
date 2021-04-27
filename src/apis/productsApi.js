// api/productApi.js
import Cookies from 'js-cookie';
import axiosClient from './axiosClient';
import axiosClient1 from './axiosClient1';
import jwt_decode from "jwt-decode";

let token = Cookies.get('accessToken');
let decoded = jwt_decode(token);
class ProductApi {
  login = (params) => {
    const url = '/v2/auth';
    return axiosClient.post(url, params);
  };
  sendOrder = (quantity, priceType, side) => {
    const url = '/orders';
    return axiosClient1.post(url, {

      symbol: 'VN30F2105',
      userName: decoded.username,
      price: 0,
      quantity: quantity,
      priceType: priceType,
      side: side
    });
  };
}
const productApi = new ProductApi();
export default productApi;
