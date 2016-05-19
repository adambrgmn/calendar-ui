import './styles.scss';
import React, { Component } from 'react';
import classNames from 'classnames';
import inRange from '../../../lib/inRange';

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.selected = inRange(this.props.day, this.props.range);
    this.shouldComponentUpdate = () => true;

    const sharedClasses = {
      selected: this.selected,
      selectedFirst: this.selected === 'first' || this.selected === 'only',
      selectedLast: this.selected === 'last' || this.selected === 'only',
      today: this.props.day.isSame(new Date(), 'day'),
      outsideMonth: !this.props.monthInView.isSame(this.props.day, 'month'),
    };

    this.dayClass = classNames({
      calendarDay: true,
      ...sharedClasses,
    });
    this.labelClass = classNames({
      calendarDayLabel: true,
      ...sharedClasses,
    });
  }

  render() {
    return (
      <li className={this.dayClass}>
        <label className={this.labelClass}>
          <input
            className="calendarDayCheck"
            type="checkbox"
            name={this.props.day.format('MMM')}
            value={this.props.day.format('YYYY-MM-DD')}
            checked={this.selected}
            onChange={() => this.props.handleChange(this.props.day)}
          />
          {this.props.day.date()}
        </label>
      </li>
    );
  }
}

Day.propTypes = {
  day: React.PropTypes.object,
  range: React.PropTypes.array,
  monthInView: React.PropTypes.object.isRequired,
  handleChange: React.PropTypes.func,
};
