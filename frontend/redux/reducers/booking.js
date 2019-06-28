const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const booking = (state = initialState, action) => {
	switch (action.type) {
		case "GET_BOOKING_PENDING":
			return { ...state, isLoading: true }

		case "GET_BOOKING_REJECTED":
			return { ...state, isLoading: false }

		case "GET_BOOKING_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "GET_BOOKING_INFO_PENDING":
			return { ...state, isLoading: true }

		case "GET_BOOKING_INFO_REJECTED":
			return { ...state, isLoading: false }

		case "GET_BOOKING_INFO_FULFILLED":
			return { ...state, item: action.payload.data, isLoading: false }

		case "CREATE_BOOKING_PENDING":
			return { ...state, isLoading: true }

		case "CREATE_BOOKING_REJECTED":
			return { ...state, isLoading: false }

		case "CREATE_BOOKING_FULFILLED":
			return { ...state, isLoading: false }

		case "UPDATE_BOOKING_PENDING":
			return { ...state, isLoading: true }

		case "UPDATE_BOOKING_REJECTED":
			return { ...state, isLoading: false }

		case "UPDATE_BOOKING_FULFILLED":
			return { ...state, isLoading: false }

		case "DELETE_BOOKING_PENDING":
			return { ...state, isLoading: true }

		case "DELETE_BOOKING_REJECTED":
			return { ...state, isLoading: false }

		case "DELETE_BOOKING_FULFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return { ...state, data: newDataAfterDelete, isLoading: false }

		default:
			return state
	}
}

export default booking
