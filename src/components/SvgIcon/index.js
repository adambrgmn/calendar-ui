import React from 'react';

export default function SvgIcon(props) {
  let icon;
  switch (props.icon) {
    case 'arrowRight':
      icon = (<polygon points="11 3 10 4 19 16 10 28 11 29 22 16 11 3" />);
      break;
    case 'arrowLeft':
      icon = (<polygon points="21 29 22 28 13 16 22 4 21 3 10 16 21 29" />);
      break;
    default:
      icon = (<circle cx="16" cy="16" r="1" />);
  }

  return (
    <svg className={props.classNames} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      {icon}
    </svg>
  );
}

SvgIcon.propTypes = {
  classNames: React.PropTypes.array,
  icon: React.PropTypes.string,
};

/**
**/
