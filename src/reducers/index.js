import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';


// create reducer with libraries object that always returns an array

//assign LibraryReducer to 'libraries'

// so console.log(store.getState());
// { libraries: [] }

export default combineReducers({
	libraries: LibraryReducer
});
