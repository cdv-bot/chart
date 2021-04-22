import React, { Component } from "react";
import classnames from "classnames";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idList: 1,
    };
  }
  handleList = (data) => {
    this.props.handleListTask(data);
    this.setState({
      idList: data,
    });
  };
  render() {
    return (
      <>
        <span
          className={classnames("sp_1", { dl: this.state.idList === 1 })}
          onClick={() => this.handleList(1)}
        >
          Sổ lệnh
        </span>
        <span
          className={classnames("sp_2", { dl: this.state.idList === 2 })}
          onClick={() => this.handleList(2)}
        >
          Danh mục
        </span>
        <span
          className={classnames("sp_3", { dl: this.state.idList === 3 })}
          onClick={() => this.handleList(3)}
        >
          Tài sản
        </span>
      </>
    );
  }
}

export default index;
