import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: this.props.time };
    this._update = this._updateTime.bind(this);
    this._formatTime = this._formatTime.bind(this);
  }

  render() {
    const time = this._formatTime(this.state.time);

    return (
      <>
        {time.hours}:{time.minutes}:{time.seconds}
      </>
    );
  }

  componentDidMount() {
    this._interval = setInterval(this._update, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  _formatTime(time) {
    var [hours, minutes, seconds] = [
      time.getHours(),
      time.getMinutes(),
      time.getSeconds()
    ].map(num => (num < 10 ? "0" + num : num));
    return { hours, minutes, seconds };
  }

  _updateTime() {
    this.setState({
      time: new Date(this.state.time.getTime() + 1000)
    });
  }
}

Clock.defaultProps = {
  time: new Date()
};
