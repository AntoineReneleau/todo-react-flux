'use strict';

import React, {Component} from 'react';

class TodoApp extends Component {
  render() {
    return (
      <div>
        <header id="header">
          <h1>todos</h1>
        </header>
        <section id="main">
          <ul id="todo-list">
            <li>Todo</li>
            <li>Todo 2</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default TodoApp;
