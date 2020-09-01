import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Modal from '../Modal';
import EntryList from './EntryList';
import history from '../../history';
import { fetchEntry, deleteEntry } from '../../actions';

class EntryDelete extends React.Component {
	componentDidMount() {
		this.props.fetchEntry(this.props.match.params.id);
	}

	renderActions() {
		const { id } = this.props.match.params;

		return (
			<div className="modal-buttons">
				<button onClick={() => this.props.deleteEntry(id)} className="delete-button">
					Delete
				</button>
				<Link to="/" className="cancel-button">
					Cancel
				</Link>
			</div>
		);
	}

	renderContent() {
		if (!this.props.entry) {
			return 'Are you sure you want to delete this entry?';
		}

		return `Are you sure you want to delete entry from ${this.props.entry.date}?`;
	}

	render() {
		return (
			<div>
				<EntryList />
				<Modal
					title="Delete entry"
					content={this.renderContent()}
					actions={this.renderActions()}
					onDismiss={() => history.push('/')}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return { entry: state.entries[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchEntry, deleteEntry })(EntryDelete);
