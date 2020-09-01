import entries from '../apis/entries';
import history from '../history';
import { SIGN_IN, SIGN_OUT, CREATE_ENTRY, FETCH_ENTRY, FETCH_ENTRIES, DELETE_ENTRY, EDIT_ENTRY } from './types';

export const signIn = (userId) => {
	return {
		type: SIGN_IN,
		payload: userId
	};
};

export const signOut = () => {
	return {
		type: SIGN_OUT
	};
};

export const createEntry = (formValues) => async (dispatch, getState) => {
	const { userId } = getState().auth;
	const response = await entries.post('/entries', { ...formValues, userId });

	dispatch({ type: CREATE_ENTRY, payload: response.data });
	history.push('/');
};

export const fetchEntries = () => async (dispatch) => {
	const response = await entries.get('/entries?_sort=date');

	dispatch({ type: FETCH_ENTRIES, payload: response.data });
};

export const fetchEntry = (id) => async (dispatch) => {
	const response = await entries.get(`/entries/${id}`);

	dispatch({ type: FETCH_ENTRY, payload: response.data });
};

export const editEntry = (id, formValues) => async (dispatch) => {
	const response = await entries.patch(`/entries/${id}`, formValues);

	dispatch({ type: EDIT_ENTRY, payload: response.data });
	history.push('/');
};

export const deleteEntry = (id) => async (dispatch) => {
	await entries.delete(`/entries/${id}`);

	dispatch({ type: DELETE_ENTRY, payload: id });
	history.push('/');
};
