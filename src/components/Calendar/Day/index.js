import './styles.scss';
import React from 'react';
import classNames from 'classnames';

function inRange(day, range) {
  if (day && range) return day.isBetween(range[0], range[1], null, '[]');
  return false;
}

function firstInRange(day, range) {
  if (day && range) return day.isSame(range[0]);
  return false;
}

function lastInRange(day, range) {
  if (day && range) return day.isSame(range[1]);
  return false;
}

export default function Day(props) {
  const day = props.day ? props.day.date() : props.day;
  const dayClass = classNames({
    empty: !day,
    selected: inRange(props.day, props.range),
    'selected-first': firstInRange(props.day, props.range),
    'selected-last': lastInRange(props.day, props.range),
    'calendar-day': true,
  });

  return <td className={dayClass}>{day}</td>;
}

Day.propTypes = {
  day: React.PropTypes.object,
  range: React.PropTypes.arrayOf(React.PropTypes.object),
};
