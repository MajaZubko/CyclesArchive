import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';
import _ from 'lodash';

export default (state = {}, action) => {
	switch (action.type) {
		case 'FETCH_ENTRIES_SUCCESS':
			return { ...state, ..._.mapKeys(action.payload, 'id') };
		case 'FETCH_ENTRY_SUCCESS':
			return { ...state, [action.payload.id]: action.payload };
		case 'CREATE_ENTRY_SUCCESS':
			return { ...state, [action.payload.id]: action.payload };
		case 'EDIT_ENTRY_SUCCESS':
			return { ...state, [action.payload.id]: action.payload };
		case 'DELETE_ENTRY_SUCCESS':
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
