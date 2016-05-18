import './styles.scss';
import React, { Component } from 'react';
import classNames from 'classnames';
import inRange from '../../../lib/inRange';

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.selected = inRange(this.props.day, this.props.range);
    this.dayClass = classNames({
      'calendar-day': true,
      empty: !this.props.day,
    });
    this.labelClass = classNames({
      'calendar-day-label': true,
      selected: this.selected,
      'selected-first': this.selected === 'first',
      'selected-last': this.selected === 'last',
      today: this.props.day ? this.props.day.isSame(new Date(), 'day') : false,
    });
  }

  buildCheckbox() {
    if (!this.props.day) return null;
    return (
      <label className={this.labelClass}>
        <input
          className="calendar-day-check"
          type="checkbox"
          name={this.props.day.format('MMM')}
          value={this.props.day.format('YYYY-MM-DD')}
          checked={this.selected}
          onChange={() => this.props.handleChange(this.props.day)}
        />
        {this.props.day.date()}
      </label>
    );
  }

  render() {
    return (
      <li className={this.dayClass}>
        {this.buildCheckbox()}
      </li>
    );
  }
}

Day.propTypes = {
  day: React.PropTypes.object,
  range: React.PropTypes.arrayOf(React.PropTypes.object),
  handleChange: React.PropTypes.func,
};
