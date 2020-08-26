import _ from 'lodash';

import { CREATE_ENTRY, FETCH_ENTRY, FETCH_ENTRIES, DELETE_ENTRY, EDIT_ENTRY } from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_ENTRIES:
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case FETCH_ENTRY:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_ENTRY:
			return { ...state, [action.payload.id]: action.payload };
		case EDIT_ENTRY:
			return { ...state, [action.payload.id]: action.payload };
		case DELETE_ENTRY:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
