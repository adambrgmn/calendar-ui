import './styles.scss';
import React from 'react';
import classNames from 'classnames';
import moment from 'moment';

function inRange(day, range) {
  if (!day || !range) return false;
  if (day.isSame(range[0])) return 'first';
  if (day.isSame(range[1])) return 'last';
  if (day.isBetween(range[0], range[1], null, '[]')) return 'middle';
  return false;
}

export default function Day(props) {
  const selected = inRange(props.day, props.range);

  const dayClass = classNames({
    'selected-first': selected === 'first',
    'selected-last': selected === 'last',
    'calendar-day': true,
    empty: !props.day,
    selected,
  });

  const dayObj = !props.day ? props.day : (
    <label>
      <input
        type="checkbox"
        name={props.day.format('MMM')}
        value={props.day.format('YYYY-MM-DD')}
        checked={selected}
      />
      {props.day.date()}
    </label>
  );

  return (
    <td className={dayClass}>
      {dayObj}
    </td>
  );
}

Day.propTypes = {
  day: React.PropTypes.object,
  range: React.PropTypes.arrayOf(React.PropTypes.object),
};
