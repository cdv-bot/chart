import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';
import logo from './../../assets/image/logo.svg';
import { faTractor, faTrophy, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import TopPlayer from './topPlayer';
import Cookies from 'js-cookie';
import jwt_decode from "jwt-decode";
import Clock from './clock.js';
import Day from './day';
import productApi from '../../apis/productsApi';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(r => r.json())
function Menu() {
  const history = useHistory();
  const [closeTop, setCloseTop] = React.useState(false);
  const [user, setUser] = React.useState(null);
  let token = Cookies.get('accessToken');
  useEffect(() => {
    try {
      let decoded = jwt_decode(token);
      setUser(decoded.customerName);
    } catch (error) {
      history.goBack();
    }
  }, [token]);


  const handlerOpenTop = () => {
    setCloseTop(true);
  };

  const handlerCloseTop = () => {
    setCloseTop(false);
  };

  const handlerLogout = () => {
    Cookies.remove('accessToken');
    history.replace('/login');
  };

  const [listData, setListData] = React.useState([]);

  let decoded = jwt_decode(token);

  const link = `https://dertrial-api.vndirect.com.vn/demotrade/assets?username=${decoded.username}`;


  const { data, error } = useSWR(link, fetcher, { refreshInterval: 1000 });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <div className='Menu'>

      {closeTop ? <TopPlayer handlerCloseTop={handlerCloseTop} /> : ''}

      <div className='Menu-left'>
        <img className='logo' src={logo} />
        <ul className='timer'>
          <li id='nameTime'><Clock /></li>
          <li> <Day /></li>
          <li>
            <NavLink
              exact
              to='/trang-chu'
              activeStyle={{
                color: '#E2891D',
              }}>
              Trang ch???
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/tai-san'
              activeStyle={{
                color: '#E2891D',
              }}>
              T??i s???n
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/huong-dan-su-dung'
              activeStyle={{
                color: '#E2891D',
              }}>
              H?????ng d???n
            </NavLink>
          </li>
          <li> L??i/L???: {data.cashOnHand}</li>
        </ul>
        <div className='top_person' onClick={handlerOpenTop}>
          <FontAwesomeIcon icon={faTrophy} />
          <p>Top cao th??? ph??i sinh</p>
        </div>
      </div>
      <div className='App__menu-right'>
        <span className='traial'>B???N TRIAL</span>
        <div className='accout'>
          <a href='/#'>N??ng c???p t??i kho???n</a>
        </div>
        <div className='info_acc'>
          <FontAwesomeIcon icon={faUserAlt} />
          <span>{user}</span>
          <div className='logout' onClick={handlerLogout}>
            <span id='logout_home' style={{ cursor: 'pointer' }}>
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
