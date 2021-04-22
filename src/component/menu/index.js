import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.scss';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import TopPlayer from './topPlayer';
class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        <TopPlayer />
        <div className='Menu-left'>
          <svg
            className='logo'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 202.82 60.63'>
            <defs>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    '\n              .cls-1 {\n                fill: #808285;\n              }\n\n              .cls-2 {\n                fill: #f7941d;\n              }\n\n            ',
                }}
              />
            </defs>
            <title>PT trial</title>
            <g id='Layer_2' data-name='Layer 2'>
              <g id='Layer_1-2' data-name='Layer 1'>
                <path
                  className='cls-1'
                  d='M21.32,15.92a9,9,0,0,1-.7,3.74,6.63,6.63,0,0,1-2.09,2.63,7.46,7.46,0,0,1-2.81,1.25c-.6.11-1.24.2-1.94.26a25.07,25.07,0,0,1-2.63.11H5.67v8.16H0V7.89H10.94a25.55,25.55,0,0,1,4.31.29,14.35,14.35,0,0,1,1.55.37,5.69,5.69,0,0,1,1.13.57,7.19,7.19,0,0,1,2.52,2.82A8.73,8.73,0,0,1,21.32,15.92Zm-6.2,0a2.79,2.79,0,0,0-.89-2.32,6,6,0,0,0-3.35-.69H5.67v6h5.5a9.4,9.4,0,0,0,1.8-.16,2.84,2.84,0,0,0,1.23-.6A2.72,2.72,0,0,0,15.12,15.92Z'
                />
                <path
                  className='cls-1'
                  d='M45.74,32.07H39.32l-5-9.13H29.2v9.13H23.54V7.94H35.88q4.4,0,6.35,1.82t2.09,5.59A7.85,7.85,0,0,1,43.06,20a5.67,5.67,0,0,1-3.17,2.21ZM38.63,15.42a2.21,2.21,0,0,0-.76-1.92A6.27,6.27,0,0,0,34.72,13H29.2v5h5.52a5.87,5.87,0,0,0,3.12-.6A2.28,2.28,0,0,0,38.63,15.42Z'
                />
                <path
                  className='cls-1'
                  d='M70.34,20.05q0,6.36-3,9.5t-9,3.16q-6.19,0-9.1-3.15t-2.9-9.74q0-6.24,3-9.31t9-3q6.11,0,9.07,3.1T70.34,20.05Zm-6.14,0c0-2.67-.47-4.64-1.43-5.91a5.24,5.24,0,0,0-4.44-1.86,5.28,5.28,0,0,0-4.39,1.83,6.66,6.66,0,0,0-1.1,2.37,13.24,13.24,0,0,0-.37,3.37q0,4.17,1.43,6.06a5.14,5.14,0,0,0,4.43,1.9,5.25,5.25,0,0,0,4.41-1.9C63.72,24.67,64.2,22.72,64.2,20.05Z'
                />
                <path
                  className='cls-1'
                  d='M93,12.9H85.45V32.24H79.59l0-19.34h-7.5V8H93Z'
                />
                <path
                  className='cls-1'
                  d='M117.41,32.25H111l-5.09-9.19h-5.11v9.19h-5.7V7.94h12.44q4.42,0,6.39,1.84t2.1,5.63a7.87,7.87,0,0,1-1.27,4.64,5.67,5.67,0,0,1-3.19,2.23Zm-7.16-16.78a2.25,2.25,0,0,0-.76-1.93,6.35,6.35,0,0,0-3.18-.56h-5.56v5.07h5.56a6,6,0,0,0,3.15-.61A2.3,2.3,0,0,0,110.25,15.47Z'
                />
                <path
                  className='cls-1'
                  d='M145.52,32.25h-6.33l-2.11-5.58h-9.4l-2.05,5.58h-6.07L129.63,7.94h5.73ZM135.17,21.64l-2.87-7.4-2.74,7.4Z'
                />
                <path
                  className='cls-1'
                  d='M202.82,32.25h-9a16.83,16.83,0,0,1-4.51-.48,8.87,8.87,0,0,1-3.24-1.69,9.44,9.44,0,0,1-2.86-3.92,15,15,0,0,1-1-5.65q0-6.39,2.86-9.49T194,8h8.87v4.93h-8.77a5.3,5.3,0,0,0-3.75,1.17,5.06,5.06,0,0,0-1.48,3.43l14,0v4.9h-14a6.82,6.82,0,0,0,.32,2.16,3.35,3.35,0,0,0,.86,1.5,5.63,5.63,0,0,0,4.09,1.23h8.77Z'
                />
                <path
                  className='cls-2'
                  d='M147.52,7.61h11.56q6.1,0,9,3.19t2.9,9.89a16.44,16.44,0,0,1-1,5.93,9.49,9.49,0,0,1-2.92,4,9.2,9.2,0,0,1-3.19,1.72,17.77,17.77,0,0,1-4.67.5H147.52ZM159,12h-6.14V28.46H159c2.36,0,4-.58,4.87-1.76s1.34-3.34,1.34-6.46-.44-5.26-1.34-6.45S161.33,12,159,12Z'
                />
                <path
                  className='cls-1'
                  d='M147.52,40.56V35.28h14.22l.46,0h0a11.9,11.9,0,0,0,1.45-.21h0a15.09,15.09,0,0,0,4.46-1.59h0c3.13-1.85,6.22-4.93,6.29-12.64h0V19.76c-.05-6.78-2.47-9.93-5.11-11.9h0a14.67,14.67,0,0,0-7.09-2.54h0l-.46,0H147.52V0h14.25a19.84,19.84,0,0,1,8.93,2.5h0c4.51,2.43,9.07,7.91,9,17.26h0v1.06c.08,9.33-4.48,14.82-9,17.25h0a19.9,19.9,0,0,1-8.94,2.49H147.52Z'
                />
                <path
                  className='cls-2'
                  d='M20.5,50h-2v2h2a2,2,0,0,0,1.21-.26A1,1,0,0,0,22,51a.89.89,0,0,0-.27-.73A2,2,0,0,0,20.5,50Z'
                />
                <path
                  className='cls-2'
                  d='M0,44.53v16.1H202.82V44.53ZM10.45,50H7.88v6.54H6.15V50H3.61V48.63h6.84Zm11.72,6.54-1.75-3.1h-2v3.1H16.79V48.61H21.3l.31,0,.23,0H22l.27.07a1.68,1.68,0,0,1,1.08.85,2.86,2.86,0,0,1,.35,1.43,2.42,2.42,0,0,1-.39,1.39,2,2,0,0,1-1.21.79l2,3.32Zm10,0H30.41V48.61h1.74Zm13.08,0-.73-1.9H41l-.69,1.9H38.59l3.33-7.94h1.77l3.4,7.94Zm13.11,0H56a3,3,0,0,1-2.35-.79q-.72-.81-.72-7.15h1.65V53l0,.49,0,.56a1.09,1.09,0,0,0,.61,1,10,10,0,0,0,3.16.25Z'
                />
                <polygon
                  className='cls-2'
                  points='41.58 53.25 43.96 53.25 42.75 50.21 41.58 53.25'
                />
              </g>
            </g>
          </svg>
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
          <div className='top_person'>
            <i className='fas fa-trophy' />
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
            <div className='logout'>
              <span id='logout_home' style={{ cursor: 'pointer' }}>
                Logout
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
