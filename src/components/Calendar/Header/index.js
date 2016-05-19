import './styles.scss';
import React from 'react';

export default function Header(props) {
  const now = props.moment;
  const weekdays = [];
  for (let i = 0; i < 7; i++) { weekdays.push(now.weekday(i).format('dd')); }

  return (
    <div className="calendarHeader">
      <h3 colSpan="7" className="calendarHeaderMonth">
        {now.format('MMMM YYYY')}
      </h3>
      <ul className="calendarHeaderWeek">
        {weekdays.map((day) => <li className="calendarHeaderDays" key={day}>{day}</li>)}
      </ul>
    </div>
  );
}

Header.propTypes = {
  moment: React.PropTypes.object.isRequired,
};
