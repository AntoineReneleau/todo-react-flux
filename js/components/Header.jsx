'use strict';

import React, {Component} from 'react';
import TodoTextInput from './TodoTextInput.jsx';

import {dispatch} from '../flux-infra/TodoDispatcher';

export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <h1>todos</h1>
        <TodoTextInput
          id="new-todo"
          placeholder="What needs to be done?"
          onSave={this._onSave}
        />
      </header>
    );
  }

  _onSave(text) {
    if (text.trim()) {
      dispatch({
        type: 'todo/create',
        text,
      });
    }
  }
}
