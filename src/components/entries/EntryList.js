import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchEntries } from '../../actions';

class EntryList extends React.Component {
	componentDidMount() {
		this.props.fetchEntries();
	}

	renderList() {
		return this.props.entries.map((entry) => {
			if (entry.userId === this.props.currentUserId) {
				return (
					<div className="list-item" key={entry.id}>
						<i className="fas fa-thermometer-half" />
						<div className="list-content">
							{entry.date}
							<div className="list-description">{entry.temperature}</div>
						</div>
						<div className="list-buttons">
							<Link to={`/entries/edit/${entry.id}`} className="edit-button">
								Edit
							</Link>
							<button className="delete-button">Delete</button>
						</div>
					</div>
				);
			}
		});
	}

	renderCreate() {
		if (this.props.isSignedIn) {
			return (
				<Link to="/entries/new" className="create-button">
					Create entry
				</Link>
			);
		}
	}

	render() {
		return (
			<div>
				<h2>Entries</h2>
				<div className="entry-list">{this.renderList()}</div>
				{this.renderCreate()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		entries: Object.values(state.entries),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn
	};
};

export default connect(mapStateToProps, { fetchEntries })(EntryList);
