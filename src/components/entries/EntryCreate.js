import React from 'react';
import { connect } from 'react-redux';
import { createEntry } from '../../actions';
import EntryForm from './EntryForm';

class EntryCreate extends React.Component {
	onSubmit = (formValues) => {
		this.props.createEntry(formValues);
	};

	render() {
		return (
			<div>
				<h3>Create Entry</h3>
				<EntryForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(null, { createEntry })(EntryCreate);
