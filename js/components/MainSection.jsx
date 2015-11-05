'use strict';

import React, {Component} from 'react';
import TodoItem from './TodoItem.jsx';

export default class MainSection extends Component {
  render() {
    const {todos} = this.props;

    if (todos.size === 0) {
      return null;
    }

    const todoItems = [];
    for (let [id, todo] of todos) {
      todoItems.push(<TodoItem key={id} todo={todo} />);
    }

    return (
      <section id="main">
        <ul id="todo-list">{todoItems}</ul>
      </section>
    );
  }
}
