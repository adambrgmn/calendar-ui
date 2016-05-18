import './styles.scss';
import React from 'react';
import classNames from 'classnames';

function inRange(day, range) {
  if (day && range) return day >= range[0] && day <= range[1];
  return false;
}

function firstInRange(day, range) {
  return inRange(day, range) && day === range[0];
}

function lastInRange(day, range) {
  return inRange(day, range) && day === range[1];
}

export default function Day(props) {
  const dayClass = classNames({
    empty: !props.day,
    selected: inRange(props.day, props.range),
    'selected-first': firstInRange(props.day, props.range),
    'selected-last': lastInRange(props.day, props.range),
    'calendar-day': true,
  });

  return <td className={dayClass}>{props.day}</td>;
}

Day.propTypes = {
  day: React.PropTypes.number,
  range: React.PropTypes.arrayOf(React.PropTypes.number),
};
