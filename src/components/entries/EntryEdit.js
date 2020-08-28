import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchEntry, editEntry } from '../../actions';
import EntryForm from './EntryForm';

class EntryEdit extends React.Component {
	componentDidMount() {
		this.props.fetchEntry(this.props.match.params.id);
	}

	onSubmit = (formValues) => {
		this.props.editEntry(this.props.match.params.id, formValues);
	};

	render() {
		if (!this.props.entry) {
			return <div>Loading...</div>;
		}
		return (
			<div>
				<h3>Edit entry</h3>
				<EntryForm initialValues={_.pick(this.props.entry, 'date', 'temperature')} onSubmit={this.onSubmit} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { entry: state.entries[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchEntry, editEntry })(EntryEdit);
