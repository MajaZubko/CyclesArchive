import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions';

const INITIAL_STATE = {
	isSignedIn: null,
	userId: null
};

const authReducer = createReducer(INITIAL_STATE, {
	[actions.signIn]: (state, action) => {
		state.isSignedIn = true;
		state.userId = action.payload;
	},
	[actions.signOut]: (state) => {
		state.isSignedIn = false;
		state.userId = null;
	}
});

export default authReducer;
