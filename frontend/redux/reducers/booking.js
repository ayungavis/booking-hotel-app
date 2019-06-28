const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const booking = (state = initialState, action) => {
	switch (action.type) {
		case "GET_BOOKING_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "GET_BOOKING_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "GET_BOOKING_FULLFILLED":
			return Object.assign({}, state, { data: action.payload.data, isLoading: false })

		case "GET_BOOKING_INFO_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "GET_BOOKING_INFO_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "GET_BOOKING_INFO_FULLFILLED":
			return Object.assign({}, state, { item: action.payload.data, isLoading: false })

		case "CREATE_BOOKING_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "CREATE_BOOKING_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "CREATE_BOOKING_FULLFILLED":
			return Object.assign({}, state, { isLoading: false })

		case "UPDATE_BOOKING_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "UPDATE_BOOKING_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "UPDATE_BOOKING_FULLFILLED":
			return Object.assign({}, state, { isLoading: false })

		case "DELETE_BOOKING_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "DELETE_BOOKING_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "DELETE_BOOKING_FULLFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return Object.assign({}, state, { data: newDataAfterDelete, isLoading: false })

		default:
			return state
	}
}

export default booking
