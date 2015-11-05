'use strict';

import React, {Component} from 'react';

import classnames from 'classnames';

import {dispatch} from '../flux-infra/TodoDispatcher';

export default class TodoItem extends Component {
  render() {
    const {todo} = this.props;

    return (
      <li
        className={classnames({
          'completed': todo.complete,
        })}
        key={todo.id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.complete}
            onChange={this._onToggleComplete}
          />
          <label>
            {todo.text}
          </label>
        </div>
      </li>
    );
  }

  _onToggleComplete = () => {
    const {todo} = this.props;
    if (todo.complete) {
      dispatch({
        type: 'todo/undo-complete',
        id: todo.id,
      });
    } else {
      dispatch({
        type: 'todo/complete',
        id: todo.id,
      });
    }
  }
}
