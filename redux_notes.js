//Store
//- An object that holds the applications data
// Store holds reducer and application state.

//Action
//= An Object that tells the reducer how to change its data
// Turn 'asdf' into and array of characters


//Reducer
//-A function that returns some data
// If the actions type is 'split', I will take a string of characters and turn it into an array.
// Always return brand new object with reducer instead of mutating existing array.
// return [...state, action.payload ]; versus return state;

//State
//-Data for our app to use
//Ex. output -> ['a', 's', 'd', 'f']

// Ex

// const reducer = (state = [], action) => {
// 	if (action.type === 'split_string') {
//   	return action.payload.split('');
//   }
//   return state;
// };

// const store = Redux.createStore(reducer);

// store.getState();

// const action = { type: 'split_string', payload: 'asdf' };

// store.dispatch(action);

// store.getState();

//PROVIDER TAG
// Translates all data in 'store' that can communicate with react

//React-reduc library is the communication glue between redux and react.