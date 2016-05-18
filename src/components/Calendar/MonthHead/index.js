import './styles.scss';
import React from 'react';

export default function MonthHead(props) {
  const now = props.moment;
  const weekdays = [];
  for (let i = 0; i < 7; i++) { weekdays.push(now.weekday(i).format('ddd')); }

  return (
    <div className="calendar-header">
      <h3 colSpan="7" className="calendar-header-month">
        {now.format('MMMM YYYY')}
      </h3>
      <ul className="calendar-header-row">
        {weekdays.map((day) => <li className="calendar-header-days" key={day}>{day}</li>)}
      </ul>
    </div>
  );
}

MonthHead.propTypes = {
  moment: React.PropTypes.object.isRequired,
};
