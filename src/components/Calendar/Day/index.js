import './styles.scss';
import React, { Component } from 'react';
import classNames from 'classnames';
import inRange from '../../../lib/inRange';

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.props.handleChange(this.props.day);
  }

  render() {
    this.selected = inRange(this.props.day, this.props.range);
    const sharedClasses = {
      selected: this.selected,
      selectedFirst: this.selected === 'first' || this.selected === 'only',
      selectedLast: this.selected === 'last' || this.selected === 'only',
      today: this.props.day.isSame(new Date(), 'day'),
      outsideMonth: !this.props.monthInView.isSame(this.props.day, 'month'),
    };

    const dayClass = classNames({
      calendarDay: true,
      ...sharedClasses,
    });
    const labelClass = classNames({
      calendarDayLabel: true,
      ...sharedClasses,
    });

    return (
      <li className={dayClass}>
        <label className={labelClass}>
          <input
            className="calendarDayCheck"
            type="checkbox"
            name={this.props.day.format('MMM')}
            value={this.props.day.format('YYYY-MM-DD')}
            checked={this.selected}
            onChange={this.handleChange}
          />
          {this.props.day.date()}
        </label>
      </li>
    );
  }
}

Day.propTypes = {
  day: React.PropTypes.object,
  range: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
  monthInView: React.PropTypes.object.isRequired,
  handleChange: React.PropTypes.func,
};
