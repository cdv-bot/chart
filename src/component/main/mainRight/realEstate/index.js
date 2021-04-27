import {
  faExternalLinkAlt,
  faMinus,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import Control from "../control";

class index extends Component {
  render() {
    return (
      <>
        <div className="comeinand1_title">
          <div className="title_table tt2">
            <span className="day_lenh open_tab" style={{ cursor: "pointer" }}>
              Vị thế mở
            </span>
            <span
              className="control_lenh close_tab"
              style={{ cursor: "pointer" }}
            >
              Vị thế đóng
            </span>
          </div>
          <div
            className="tt3"
            style={{ width: "100%", paddingLeft: "10px", display: "none" }}
          >
            <span
              style={{
                fontSize: "1.4rem",
                color: "#F78939",
                textAlign: "left",
              }}
            >
              Thông tin tài sản
            </span>
          </div>
          <div className="icon_cn">
            <Control hider={false} />
          </div>
        </div>

        <div className="table_book3">
          <div className="money">
            <span>Tài sản ròng</span>
            <span>45,0000,333</span>
          </div>
          <div className="money">
            <span>Số dư ký quỹ</span>
            <span>45,0000</span>
          </div>
          <div className="money">
            <span>Thuế và phí</span>
            <span>0</span>
          </div>
        </div>
      </>
    );
  }
}

export default index;
