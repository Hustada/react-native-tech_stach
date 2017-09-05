import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';

class LibraryList extends Component {
	componentWillMount() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => !== r2
		});

		this.dataSource = ds.cloneWithRows(this.props.libraries);
	}

	//return a single library
	renderRow() {

	}

	render() {
		return (
			<ListView dataSource={this.dataSource}
			rednerRow={this.renderRow} />
		);
	}
}

// take global state object and map it to Library list as props
const mapStateToProps = state => {
	return { libraries: state.libraries };
};

// Call connect which returns another function. Immediately call return function with library list.
export default connect(mapStateToProps)(LibraryList);