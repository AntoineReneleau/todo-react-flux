'use strict';

import React, {Component} from 'react';
import {dispatch} from '../flux-infra/TodoDispatcher';

export default class Footer extends Component {
  render() {
    const {todos} = this.props;

    if (todos.size === 0) {
      return null;
    }

    const completed = todos.reduce((x, todo) => todo.complete ? x + 1 : x, 0);
    const itemsLeft = todos.size - completed;
    const itemsLeftPhrase = itemsLeft === 1 ? ' item left' : ' items left';

    let clearCompletedButton;
    if (completed > 0) {
      clearCompletedButton =
        <button
          id="clear-completed"
          onClick={this._onClearCompletedClick}>
          Clear completed ({completed})
        </button>;
    }

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>
            {itemsLeft}
          </strong>
          {itemsLeftPhrase}
        </span>
        {clearCompletedButton}
      </footer>
    );
  }

  _onClearCompletedClick() {
    dispatch({type: 'todo/destroy-completed'});
  }
}
