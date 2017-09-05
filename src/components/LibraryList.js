import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
	render() {
		console.log(this.props);
		return;
	}
}

//take global state object and map it to Library list as props
const mapStateToProps = state => {
	return { libraries: state.libraries };
};

// Call connect which returns another function. Immediately call return function with library list.
export default connect(mapStateToProps)(LibraryList);