import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import entryReducer from './entryReducer';

export default combineReducers({
	auth: authReducer,
	form: formReducer,
	entries: entryReducer
});
