import React from 'react';
import { connect } from 'react-redux';
import { fetchEntry } from '../../actions';

class EntryEdit extends React.Component {
	componentDidMount() {
		this.props.fetchEntry(this.props.match.params.id);
	}

	render() {
		if (!this.entry) {
			return <div>Loading...</div>;
		}
		return <div>{this.props.entry.date}</div>;
	}
}

const mapStateToProps = (state, ownProps) => {
	return { entry: state.entries[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchEntry })(EntryEdit);
