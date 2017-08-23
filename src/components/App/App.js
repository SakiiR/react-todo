import React, { Component } from 'react';
import logo from '../../logo.svg';
import VisibleTodoList from '../TodoList/containers/containers';
import './App.css';

// Store
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from '../TodoList/reducers/reducers';

export const store = createStore(todoApp);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the React TodoList</h2>
        </div>
        <div className="App-main">
          <Provider store={store}>
            <VisibleTodoList />
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
