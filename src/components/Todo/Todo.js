import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

class Todo extends React.Component {

    onCheckboxClick(event, checked) {
        this.props.onChangeCheckbox(this.props.id);
    }

    render() {
        return (
            <ListItem 
                primaryText={'' + this.props.id}
                secondaryText={this.props.text}
                leftCheckbox={
                    <Checkbox onCheck={this.onCheckboxClick.bind(this)}/>
                } />
        );
    }
}

Todo.propTypes = {
    onChangeCheckbox: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

export default Todo;