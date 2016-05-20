import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { List } from 'immutable';
import moment from 'moment';
moment.locale('sv');

import Calendar from './index.js';
import Header from './Header';
import Month from './Month';
import Week from './Week';
import Day from './Day';

storiesOf('Calendar', module)
  .add('Normal', () => <Calendar />)
  .add('Other locale', () => <Calendar locale="en" />)
  .add('With range', () => <Calendar range={List.of(new Date(), new Date(2016, 4, 24))} />)
  .add('Return Date', () => <Calendar returnAs="date" handleChange={action()} />)
  .add('Return moment', () => <Calendar returnAs="moment" handleChange={action()} />)
  .add('Return milliseconds', () => <Calendar returnAs="milliseconds" handleChange={action()} />)
  .add('Return custom', () => <Calendar returnAs="DD MMMM YYYY" handleChange={action()} />)
  .add('ReturnAs undefined', () => <Calendar handleChange={action()} />);

storiesOf('Calendar.Header', module)
  .add('Normal', () => <Header moment={moment()} />)
  .add('Witch click handler', () => <Header moment={moment()} handleClick={action()} />);

storiesOf('Calendar.Month', module)
  .add('Normal', () => <Month moment={moment()} />)
  .add('Previous month', () => <Month moment={moment().add(-1, 'month')} />)
  .add('Next month', () => <Month moment={moment().add(1, 'month')} />)
  .add('With range', () => (
    <Month moment={moment()} range={List.of(moment().date(14), moment().date(20))} />
  ))
  .add('With range (outside month)', () => (
    <Month moment={moment()} range={List.of(moment().date(30), moment().date(37))} />
  ))
  .add('With range as array', () => (
    <Month moment={moment()} range={[moment().date(14), moment().date(18)]} />
  ))
  .add('With change handler', () => (
    <Month moment={moment()} handleChange={action()} />
  ));

const days = [
  moment(),
  moment().add(1, 'd'),
  moment().add(2, 'd'),
  moment().add(3, 'd'),
  moment().add(4, 'd'),
  moment().add(5, 'd'),
  moment().add(6, 'd'),
];

storiesOf('Calendar.Week', module)
  .add('Normal', () => <Week monthInView={moment()} days={days} />)
  .add('With range', () => (
    <Week monthInView={moment()} days={days} range={[moment().add(1, 'd'), moment().add(3, 'd')]} />
  ));

const ulStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  margin: 0,
  padding: 0,
  listStyle: 'none',
};

storiesOf('Calendar.Day', module)
  .addDecorator((story) => (
    <ul style={ulStyle}>
      {story()}
    </ul>
  ))
  .add('Normal', () => <Day monthInView={moment()} day={moment().add(1, 'd')} />)
  .add('Today', () => <Day monthInView={moment()} day={moment()} />)
  .add('In range', () => (
    <Day
      monthInView={moment()}
      day={moment()}
      range={[moment().add(-1, 'd'), moment().add(1, 'd')]}
    />
  ))
  .add('Start of range', () => (
    <Day
      monthInView={moment()}
      day={moment()}
      range={[moment(), moment().add(1, 'd')]}
    />
  ))
  .add('End of range', () => (
    <Day
      monthInView={moment()}
      day={moment()}
      range={[moment().subtract(1, 'd'), moment()]}
    />
  ))
  .add('Only in range', () => (
    <Day
      monthInView={moment()}
      day={moment()}
      range={[moment(), moment()]}
    />
  ));
