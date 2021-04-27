import React from 'react';
import productApi from '../../../../apis/productsApi';

function IndnormalOrder(props) {
  const [onValue, setOnValue] = React.useState({
    priceType: "",
    quantity: ""
  })
  const handlerChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === 'quantity') {
      if (!/\D/.test(value)) {
        setOnValue({
          ...onValue,
          [name]: value
        })
      }
    }
    if (name === 'priceType') {
      let key = value.toUpperCase()

      setOnValue({
        ...onValue,
        [name]: key
      })
    }


  }

  const handlerOrder = (key) => {
    const { priceType, quantity } = onValue;
    productApi.sendOrder(quantity, priceType, key);
  }
  return (
    <div className="box3_input">
      <div className="radio">
        <label htmlFor="lenhthuong">
          <input
            id="lenhthuong"
            type="radio"
            name="one"
            defaultChecked
          />
                  Lệnh thường
                </label>
        <label htmlFor="lenhstop">
          <input id="lenhstop" type="radio" name="one" />
                  Lệnh Stop
                </label>
        <label htmlFor="lenhtrailling">
          <input id="lenhtrailling" type="radio" name="one" />
                  Lệnh tralling
                </label>
        <label htmlFor="lenhOSO">
          <input id="lenhOSO" type="radio" name="one" />
                  Lệnh OSO
                </label>
      </div>
      <div className="input">
        <div className="item_input">
          <label htmlFor="mahdtl">Mã HĐTL:</label>
          <select className="selects" >
            <option value={0}>VN30F2105</option>
          </select>
        </div>
        <div className="item_input">
          <label htmlFor="giadat">Giá đặt:</label>
          <input
            type="text"
            id="giadat"
            value={onValue.priceType}
            name='priceType'
            placeholder="Giá"
            onChange={handlerChange}
          />
        </div>
        <div className="item_input">
          <label htmlFor="khoiluong">Khối lượng:</label>
          <input
            type="text"
            value={onValue.quantity}
            id="khoiluong"
            name="quantity"
            placeholder="KL"
            onChange={handlerChange}
          />
        </div>
      </div>
      <div className="bt">
        <button onClick={() => handlerOrder('NB')}>MUA</button>
        <button onClick={() => handlerOrder('NS')}>BÁN</button>
        <label htmlFor="Luu">
          <input type="checkbox" name="check" id="Luu" />
                  Lưu lệnh
                </label>
      </div>
    </div>
  );
}

export default IndnormalOrder;