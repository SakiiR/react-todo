import { VisibilityFilters, ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../actions/actions';

const initialState = {
	filter: VisibilityFilters.SHOW_ALL,
	todos: []
};

let nextId = 0;

function addTodo(state, text) {
	return Object.assign({}, state, {
		filter: state.filter,
		todos: [
			...state.todos,
			{
				text: text,
				id: nextId++,
				completed: false
			}
		]
	});
}

function removeTodo(state, id) {
	return Object.assign({}, state, {
		filter: state.filter,
		todos: state.todos.filter((todo) => { return todo.id !== id })
	})
}

function toggleTodo(state, id) {
	return Object.assign({}, state, {
		filter: state.filter,
		todo: state.todos.map((todo) => {
			if (todo.id === id) todo.completed = !todo.completed;
			return todo;
		})
	})
}

function setVisibilityFilter(state, filter) {
	return Object.assign({}, state, {
		filter: filter,
		todos: state.todos
	});
}

export default function todoApp(previousState = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return addTodo(previousState, action.text)
		case TOGGLE_TODO:
			return toggleTodo(previousState, action.id);
		case SET_VISIBILITY_FILTER:
			return setVisibilityFilter(previousState, action.filter);
		default:
			return previousState;
	}
  }