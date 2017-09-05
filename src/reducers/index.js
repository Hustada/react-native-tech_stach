import { combineReducers } from 'redux';


// create reducer with libraries object that always returns an array
export default combineReducers({
	libraries: () => []
});