import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Calendar from './index.js';
import Week from './Week';
import Day from './Day';

storiesOf('Calendar', module)
  .add('All', () => <Calendar />);

storiesOf('Calendar.Week', module)
  .addDecorator((story) => (
    <table style={{ borderCollapse: 'collapse' }}><tbody>{story()}</tbody></table>
  ))
  .add('Normal', () => <Week days={[1, 2, 3, 4, 5, 6, 7]} />)
  .add('With range', () => <Week days={[1, 2, 3, 4, 5, 6, 7]} range={[2, 4]} />)
  .add('With range outside week', () => <Week days={[1, 2, 3, 4, 5, 6, 7]} range={[6, 9]} />)
  .add('With empty days', () => <Week days={[0, 0, 1, 2, 3, 4, 5]} />);

storiesOf('Calendar.Day', module)
  .addDecorator((story) => <table><tbody><tr>{story()}</tr></tbody></table>)
  .add('Normal', () => <Day day={1} />)
  .add('In range', () => <Day day={2} range={[1, 3]} />)
  .add('First in range', () => <Day day={3} range={[3, 4]} />)
  .add('Last in range', () => <Day day={4} range={[1, 4]} />)
  .add('Alone in range', () => <Day day={5} range={[5, 5]} />)
  .add('Empty', () => <Day />);
