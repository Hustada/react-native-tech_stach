//action creators go here
//action creators are javascript functions


export const selectLibrary = (libraryId) => {
	return {
		type: 'select_library',
		payload: libraryId
	};
};
