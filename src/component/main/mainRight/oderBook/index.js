import { faMinus, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

class index extends Component {
  render() {
    return (
      <>
        <div className='comeinand1_title'>
          <div className='title_table tt1'>
            <span className='day_lenh' style={{ cursor: 'pointer' }}>
              Lệnh trong ngày
            </span>
            <span className='control_lenh' style={{ cursor: 'pointer' }}>
              Lệnh điều kiện
            </span>
          </div>
          <div className='icon_cn'>
            <FontAwesomeIcon
              icon={faSyncAlt}
              className='icon_ld'
              style={{ cursor: 'pointer' }}
            />
            <FontAwesomeIcon
              icon={faMinus}
              className='icon_ld'
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <div className='table_book1'>
          <div className='box_book'>
            <div className='comeinand1_table'>
              <span>lệnh</span>
              <span>Mã</span>
              <span>KL Khớp</span>
              <span>Giá</span>
              <span>TT</span>
            </div>
            <div className='comeinand1_text'>
              <span>Chưa có lệnh nào trong số lệnh</span>
            </div>
          </div>
          <div className='control' style={{ display: 'none' }}>
            <div className='control_menu'>
              <ul>
                <li>Lệnh</li>
                <li>Mã</li>
                <li>Giá kích hoạt</li>
                <li>KL</li>
                <li>Giá</li>
                <li>Ngày hết hạn</li>
                <li>TT</li>
              </ul>
            </div>
            <div className='control_list'>Chưa có lệnh nào trong sổ lệnh</div>
          </div>
        </div>
      </>
    );
  }
}

export default index;
