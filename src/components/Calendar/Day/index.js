import './styles.scss';
import React, { Component } from 'react';
import classNames from 'classnames';
import inRange from '../../../lib/inRange';

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.selected = inRange(this.props.day, this.props.range);
    this.dayClass = classNames({
      'selected-first': this.selected === 'first',
      'selected-last': this.selected === 'last',
      'calendar-day': true,
      empty: !this.props.day,
      today: this.props.day ? this.props.day.isSame(new Date(), 'day') : false,
      selected: this.selected,
    });
  }

  buildCheckbox() {
    if (!this.props.day) return null;
    return (
      <label className="calendar-day-label">
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
      <td className={this.dayClass}>
        {this.buildCheckbox()}
      </td>
    );
  }
}

Day.propTypes = {
  day: React.PropTypes.object,
  range: React.PropTypes.arrayOf(React.PropTypes.object),
  handleChange: React.PropTypes.func,
};
