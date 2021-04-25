import React, { Component } from 'react';
import './style.scss';
import imgPlayer from './../../../assets/image/top-derivative.bb0daf79.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import cup from './../../../assets/image/cup.png';
import cup1 from './../../../assets/image/cup1.png';
import cup2 from './../../../assets/image/cup2.png';
function index({ handlerCloseTop }) {
  return (
    <div className='topPlayer'>
      <div className='cloneTop' onClick={handlerCloseTop}></div>
      <div className='player'>
        <div className='player__left'>
          <div className='player__left-top'>
            <img src={imgPlayer} alt='img' />
            <p>BẢNG XẾP HẠNG THÁNG</p>
          </div>
          <div className='player__left-derivative'>
            <span>CAO THỦ PHÁI SINH</span>
            <div className='nav'>
              <div className='icon-nav'>
                <FontAwesomeIcon className='icon' icon={faArrowUp} />
                <span>NAV</span>
              </div>
              <p>Đơn vị: VND</p>
            </div>
          </div>
          <div className='player__left-tab'>
            <img src={cup} alt='dá' />
            <span>utcung_huhong1992</span>
            <span>54,709,446</span>
          </div>
          <div className='player__left-tab'>
            <img
              src={cup1}
              alt='dá'
              style={{
                height: '33px',
                left: '-13px',
                bottom: '-2px',
              }}
            />
            <span>utcung_huhong1992</span>
            <span>54,709,446</span>
          </div>
          <div className='player__left-tab'>
            <img
              src={cup2}
              alt='dá'
              style={{
                height: '33px',
                left: '-13px',
                bottom: '-2px',
              }}
            />
            <span>utcung_huhong1992</span>
            <span>54,709,446</span>
          </div>
          <div className='player__left-list'>
            <ul>
              <li>
                <span>den123</span>
                <span>48,412,955</span>
              </li>
              <li>
                <span>den123</span>
                <span>48,412,955</span>
              </li>
              <li>
                <span>den123</span>
                <span>48,412,955</span>
              </li>
              <li>
                <span>den123</span>
                <span>48,412,955</span>
              </li>
              <li>
                <span>den123</span>
                <span>48,412,955</span>
              </li>
              <li>
                <span>den123</span>
                <span>48,412,955</span>
              </li>
              <li>
                <span>den123</span>
                <span>48,412,955</span>
              </li>
              <li>
                <span>den123</span>
                <span>48,412,955</span>
              </li>
              <li>
                <span>den123</span>
                <span>48,412,955</span>
              </li>
            </ul>
          </div>
          <button className='player__left-bt'>THAM GIA NGAY TẠI ĐÂY</button>
        </div>
        <div className='player__right'>
          <div className='player__right-top'>
            <p>BẢNG XẾP HẠNG TUẦN</p>
            <p>(Từ 8h00 thứ 2 đến 15H00 thứ 6 hàng tuần)</p>
          </div>
          <div className='player__right-list'>
            <div className='list-header'>
              <div className='list-header-top'>
                <span>CAO THỦ PHÁI SINH</span>
                <div className='nav'>
                  <div className='icon-nav'>
                    <FontAwesomeIcon className='icon' icon={faArrowUp} />
                    <span>NAV</span>
                  </div>
                  <p>Đơn vị: VND</p>
                </div>
              </div>
              <div className='list-header-ListTab'>
                <div className='list-header-tab'>
                  <span>maika2013</span>
                  <span>53,143,954</span>
                </div>
                <div className='list-header-tab'>
                  <span>maika2013</span>
                  <span>53,143,954</span>
                </div>
                <div className='list-header-tab'>
                  <span>maika2013</span>
                  <span>53,143,954</span>
                </div>
              </div>
            </div>
            <div className='player__right-fullTop'>
              <ul>
                <li>
                  <span>utcung_huhong1992</span>
                  <span>50,614,412</span>
                </li>
                <li>
                  <span>utcung_huhong1992</span>
                  <span>50,614,412</span>
                </li>
                <li>
                  <span>utcung_huhong1992</span>
                  <span>50,614,412</span>
                </li>
                <li>
                  <span>utcung_huhong1992</span>
                  <span>50,614,412</span>
                </li>
                <li>
                  <span>utcung_huhong1992</span>
                  <span>50,614,412</span>
                </li>
                <li>
                  <span>utcung_huhong1992</span>
                  <span>50,614,412</span>
                </li>
                <li>
                  <span>utcung_huhong1992</span>
                  <span>50,614,412</span>
                </li>
                <li>
                  <span>utcung_huhong1992</span>
                  <span>50,614,412</span>
                </li>
                <li>
                  <span>utcung_huhong1992</span>
                  <span>50,614,412</span>
                </li>
                <li>
                  <span>utcung_huhong1992</span>
                  <span>50,614,412</span>
                </li>
                <li>
                  <span>utcung_huhong1992</span>
                  <span>50,614,412</span>
                </li>
                <li>
                  <span>utcung_huhong1992</span>
                  <span>50,614,412</span>
                </li>
                <li>
                  <span>utcung_huhong1992</span>
                  <span>50,614,412</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faTimes}
          className='close'
          onClick={handlerCloseTop}
        />
      </div>
    </div>
  );
}

export default index;
