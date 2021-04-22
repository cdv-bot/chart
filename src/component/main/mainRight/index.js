import React, { Component } from "react";
import OderBook from "./oderBook";
import Category from "./category";
import RealEstate from "./realEstate";
import SelectList from "./selectList";
class MainRight extends Component {
  constructor() {
    super();
    this.state = {
      idOpenList: null,
    };
  }
  handleListTask = (id) => {
    this.setState({
      idOpenList: id,
    });
  };
  render() {
    const { idOpenList } = this.state;
    return (
      <>
        <div className="App__content-box3">
          <div className="box3_top">
            <div className="comeinand1">
              {idOpenList === 1 ? (
                <OderBook />
              ) : idOpenList === 2 ? (
                <Category />
              ) : idOpenList === 3 ? (
                <RealEstate />
              ) : (
                <OderBook />
              )}
            </div>
          </div>
          <div className="box3_bottom">
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
                  <select className="selects">
                    <option value={0}>VN30F2104</option>
                    <option value={1}>Audi</option>
                    <option value={2}>BMW</option>
                    <option value={3}>Citroen</option>
                  </select>
                </div>
                <div className="item_input">
                  <label htmlFor="giadat">Giá đặt:</label>
                  <input
                    type="text"
                    name="giadat"
                    id="giadat"
                    placeholder="Giá"
                  />
                </div>
                <div className="item_input">
                  <label htmlFor="khoiluong">Khối lượng:</label>
                  <input
                    type="text"
                    name="khoiluong"
                    id="khoiluong"
                    placeholder="KL"
                  />
                </div>
              </div>
              <div className="bt">
                <button>MUA</button>
                <button>BÁN</button>
                <label htmlFor="Luu">
                  <input type="checkbox" name="check" id="Luu" />
                  Lưu lệnh
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="select">
          <SelectList handleListTask={this.handleListTask} />
        </div>
      </>
    );
  }
}

export default MainRight;
