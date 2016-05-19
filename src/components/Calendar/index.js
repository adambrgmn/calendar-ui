import './styles.scss';
import React, { Component } from 'react';
import moment from 'moment';

import Month from './Month';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    moment.locale(this.props.locale || 'sv');
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      currentMonth: moment().startOf('month'),
      setIn: 0,
    };
  }

  handleClick(string) {
    switch (string) {
      case 'today':
        return this.setState(() => ({
          currentMonth: moment().startOf('month'),
        }));
      case 'prev':
        return this.setState(({ currentMonth }) => ({
          currentMonth: moment(currentMonth).startOf('month').add(1, 'M'),
        }));
      case 'next':
        return this.setState(({ currentMonth }) => ({
          currentMonth: moment(currentMonth).startOf('month').subtract(1, 'M'),
        }));
      default:
        return this.setState(({ currentMonth }) => ({
          currentMonth,
        }));
    }
  }

  handleChange(momentObj) {
    return momentObj;
  }

  render() {
    return (
      <div className="calendar">
        <button onClick={() => this.handleClick('prev')}>&lt;</button>
        <button onClick={() => this.handleClick('today')}>Today</button>
        <button onClick={() => this.handleClick('next')}>&gt;</button>
        <Month
          moment={this.state.currentMonth}
          range={this.state.range}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

Calendar.propTypes = {
  locale: React.PropTypes.string,
};
