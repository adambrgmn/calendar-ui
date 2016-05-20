import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { List } from 'immutable';
import moment from 'moment';
moment.locale('sv');

import Calendar from './index.js';
import Month from './Month';
import Header from './Header';

storiesOf('Calendar', module)
  .add('Normal', () => <Calendar />)
  .add('Other locale', () => <Calendar locale="en" />)
  .add('With range', () => <Calendar range={List.of(new Date(), new Date(2016, 4, 24))} />)
  .add('Return Date', () => <Calendar returnAs="date" handleChange={action()} />)
  .add('Return moment', () => <Calendar returnAs="moment" handleChange={action()} />)
  .add('Return milliseconds', () => <Calendar returnAs="milliseconds" handleChange={action()} />)
  .add('Return custom', () => <Calendar returnAs="DD MMMM YYYY" handleChange={action()} />)
  .add('ReturnAs undefined', () => <Calendar handleChange={action()} />);

storiesOf('Calendar.Month', module)
  .add('This month', () => <Month moment={moment()} />)
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

storiesOf('Calendar.Header', module)
  .add('Normal', () => <Header moment={moment()} />);
