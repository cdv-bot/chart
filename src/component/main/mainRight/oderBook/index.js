import { faHourglassStart, faMinusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import './style.scss';
import Control from '../control';
import OrderInDay from './orderInDay';
import ConditionaOrder from './conditionalOrder';
import jwt_decode from "jwt-decode";
import useSWR from 'swr';
import Cookies from 'js-cookie';
import Loading from './../../../../assets/image/Spinner-1s-31px.gif';

const fetcher = url => fetch(url).then(r => r.json())

function OderBook() {
  const [listData, setListData] = React.useState([]);
  let token = Cookies.get('accessToken');
  let decoded = jwt_decode(token);
  const link = `https://dertrial-api.vndirect.com.vn/demotrade/orders?username=${decoded.username}`;


  const { data, error } = useSWR(link, fetcher, { refreshInterval: 1000 });

  if (error) return <div>failed to load</div>;
  if (!data) return <div className="loadingImg">
    <img src={Loading} />
  </div>;
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
        <Control hider={true} />
      </div>
      <div className='table_book1'>
        <OrderInDay userName={decoded.userName} hasData={data} />
        <ConditionaOrder />
      </div>
    </>
  );
}

export default OderBook;
