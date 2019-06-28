const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const hotel = (state = initialState, action) => {
	switch (action.type) {
		case "GET_HOTEL_PENDING":
			return { ...state, isLoading: true }

		case "GET_HOTEL_REJECTED":
			return { ...state, isLoading: false }

		case "GET_HOTEL_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "GET_HOTEL_INFO_PENDING":
			return { ...state, isLoading: true }

		case "GET_HOTEL_INFO_REJECTED":
			return { ...state, isLoading: false }

		case "GET_HOTEL_INFO_FULFILLED":
			return { ...state, item: action.payload.data, isLoading: false }

		case "CREATE_HOTEL_PENDING":
			return { ...state, isLoading: true }

		case "CREATE_HOTEL_REJECTED":
			return { ...state, isLoading: false }

		case "CREATE_HOTEL_FULFILLED":
			return { ...state, isLoading: false }

		case "UPDATE_HOTEL_PENDING":
			return { ...state, isLoading: true }

		case "UPDATE_HOTEL_REJECTED":
			return { ...state, isLoading: false }

		case "UPDATE_HOTEL_FULFILLED":
			return { ...state, isLoading: false }

		case "DELETE_HOTEL_PENDING":
			return { ...state, isLoading: true }

		case "DELETE_HOTEL_REJECTED":
			return { ...state, isLoading: false }

		case "DELETE_HOTEL_FULFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return { ...state, data: newDataAfterDelete, isLoading: false }

		default:
			return state
	}
}

export default hotel
