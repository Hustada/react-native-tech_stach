import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
	render() {
		return;
	}
}


// Call connect which returns another function. Immediately call return function with library list.
export default connect()(LibraryList);