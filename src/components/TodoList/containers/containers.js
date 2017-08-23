import {forgeToggleTodo, forgeAddTodo, forgeChangeVisibilityFilter} from '../actions/actions';
import TodoList from '../TodoList';
import { connect } from 'react-redux'

/**
 * Retrieve the good todos relative to the current given filter.
 * 
 * @param {*} todos the total todos
 * @param {*} filter the "to-apply" filter
 */
export const getVisibleTodos = (todos, filter) => {
	switch (filter) {
	  case 'SHOW_ALL':
		  return todos
	  case 'SHOW_COMPLETED':
		  return todos.filter(t => t.completed)
	  case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos;
  }
}  

/**
 * Retrieve a state object with the visible todos
 * 
 * @param {*} state the current state
 */
const mapStateToProps = state => {
    return {
      todos: getVisibleTodos(state.todos, state.filter),
      title: 'Todo List',
      subtitle: 'A Material-ui Todolist working with redux'
    }
};

/**
 * Retrieve a dispatch object the the component handler 
 * 
 * @param {*} dispatch the dispatch func to send the event.
 */
const mapDispatchToProps = dispatch => {
    return {
      onChangeCheckbox: (id) => {
        dispatch(forgeToggleTodo(id))
      },
      onTodoAdd: text => {
        dispatch(forgeAddTodo(text))
      },
      onChangeVisibility: filter => {
        dispatch(forgeChangeVisibilityFilter(filter))
      }
    }
};

/**
 * Mapped state/dispatch object
 */
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;