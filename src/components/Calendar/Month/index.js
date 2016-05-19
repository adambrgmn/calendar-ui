import './styles.scss';
import React, { Component } from 'react';
import moment from 'moment';
import splitArray from '../../../lib/splitArray';

import Week from '../Week';

export default class Month extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = (nextProps) => this.props.moment !== nextProps.moment;
  }

  generateWeeks() {
    const monthLength = moment(this.props.moment).endOf('month').date();
    const paddedDays = [];
    const paddingLeft = moment(this.props.moment).date(1).weekday();
    const paddingRight = 7 - (moment(this.props.moment).endOf('month').weekday() + 1);

    for (let i = -paddingLeft; i < monthLength + paddingRight; i++) {
      paddedDays.push(moment(this.props.moment).date(i + 1));
    }
    const weeks = splitArray(paddedDays, 7);

    return weeks.map((days) => (
      <Week
        key={`${this.props.moment.month()}-${days[0].week()}`}
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
