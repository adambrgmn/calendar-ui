import React, { Component } from 'react';
import moment from 'moment';
moment.locale('sv');

import Month from './Month';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: moment,
    };
  }

  render() {
    return (
      <div>
        <Month moment={this.state.currentMonth()} />
      </div>
    );
  }
}
