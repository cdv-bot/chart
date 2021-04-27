import React from 'react';
import { faHourglassStart, faMinusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function OrderInDay({ hasData }) {

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
          {
            hasData.map((value, index) => {
              return (
                <div key={index} className='comeinand1_text-list'>
                  <div className="comeinand">
                    <div>
                      {
                        value.status === 'PendingNew' || value.status === 'New' ? <input type="checkbox" /> : null
                      }
                    </div>
                    <span style={value.side === 'NB' ? { color: '#0FF200' } : null}>{
                      value.side === 'NS' ? 'Bán' : 'Mua'
                    }</span>
                  </div>
                  <span className="code">{value.symbol}</span>
                  <span className="joint">
                    {`${value.matchedQuantity}/${value.quantity}`}
                  </span>
                  <span className='joint'>
                    {value.orderType}
                  </span>
                  <div className='sort'>
                    <div>
                      {
                        value.status === 'Rejected' ? <FontAwesomeIcon className="minus" icon={faMinusCircle} /> : <FontAwesomeIcon className="Hourglass" icon={faHourglassStart} />
                      }

                    </div>
                    {
                      value.status === 'PendingNew' || value.status === 'New' ? <FontAwesomeIcon className="time" icon={faTimesCircle} /> : null
                    }

                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default OrderInDay;