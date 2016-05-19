import './styles.scss';
import React, { Component } from 'react';
import classNames from 'classnames';

import Day from '../Day';

export default class Week extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = () => true;
  }
  render() {
    const weekClass = classNames({
      calendarWeek: true,
    });

    return (
      <ul className={weekClass}>
        {this.props.days.map((day) => (
          <Day
            key={`${day.year()}${day.month()}${day.date()}`}
            day={day}
            range={this.props.range}
            monthInView={this.props.monthInView}
            handleChange={this.props.handleChange}
          />
        ))}
      </ul>
    );
  }
}

Week.propTypes = {
  days: React.PropTypes.arrayOf(React.PropTypes.object),
  range: React.PropTypes.array,
  monthInView: React.PropTypes.object.isRequired,
  handleChange: React.PropTypes.func,
};
