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
      currentMonth: moment(),
      setIn: 0,
    };
  }

  handleClick(num) {
    this.setState(({ currentMonth }) => ({
      currentMonth: currentMonth.add(num, 'month'),
    }));
  }

  handleChange(momentObj) {
    console.log(momentObj.format('DD MMMM YYYY'));
  }

  render() {
    return (
      <div className="calendar">
        <button onClick={() => this.handleClick(-1)}>&lt;</button>
        <button onClick={() => this.handleClick(1)}>&gt;</button>
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
