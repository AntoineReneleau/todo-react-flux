'use strict';

import React, {Component} from 'react';

import classnames from 'classnames';

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
          />
          <label>
            {todo.text}
          </label>
        </div>
      </li>
    );
  }
}
