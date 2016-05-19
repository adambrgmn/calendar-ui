import './styles.scss';
import React, { Component } from 'react';
import moment from 'moment';
import splitArray from '../../../lib/splitArray';

import MonthHead from '../MonthHead';
import Week from '../Week';

export default class Month extends Component {
  generateWeeks() {
    const now = this.props.moment;
    const monthLength = moment(now).endOf('month').date();
    const paddedDays = [];
    const paddingLeft = moment(now).date(1).weekday();
    const paddingRight = 7 - (moment(now).endOf('month').weekday() + 1);

    for (let i = -paddingLeft; i < monthLength + paddingRight; i++) {
      paddedDays.push(moment(now).date(i + 1));
    }
    const weeks = splitArray(paddedDays, 7);
    return weeks.map((days) => (
      <Week
        key={days[0].week()}
        days={days}
        range={this.props.range}
        monthInView={this.props.moment}
        handleChange={this.props.handleChange}
      />
    ));
  }

  render() {
    return (
      <div className="calendarMonth">
        <div className="calendarMonthHeader">
          <MonthHead moment={this.props.moment} />
        </div>
        <div className="calendarWeeks">
          {this.generateWeeks()}
        </div>
      </div>
    );
  }
}

Month.propTypes = {
  moment: React.PropTypes.object.isRequired,
  range: React.PropTypes.array,
  handleChange: React.PropTypes.func,
};
