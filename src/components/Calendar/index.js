import React, { Component } from 'react';
import moment from 'moment';
moment.locale('sv');

import Month from './Month';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.handleMove = this.handleMove.bind(this);
    this.handleToday = this.handleToday.bind(this);
    this.state = {
      currentMonth: moment(),
    };
  }

  handleMove(num) {
    this.setState({
      currentMonth: this.state.currentMonth.add(num, 'month'),
    });
  }

  handleToday() {
    this.setState({
      currentMonth: moment(),
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleMove(1)}>Go ahead</button>
        <button onClick={() => this.handleToday()}>Today</button>
        <button onClick={() => this.handleMove(-1)}>Go back</button>
        <Month moment={moment(this.state.currentMonth).add(-1, 'month')} />
        <Month moment={moment(this.state.currentMonth)} />
        <Month moment={moment(this.state.currentMonth).add(1, 'month')} />
      </div>
    );
  }
}
