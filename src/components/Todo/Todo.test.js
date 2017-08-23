import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MuiThemeProvider><Todo id={1} onChangeCheckbox={() => {}} completed={true} text="lol"/></MuiThemeProvider>, div);
});

