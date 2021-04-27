import React from 'react';

function ListTopPlay2({ data }) {
  let arrData = [...data];
  arrData.sort((x, y) => {
    return y.netAssetValue - x.netAssetValue;
  })
  console.log(arrData)
  let list = data.slice(3, 20);
  function hasCodeMonny(data) {
    return data.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND'
    });
  }

  return (
    <>
      {
        list.map((value, index) => {
          return (
            <li>
              <span>{value.username}</span>
              <span>{hasCodeMonny(value.netAssetValue)}</span>
            </li>
          )
        })
      }
    </>
  );
}

export default ListTopPlay2;