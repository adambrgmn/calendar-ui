import './styles.scss';
import React, { Component } from 'react';

import Header from './Header';
import Calendar from '../../components/Calendar';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header title="Hello World!" />
        <Calendar />
      </div>
    );
  }
}
