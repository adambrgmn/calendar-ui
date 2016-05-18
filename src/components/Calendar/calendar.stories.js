import React from 'react';
import { storiesOf } from '@kadira/storybook';
import moment from 'moment';
moment.locale('sv');

import Month from './Month';

storiesOf('Calendar.Month', module)
  .add('Normal', () => <Month moment={moment()} />)
  .add('With range', () => <Month moment={moment()} range={[moment().date(7), moment().date(10)]} />)
  .add('With range (outside month)', () => <Month moment={moment()} range={[moment().date(30), moment().add(1, 'month').date(3)]} />)
  .add('Previous month', () => <Month moment={moment().add(-1, 'month')} />)
  .add('Next month', () => <Month moment={moment().add(1, 'month')} />);
