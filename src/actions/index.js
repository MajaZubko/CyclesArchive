import { createAction } from '@reduxjs/toolkit';

import entries from '../apis/entries';
import history from '../history';

export const signIn = createAction('SIGN_IN');

export const signOut = createAction('SIGN_OUT');

export const createEntrySuccess = createAction('CREATE_ENTRY_SUCCESS');

export const createEntry = (formValues) => async (dispatch, getState) => {
	const { userId } = getState().auth;
	const response = await entries.post('/entries', { ...formValues, userId });

	dispatch(createEntrySuccess(response.data));
	history.push('/');
};

export const fetchEntriesSuccess = createAction('FETCH_ENTRIES_SUCCESS');

export const fetchEntries = () => async (dispatch) => {
	const response = await entries.get('/entries');

	dispatch(fetchEntriesSuccess(response.data));
};

export const fetchEntrySuccess = createAction('FETCH_ENTRY_SUCCESS');

export const fetchEntry = (id) => async (dispatch) => {
	const response = await entries.get(`/entries/${id}`);
	dispatch(fetchEntrySuccess(response.data));
};

export const editEntrySuccess = createAction('EDIT_ENTRY_SUCCESS');

export const editEntry = (id, formValues) => async (dispatch) => {
	const response = await entries.patch(`/entries/${id}`, formValues);

	dispatch(editEntrySuccess(response.data));
	history.push('/');
};

export const deleteEntrySuccess = createAction('DELETE_ENTRY_SUCCESS');

export const deleteEntry = (id) => async (dispatch) => {
	await entries.delete(`/entries/${id}`);

	dispatch(deleteEntrySuccess(id));
	history.push('/');
};
