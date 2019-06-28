const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const roomType = (state = initialState, action) => {
	switch (action.type) {
		case "GET_ROOMTYPE_PENDING":
			return { ...state, isLoading: true }

		case "GET_ROOMTYPE_REJECTED":
			return { ...state, isLoading: false }

		case "GET_ROOMTYPE_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "GET_ROOMTYPE_INFO_PENDING":
			return { ...state, isLoading: true }

		case "GET_ROOMTYPE_INFO_REJECTED":
			return { ...state, isLoading: false }

		case "GET_ROOMTYPE_INFO_FULFILLED":
			return { ...state, item: action.payload.data, isLoading: false }

		case "CREATE_ROOMTYPE_PENDING":
			return { ...state, isLoading: true }

		case "CREATE_ROOMTYPE_REJECTED":
			return { ...state, isLoading: false }

		case "CREATE_ROOMTYPE_FULFILLED":
			return { ...state, isLoading: false }

		case "UPDATE_ROOMTYPE_PENDING":
			return { ...state, isLoading: true }

		case "UPDATE_ROOMTYPE_REJECTED":
			return { ...state, isLoading: false }

		case "UPDATE_ROOMTYPE_FULFILLED":
			return { ...state, isLoading: false }

		case "DELETE_ROOMTYPE_PENDING":
			return { ...state, isLoading: true }

		case "DELETE_ROOMTYPE_REJECTED":
			return { ...state, isLoading: false }

		case "DELETE_ROOMTYPE_FULFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return { ...state, data: newDataAfterDelete, isLoading: false }

		default:
			return state
	}
}

export default roomType
