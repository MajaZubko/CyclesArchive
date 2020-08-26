import React from 'react';
import { connect } from 'react-redux';

import { fetchEntries } from '../../actions';

class EntryList extends React.Component {
	componentDidMount() {
		this.props.fetchEntries();
	}

	renderList() {
		return this.props.entries.map((entry) => {
			return (
				<div className="list-item" key={entry.id}>
					<i className="fas fa-thermometer-half" />
					<div className="list-content">
						{entry.date}
						<div className="list-description">{entry.temperature}</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<h2>Entries</h2>
				<div className="entry-list">{this.renderList()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { entries: Object.values(state.entries) };
};

export default connect(mapStateToProps, { fetchEntries })(EntryList);
