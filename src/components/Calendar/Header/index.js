import './styles.scss';
import React from 'react';

import SvgIcon from '../../SvgIcon';

export default function Header(props) {
  const now = props.moment;
  const weekdays = [];
  for (let i = 0; i < 7; i++) { weekdays.push(now.weekday(i).format('dd')); }

  return (
    <div className="calendarHeader">
      <div className="calendarHeaderMonth">
        <button className="headerButton prev" onClick={() => props.handleClick(-1)}>
          <SvgIcon classNames="headerButtonIcon" icon="arrowLeft" />
        </button>
        <span className="headerMonth" onClick={() => props.handleClick('today')}>
          {now.format('MMM YYYY')}
        </span>
        <button className="headerButton next" onClick={() => props.handleClick(1)}>
          <SvgIcon classNames="headerButtonIcon" icon="arrowRight" />
        </button>
      </div>
      <ul className="calendarHeaderWeek">
        {weekdays.map((day) => <li className="calendarHeaderDays" key={day}>{day}</li>)}
      </ul>
    </div>
  );
}

Header.propTypes = {
  moment: React.PropTypes.object.isRequired,
  handleClick: React.PropTypes.func,
};
