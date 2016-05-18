import './styles.scss';
import React, { Component } from 'react';
import moment from 'moment';

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
  constructor(props) {
    super(props);
    this.now = this.props.moment;
    const paddedDays = [];
    let padding = moment(this.now).date(1).weekday();

    // Create an array of dates depending om month length
    // then pad it to the left with null until first day of month
    // then split into weeks
    for (let i = 0; i < moment(this.now).endOf('month').date(); i++) {
      paddedDays.push(moment(this.now).date(i + 1));
    }
    while (padding--) { paddedDays.unshift(null); }

    this.weeks = splitArray(paddedDays, 7);
  }

  render() {
    return (
      <table style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {this.weeks.map((days) => <Week key={days[days.length - 1].date()} days={days} range={this.props.range} />)}
        </tbody>
      </table>
    );
  }
}

Month.propTypes = {
  moment: React.PropTypes.object.isRequired,
  range: React.PropTypes.arrayOf(React.PropTypes.object),
};
