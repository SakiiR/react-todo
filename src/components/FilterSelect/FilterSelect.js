import React from 'react';
import PropTypes from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {VisibilityFilters} from '../TodoList/actions/actions';

class FilterSelect extends React.Component {
    
    state = {
        value: this.props.value
    };

    onChange(event, index, filter) {
        this.setState({value: filter});
        this.props.onChange(filter);
    }

    render() {
        return (
            <SelectField floatingLabelText="Filter" value={this.state.value} onChange={this.onChange.bind(this)}>
                    <MenuItem value={VisibilityFilters.SHOW_ALL} primaryText="Show All" />
                    <MenuItem value={VisibilityFilters.SHOW_COMPLETED} primaryText="Completed" />
                    <MenuItem value={VisibilityFilters.SHOW_ACTIVE} primaryText="Not Completed" />
            </SelectField>
        );
    }
}

FilterSelect.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
}

export default FilterSelect;