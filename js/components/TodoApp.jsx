'use strict';

import React, {Component} from 'react';
import MainSection from './MainSection.jsx';

class TodoApp extends Component {
  render() {
    let todos = [];

    return (
      <div>
        <header id="header">
          <h1>todos</h1>
        </header>
        <MainSection todos={todos} />
      </div>
    );
  }
}

export default TodoApp;
