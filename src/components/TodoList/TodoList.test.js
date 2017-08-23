import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import VisibleTodoList from './containers/containers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import todoApp from './reducers/reducers';
import * as actions from './actions/actions'; 
import { createStore } from 'redux';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(todoApp);
  
  ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <VisibleTodoList />
        </Provider>
    </MuiThemeProvider>, 
    div);
});

it('should forge valid ADD_TODO', () => {
    const text = 'lol';
    const type = actions.ADD_TODO;
    const action = {type, text};
   
    expect(actions.forgeAddTodo("nop")).not.toEqual(action);
    expect(actions.forgeAddTodo(text)).toEqual(action);
});

it('should forge valid TOGGLE_TODO', () => {
    const id = 1;
    const type = actions.TOGGLE_TODO;
    const action = {type, id};
   
    expect(actions.forgeToggleTodo(2)).not.toEqual(action);
    expect(actions.forgeToggleTodo(id)).toEqual(action);
});

it('should forge valid SET_VISIBILITY_FILTER', () => {
    const filter = actions.VisibilityFilters.SHOW_ACTIVE;
    const type = actions.SET_VISIBILITY_FILTER;
    const action = {type, filter};
   
    expect(actions.forgeChangeVisibilityFilter(2)).not.toEqual(action);
    expect(actions.forgeChangeVisibilityFilter(filter)).toEqual(action);
});

it('should have valid visibility filters', () => {
    Object.keys(actions.VisibilityFilters, (key) => {
        expect(actions.VisibilityFilters[key]).toBe(key);
        expect(key.toUpperCase()).toBe(key);
    });
});

it('should have valid actions', () => {
    expect(actions.ADD_TODO).toEqual('ADD_TODO');
    expect(actions.TOGGLE_TODO).toEqual('TOGGLE_TODO');
    expect(actions.SET_VISIBILITY_FILTER).toEqual('SET_VISIBILITY_FILTER');
});