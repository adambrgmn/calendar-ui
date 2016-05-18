import './styles.scss';
import React, { Component } from 'react';
import moment from 'moment';

import CalendarHead from '../CalendarHead';
import Week from '../Week';

function splitArray(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % size === 0) {
      newArr.push(arr.slice(i, i + size));
    }
  }

  return newArr;
}

export default class Month extends Component {
  generateWeeks() {
    const now = this.props.moment;
    const paddedDays = [];
    let padding = moment(now).date(1).weekday();

    for (let i = 0; i < moment(now).endOf('month').date(); i++) {
      paddedDays.push(moment(now).date(i + 1));
    }
    while (padding--) { paddedDays.unshift(null); }
    const weeks = splitArray(paddedDays, 7);

    return weeks.map((days) => (
      <Week key={days[days.length - 1].date()} days={days} range={this.props.range} />
    ));
  }

  render() {
    return (
      <table className="calendar">
        <CalendarHead moment={this.props.moment} />
        <tbody className="calendar-body">
          {this.generateWeeks()}
        </tbody>
      </table>
    );
  }
}

Month.propTypes = {
  moment: React.PropTypes.object.isRequired,
  range: React.PropTypes.arrayOf(React.PropTypes.object),
};
