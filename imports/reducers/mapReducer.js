const mapReducer = (reducerMap, initialState = {}) => (
	state = initialState,
	{ type, ...action }
) => {
	const reducer = reducerMap[type]

	return reducer ? reducer(state, action) : state
}

export default mapReducer
