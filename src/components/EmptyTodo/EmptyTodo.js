import React from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import darkBlack from 'material-ui/styles/colors';

class EmptyTodo extends React.Component {
	render() {
		return (
			<ListItem 
				leftAvatar={<Avatar src="images/unknown.jpg" />}
				primaryText="Oops"
				secondaryText={
					<p>
						<span style={{color: darkBlack}}>Oops :(</span><br />
						There is no Todos yet ! :(
					</p>
				}
				secondaryTextLines={2} />
		)
	}
}

export default EmptyTodo;