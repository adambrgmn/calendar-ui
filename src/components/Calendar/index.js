import React from 'react';
import moment from 'moment';
moment.locale('sv');

import Month from './Month';

export default function Calendar() {
  return <div><Month moment={moment()} /></div>;
}
