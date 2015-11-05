'use strict';

import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import Todo from './Todo';
import TodoDispatcher from './TodoDispatcher';

class TodoStore extends ReduceStore {
  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce (state, action) {
    switch (action.type) {
      case 'todo/create':
        return createTodo(state, action.text);

      default:
        return state;
    }
  }
}

// Pure helper function to create a new Todo and add it to the state.
function createTodo(state, text) {
  if (!text) {
    return state;
  }
  const newTodo = new Todo(text);

  return state.set(newTodo.id, newTodo);
}

// Export a singleton instance of the store
const instance = new TodoStore(TodoDispatcher);
export default instance;
