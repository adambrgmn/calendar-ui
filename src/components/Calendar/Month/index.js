import './styles.scss';
import React, { Component } from 'react';
import moment from 'moment';
import splitArray from '../../../lib/splitArray';

import CalendarHead from '../CalendarHead';
import Week from '../Week';

export default class Month extends Component {
  generateWeeks() {
    const now = this.props.moment;
    const monthLength = moment(now).endOf('month').date();
    const paddedDays = [];
    let padding = moment(now).date(1).weekday();

    for (let i = 0; i < monthLength; i++) {
      paddedDays.push(moment(now).date(i + 1));
    }
    while (padding--) { paddedDays.unshift(null); }
    const weeks = splitArray(paddedDays, 7);

    return weeks.map((days) => (
      <Week
        key={days[days.length - 1].date()}
        days={days}
        range={this.props.range}
        handleChange={this.props.handleChange}
      />
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
  handleChange: React.PropTypes.func,
};
