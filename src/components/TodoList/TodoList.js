import React from 'react';
import PropTypes from 'prop-types';
import {VisibilityFilters} from './actions/actions';
import './TodoList.css';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import {List} from 'material-ui/List';
import EmptyTodo from '../EmptyTodo/EmptyTodo';
import FilterSelect from '../FilterSelect/FilterSelect';
import Todo from '../Todo/Todo';
import AddTodo from '../AddTodo/AddTodo';

class TodoList extends React.Component {
	render() {
		return (
			<Card>
				<CardHeader
					title={this.props.title}
					subtitle={this.props.subtitle} />
				<CardActions>
					<AddTodo onSubmit={this.props.onTodoAdd}/>
					<Divider />
					<FilterSelect onChange={this.props.onChangeVisibility} value={VisibilityFilters.SHOW_ALL}/>
				</CardActions>
				<CardText>
				<Divider />
					<List>
						{this.props.todos.length === 0 ? <EmptyTodo /> : null}
						{this.props.todos.map((todo) => {
							return (
								<Todo key={todo.id} completed={todo.completed} text={todo.text} id={todo.id} onChangeCheckbox={this.props.onChangeCheckbox} />
							);
						})}
					</List>
				</CardText>
			</Card>
		);
	}
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(
	  PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	  }).isRequired
	).isRequired,
	onChangeCheckbox: PropTypes.func.isRequired,
	onChangeVisibility: PropTypes.func.isRequired,
	onTodoAdd: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
}

export default TodoList;