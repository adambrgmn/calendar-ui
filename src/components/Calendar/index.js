import './styles.scss';
import React, { Component } from 'react';
import { Map, List } from 'immutable';
import moment from 'moment';

import Month from './Month';
import Header from './Header';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    moment.locale(this.props.locale || 'sv');
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      data: Map({
        currentMonth: moment().startOf('month'),
        range: List(),
      }),
    };
  }

  handleChange(momentObj) {
    const range = this.state.data.get('range');
    const rangeSize = range.size;
    const rangeStart = range.get(0);
    const rangeEnd = range.get(1);

    if (rangeSize < 1) {
      return this.setState(({ data }) => ({
        data: data.update('range', () => List.of(momentObj, momentObj)),
      }));
    }

    if (momentObj.isBefore(rangeStart)) {
      return this.setState(({ data }) => ({
        data: data.update('range', (list) => list.set(0, momentObj)),
      }));
    }

    if (momentObj.isAfter(rangeEnd)) {
      return this.setState(({ data }) => ({
        data: data.update('range', (list) => list.set(1, momentObj)),
      }));
    }

    if (momentObj.isBetween(rangeStart, rangeEnd, null, [])) {
      return this.setState(({ data }) => ({
        data: data.update('range', (list) => list.set(1, momentObj)),
      }));
    }

    return null;
  }

  render() {
    const state = this.state.data;
    const range = state.get('range');
    const rangeStart = range.get(0);
    const rangeEnd = range.get(1);

    return (
      <div className="calendar">
        <Header moment={state.get('currentMonth')} />
        <Month
          moment={state.get('currentMonth')}
          range={state.get('range')}
          handleChange={this.handleChange}
        />
        <p>
          {rangeStart ? rangeStart.format('DD MMMM YYYY') : 'Undef'}
          -
          {rangeEnd ? rangeEnd.format('DD MMMM YYYY') : 'Undef'}
        </p>
      </div>
    );
  }
}

Calendar.propTypes = {
  locale: React.PropTypes.string,
};
