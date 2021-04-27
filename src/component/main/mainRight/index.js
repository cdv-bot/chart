import React, { Component } from "react";
import OderBook from "./oderBook";
import Category from "./category";
import RealEstate from "./realEstate";
import IndnormalOrder from "./normalOrder";
// import SelectList from "../selectList";
class MainRight extends Component {
  constructor() {
    super();
    this.state = {
      idOpenList: null,
    };
  }
  componentDidUpdate(props) {
    if (props.handlerIdSelect !== this.props.handlerIdSelect) {
      this.setState({
        idOpenList: this.props.handlerIdSelect,
      });
    }
  }
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
            <IndnormalOrder />
          </div>
        </div>

      </>
    );
  }
}

export default MainRight;
