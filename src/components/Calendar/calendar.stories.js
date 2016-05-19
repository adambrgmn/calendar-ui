import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import moment from 'moment';
moment.locale('sv');

import Month from './Month';
import Header from './Header';

storiesOf('Calendar.Month', module)
  .add('This month', () => <Month moment={moment()} />)
  .add('Previous month', () => <Month moment={moment().add(-1, 'month')} />)
  .add('Next month', () => <Month moment={moment().add(1, 'month')} />)
  .add('With range', () => (
    <Month moment={moment()} range={[moment().date(14), moment().date(20)]} />
  ))
  .add('With range (outside month)', () => (
    <Month moment={moment()} range={[moment().date(30), moment().add(1, 'month').date(3)]} />
  ))
  .add('With change handler', () => (
    <Month moment={moment()} handleChange={action()} />
  ));

storiesOf('Calendar.Header', module)
  .add('Normal', () => <Header moment={moment()} />);
