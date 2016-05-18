import './styles.scss';
import React, { Component } from 'react';
import moment from 'moment';

import Month from './Month';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    moment.locale(this.props.locale || 'sv');
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      currentMonth: moment(),
    };
  }

  handleChange(obj) {
    console.log(obj);
  }

  render() {
    return (
      <div className="calendar">
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
