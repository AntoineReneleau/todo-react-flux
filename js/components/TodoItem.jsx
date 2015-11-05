'use strict';

import React, {Component} from 'react';
import TodoTextInput from './TodoTextInput.jsx';

import classnames from 'classnames';

import {dispatch} from '../flux-infra/TodoDispatcher';

export default class TodoItem extends Component {
  state = {
    isEditing: false,
  }

  render() {
    const {todo} = this.props;

    let input;
    if (this.state.isEditing) {
      input =
        <TodoTextInput
          className="edit"
          onSave={this._onSave}
          value={todo.text}
        />;
    }

    return (
      <li
        className={classnames({
          'completed': todo.complete,
          'editing': this.state.isEditing,
        })}
        key={todo.id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.complete}
            onChange={this._onToggleComplete}
          />
          <label onDoubleClick={this._onDoubleClick}>
            {todo.text}
          </label>
        </div>
        {input}
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

  _onDoubleClick = () => {
    this.setState({isEditing: true});
  }

  _onSave = (text) => {
    const {todo} = this.props;
    dispatch({
      type: 'todo/update-text',
      id: todo.id,
      text,
    });
    this.setState({isEditing: false});
  }
}
