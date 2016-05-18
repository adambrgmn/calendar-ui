import './styles.scss';
import React from 'react';
import classNames from 'classnames';

import Day from '../Day';

export default function Week(props) {
  const weekClass = classNames({
    'calendar-week': true,
  });

  return (
    <tr className={weekClass}>
      {props.days.map((day, index) => (
        <Day key={day || index + 50} day={day} range={props.range} />
      ))}
    </tr>
  );
}

Week.propTypes = {
  days: React.PropTypes.arrayOf(React.PropTypes.object),
  range: React.PropTypes.arrayOf(React.PropTypes.object),
};
