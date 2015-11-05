'use strict';

import React, {Component} from 'react';
import Header from './Header.jsx';
import MainSection from './MainSection.jsx';

class TodoApp extends Component {
  render() {
    let todos = [];

    return (
      <div>
        <Header />
        <MainSection todos={todos} />
      </div>
    );
  }
}

export default TodoApp;
