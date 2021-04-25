import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';
import logo from './../../assets/image/logo.svg';
import { faTractor, faTrophy, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import TopPlayer from './topPlayer';
import Cookies from 'js-cookie';

function Menu() {
  const history = useHistory();
  const [closeTop, setCloseTop] = React.useState(false);

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
  return (
    <div className='Menu'>
      {closeTop ? <TopPlayer handlerCloseTop={handlerCloseTop} /> : ''}

      <div className='Menu-left'>
        <img className='logo' src={logo} />
        <ul className='timer'>
          <li id='nameTime'>15:19:29</li>
          <li>2021/03/26</li>
          <li>
            <NavLink
              exact
              to='/trang-chu'
              activeStyle={{
                color: '#E2891D',
              }}>
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/tai-san'
              activeStyle={{
                color: '#E2891D',
              }}>
              Tài sản
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/huong-dan-su-dung'
              activeStyle={{
                color: '#E2891D',
              }}>
              Hướng dẫn
            </NavLink>
          </li>
          <li> Lãi/Lỗ: 0</li>
        </ul>
        <div className='top_person' onClick={handlerOpenTop}>
          <FontAwesomeIcon icon={faTrophy} />
          <p>Top cao thủ phái sinh</p>
        </div>
      </div>
      <div className='App__menu-right'>
        <span className='traial'>BẢN TRIAL</span>
        <div className='accout'>
          <a href='/#'>Nâng cấp tài khoản</a>
        </div>
        <div className='info_acc'>
          <FontAwesomeIcon icon={faUserAlt} />
          <span>Đỗ An</span>
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
