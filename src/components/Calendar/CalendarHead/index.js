import './styles.scss';
import React from 'react';

export default function CalendarHead(props) {
  const now = props.moment;
  const weekdays = [];
  for (let i = 0; i < 7; i++) { weekdays.push(now.weekday(i).format('ddd')); }

  return (
    <thead className="calendar-header">
      <tr className="calendar-header-row">
        <th colSpan="7" className="calendar-header-month">
          {now.format('MMMM, YYYY')}
        </th>
      </tr>
      <tr className="calendar-header-row">
        {weekdays.map((day) => <th className="calendar-header-days" key={day}>{day}</th>)}
      </tr>
    </thead>
  );
}
