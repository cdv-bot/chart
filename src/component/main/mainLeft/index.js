/** @format */

import { faChartBar, faChartPie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import IframeThree from './iframeThree';
import IframeFour from './iframeFour';
class MainLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idFrame: 4,
    };
  }
  handleIframe = (id) => {
    this.setState({
      idFrame: id,
    });
  };
  render() {
    return (
      <>
        <div className='App__content-box1'>
          <div className='chart_one'>
            <TradingViewWidget
              symbol='NASDAQ:AAPL'
              theme={Themes.DARK}
              locale='fr'
              autosize
            />
          </div>
          <div className='chart_two'>
            <div className='charts mkw'>
              {this.state.idFrame === 4 ? (
                <IframeFour />
              ) : this.state.idFrame === 3 ? (
                <IframeThree />
              ) : (
                ''
              )}
            </div>
            <div className='func'>
              <span className='bq'>
                Bản quyền được copy từ VNDIRECT © 2021. v2.2.2
              </span>
              <div className='func_full'>
                <span
                  className='mg_sp icon_1'
                  onClick={() => this.handleIframe(1)}
                  style={{ color: `${this.state.idFrame === 1 ? '#f7941d' : ''}` }}>
                  VN30 INTRADAY
                </span>
                <span
                  className='mg_sp icon_2'
                  onClick={() => this.handleIframe(2)}
                  style={{ color: `${this.state.idFrame === 2 ? '#f7941d' : ''}` }}>
                  VN30
                </span>
                <FontAwesomeIcon
                  className=' mg_sp icon_3'
                  icon={faChartBar}
                  onClick={() => this.handleIframe(3)}
                  style={{ color: `${this.state.idFrame === 3 ? '#f7941d' : ''}` }}
                />
                <FontAwesomeIcon
                  icon={faChartPie}
                  className=' mg_sp icon_4'
                  onClick={() => this.handleIframe(4)}
                  style={{ color: `${this.state.idFrame === 4 ? '#f7941d' : ''}` }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainLeft;
