import React from 'react';
import './style.scss';
import {
  faCheckCircle,
  faHourglassStart,
  faMinusCircle,
  faTimesCircle,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import productApi from '../../../../../apis/productsApi';
import axios from 'axios';
function OrderInDay({ hasData }) {
  const [showDel, setShowDel] = React.useState({
    check: false,
    id: '',
  });
  const handlerDeleteItem = (id) => {
    setShowDel({
      check: true,
      id: id,
    });
  };
  const handlerNoDelete = () => {
    setShowDel({
      check: false,
      id: ''
    });
  };

  const handlerYes = async () => {

    productApi.delete(showDel.id);
    setShowDel(false)

  }

  return (
    <>
      <div className='box_book'>
        <div className='comeinand1_table'>
          <span>lệnh</span>
          <span>Mã</span>
          <span>KL Khớp</span>
          <span>Giá</span>
          <span>TT</span>
        </div>
        <div className='comeinand1_text'>
          {hasData.map((value, index) => {
            return (
              <div key={index} className='comeinand1_text-list'>
                <div className='comeinand'>
                  <div>
                    {value.status === 'PendingNew' || value.status === 'New' ? (
                      <input type='checkbox' />
                    ) : null}
                  </div>
                  <span style={value.side === 'NB' ? { color: '#0FF200' } : null}>
                    {value.side === 'NS' ? 'Bán' : 'Mua'}
                  </span>
                </div>
                <span className='code'>{value.symbol}</span>
                <span className='joint'>
                  {`${value.matchedQuantity}/${value.quantity}`}
                </span>
                <span className='joint'>{value.orderType}</span>
                <div className='sort'>
                  {
                    showDel.id === value.orderID ? null : value.status ===
                      'Filled' ? (
                      <FontAwesomeIcon icon={faCheckCircle} className='minus' />
                    ) : value.status === 'New' || value.status === 'PendingNew' ? (
                      <FontAwesomeIcon
                        className='Hourglass'
                        icon={faHourglassStart}
                      />
                    ) : value.status === 'Rejected' ? (
                      <FontAwesomeIcon className='minus' icon={faMinusCircle} />
                    ) : value.cancelable ? (
                      <FontAwesomeIcon
                        className='minus'
                        icon={faTrashAlt}
                      />
                    ) : null
                  }
                  {showDel.check && showDel.id === value.orderID ? (
                    <div className='hasDelete'>
                      <button onClick={handlerYes}>Hủy</button>
                      <button onClick={handlerNoDelete}>Không</button>
                    </div>
                  ) : value.cancelable ? (
                    <FontAwesomeIcon
                      className='time'
                      icon={faTimesCircle}
                      onClick={() => handlerDeleteItem(value.orderID)}
                    />
                  ) : null}

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OrderInDay;
