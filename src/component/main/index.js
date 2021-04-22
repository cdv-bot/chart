import React, { Component } from 'react';
import MainCenter from './mainCenter';
import MainLeft from './mainLeft';
import MainRight from './mainRight';

class Main extends Component {
  render() {
    return (
      <div className="App__content">
        <MainLeft />
        <MainCenter />
        <MainRight />
      </div>
    );
  }
}

export default Main;
