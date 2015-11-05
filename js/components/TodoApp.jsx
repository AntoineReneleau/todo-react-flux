'use strict';

import React, {Component} from 'react';
import Header from './Header.jsx';
import MainSection from './MainSection.jsx';

import {Container} from 'flux/utils';
import TodoStore from '../flux-infra/TodoStore';

class TodoApp extends Component {
  static getStores() {
    return [TodoStore];
  }

  static calculateState() {
    return {
      todos: TodoStore.getState(),
    };
  }

  render() {
    return (
      <div>
        <Header />
        <MainSection todos={this.state.todos} />
      </div>
    );
  }
}

const TodoAppContainer = Container.create(TodoApp);
export default TodoAppContainer;
