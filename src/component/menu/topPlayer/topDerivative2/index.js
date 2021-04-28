import React from 'react';

function TopDerivative2({ data }) {
  let arrData = [...data];
  arrData.sort((x, y) => {
    return y.totalPnlAmount - x.totalPnlAmount;
  });
  // let list = data.slice(0, 20);

  function hasCodeMonny(data) {
    return data.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }
  return (
    <>
      <div className='list-header-ListTab'>
        <div className='list-header-tab'>
          <span>{arrData[0].username}</span>
          <span>{hasCodeMonny(arrData[0].totalPnlAmount)}</span>
        </div>
        <div className='list-header-tab'>
          <span>{arrData[1].username}</span>
          <span>{hasCodeMonny(arrData[1].totalPnlAmount)}</span>
        </div>
        <div className='list-header-tab'>
          <span>{arrData[2].username}</span>
          <span>{hasCodeMonny(arrData[2].totalPnlAmount)}</span>
        </div>
      </div>
    </>
  );
}

export default TopDerivative2;
