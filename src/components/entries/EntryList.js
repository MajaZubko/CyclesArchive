import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchEntries } from '../../actions';

const EntryList = () => {
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(fetchEntries());
		},
		[ dispatch ]
	);

	const entries = useSelector((state) => Object.values(state.entries));
	console.log(entries);
	const currentUserId = useSelector((state) => state.auth.userId);
	const isSignedIn = useSelector((state) => state.auth.isSignedIn);

	const renderList = () => {
		return entries.map((entry) => {
			if (entry.userId === currentUserId) {
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
							<Link to={`/entries/delete/${entry.id}`} className="delete-button">
								Delete
							</Link>
						</div>
					</div>
				);
			}
		});
	};

	const renderCreate = () => {
		if (isSignedIn) {
			return (
				<Link to="/entries/new" className="create-button">
					Create entry
				</Link>
			);
		}
	};

	return (
		<div>
			<h2>Entries</h2>
			<div className="entry-list">{renderList()}</div>
			{renderCreate()}
		</div>
	);
};

// const mapStateToProps = (state) => {
// 	return {
// 		entries: Object.values(state.entries),
// 		currentUserId: state.auth.userId,
// 		isSignedIn: state.auth.isSignedIn
// 	};
// };

export default EntryList;
