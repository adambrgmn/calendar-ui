import React, { Component } from 'react';

import Calendar from '../../components/Calendar';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <Calendar />
      </div>
    );
  }
}
