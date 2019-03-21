import React from 'react';

const parseTime = function (strTime) {
  if(!strTime) return 0;
  // let tt = strTime.split(/\D+/g);
  // let t = new Date(tt[0], tt[1] - 1, tt[2], tt[3] || 0, tt[4] || 0, tt[5] || 0);
  // return t.getTime();
  return strTime;
}
class CountDown extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      diff: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0
    }
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    const now = +new Date();
    const end = now + 1000000;
    const { serverTime = now, startTime = now, endTime = end } = this.props;
    let _serverTime = parseTime(serverTime);
    let _startTime = parseTime(startTime);
    let _endTime = parseTime(endTime);
    if (_endTime < _serverTime || _startTime > _serverTime) {
      return;
    }
    let _diff = Math.round((_endTime - _serverTime) / 1000);
    this.setState({ diff: _diff });
    setInterval(() => {
      this.countdown();
      console.log(1111);
      this.setState({ diff: _diff-- });
    }, 1000);
  }

  countdown() {
    let _diff = this.state.diff;
    let _result = {
      diff: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0
    }
    if (_diff > 0) {
      _result.day = Math.floor(_diff / 86400);
      _diff = _diff % 86400;
      _result.hour = Math.floor(_diff / 3600);
      _diff = _diff % 3600;
      _result.minute = Math.floor(_diff / 60);
      _diff = _diff % 60;
      _result.second = _diff;
    }
    _result.diff = _diff;
    this.setState(_result);
  }


  render() {
    const { day, hour, minute, second } = this.state;
    const { fontColor, backgroundColor, timeColor } = this.props;
    const _root_style = {
      width: '100%',
      display: 'flex',
      'alignItems': 'center',
      background: backgroundColor,
      'justifyContent': 'center',
      color: fontColor,
    }
    const _time_style = {
      color: timeColor,
      margin: '5px',
      'fontWeight': 'bold',
    }
    return (<div style={_root_style}>
      距活动结束仅剩<i style={_time_style}>{day}</i>天<i style={_time_style}>{hour}</i>时<i style={_time_style}>{minute}</i>分<i style={_time_style}>{second}</i>秒
            </div>);
  }
}

export default CountDown
