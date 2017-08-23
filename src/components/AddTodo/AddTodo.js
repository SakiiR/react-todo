import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AddTodo extends React.Component {

    input = null;

    render() {
        return (
            <form onSubmit={e => { 
                    e.preventDefault(); 
                    if (this.input.value.length > 0) { 
                        this.props.onSubmit(this.input.value); 
                    }
                    this.input.value = '';
                }
            }>
                <TextField hintText="Todo Text" ref={node => { this.input = node }} onChange={(event, value) => { this.input.value = value; }} />
                <RaisedButton label="Envoyer" primary={true} type="submit" />
            </form>
        );
    }

}

AddTodo.propTypes = {
	onSubmit: PropTypes.func.isRequired
}

export default AddTodo;