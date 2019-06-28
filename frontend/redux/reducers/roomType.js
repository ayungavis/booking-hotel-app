const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const roomType = (state = initialState, action) => {
	switch (action.type) {
		case "GET_ROOMTYPE_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "GET_ROOMTYPE_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "GET_ROOMTYPE_FULLFILLED":
			return Object.assign({}, state, { data: action.payload.data, isLoading: false })

		case "GET_ROOMTYPE_INFO_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "GET_ROOMTYPE_INFO_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "GET_ROOMTYPE_INFO_FULLFILLED":
			return Object.assign({}, state, { item: action.payload.data, isLoading: false })

		case "CREATE_ROOMTYPE_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "CREATE_ROOMTYPE_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "CREATE_ROOMTYPE_FULLFILLED":
			return Object.assign({}, state, { isLoading: false })

		case "UPDATE_ROOMTYPE_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "UPDATE_ROOMTYPE_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "UPDATE_ROOMTYPE_FULLFILLED":
			return Object.assign({}, state, { isLoading: false })

		case "DELETE_ROOMTYPE_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "DELETE_ROOMTYPE_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "DELETE_ROOMTYPE_FULLFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return Object.assign({}, state, { data: newDataAfterDelete, isLoading: false })

		default:
			return state
	}
}

export default roomType
