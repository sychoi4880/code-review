import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
moment.locale('ko');

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment(),
      expireDate: moment('2018-07-04T17:00:00+09:00'),
    };

    this.nTimer = setInterval(this.tick, 1000);
  }

  tick = () => {
    if (moment.duration(moment().diff(this.state.expireDate)).asSeconds() > 0) {
      alert('종료되었습니다.');
    }
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <div>현재시간은 {moment().format('A h:mm')} </div>
        <div>{this.state.expireDate.fromNow()}에 강의 종료합니다.</div>
      </div>
    );
  }
}

export default Timer;
