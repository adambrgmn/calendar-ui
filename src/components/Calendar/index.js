import './styles.scss';
import React, { Component } from 'react';
import { Map } from 'immutable';
import moment from 'moment';

import Month from './Month';
import Header from './Header';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.chooseDay = this.chooseDay.bind(this);
    this.changeMonth = this.changeMonth.bind(this);

    moment.locale(this.props.locale || 'sv');

    this.state = {
      data: Map({
        currentMonth: moment().startOf('month'),
      }),
    };
  }

  chooseDay(momentObj) {
    const returnAs = this.props.returnAs;
    let returnObj;

    switch (returnAs) {
      case 'date':
        returnObj = new Date(momentObj.format());
        break;
      case 'milliseconds':
        returnObj = momentObj.valueOf();
        break;
      case 'seconds':
        returnObj = momentObj.unix();
        break;
      case 'moment':
      case '':
      case undefined:
        returnObj = momentObj;
        break;
      default:
        returnObj = momentObj.format(returnAs);
    }

    return this.props.handleChange(returnObj);
  }

  changeMonth(num) {
    if (num === 'today') {
      return this.setState(({ data }) => ({
        data: data.update('currentMonth', () => moment()),
      }));
    }

    return this.setState(({ data }) => ({
      data: data.update('currentMonth', (mom) => moment(mom).add(num, 'M').startOf('month')),
    }));
  }

  render() {
    const state = this.state.data;
    return (
      <div className="calendar">
        <Header moment={state.get('currentMonth')} handleClick={this.changeMonth} />
        <Month
          moment={state.get('currentMonth')}
          range={this.props.range}
          handleChange={this.chooseDay}
        />
      </div>
    );
  }
}

Calendar.propTypes = {
  locale: React.PropTypes.string,
  range: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
  handleChange: React.PropTypes.func,
  returnAs: React.PropTypes.string,
};
