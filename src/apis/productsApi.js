// api/productApi.js
import Cookies from 'js-cookie';
import axiosClient from './axiosClient';
import axiosClient1 from './axiosClient1';
import axiosClient2 from './axiosClient2';
import jwt_decode from "jwt-decode";

class ProductApi {
  login = (params) => {
    const url = '/v2/auth';
    return axiosClient.post(url, params);
  };
  sendOrder = (quantity, priceType, side) => {
    const url = '/orders';
    try {
      let token = Cookies.get('accessToken');
      let decoded = jwt_decode(token);
      axiosClient1.post(url, {
        symbol: 'VN30F2105',
        userName: decoded.username,
        price: 0,
        quantity: quantity,
        priceType: priceType,
        side: side
      });
    } catch (e) {
      console.log("Ád")
    }


  };
  DeleteOrder = () => {
    const url = '/orders';
    return axiosClient1.delete(url, {
      userName: "vipsuper99",
      orderID: 1619579213481
    });
  };
  delete = (id) => {

    const url = '';
    return axiosClient2.delete(url, {
      'userName': "vipsuper99",
      'orderID': id
    });
  };
  getLo = (prams) => {
    const url = '/assets';
    return axiosClient2.get(url, { prams });
  };
}
const productApi = new ProductApi();
export default productApi;
