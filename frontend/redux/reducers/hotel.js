const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const hotel = (state = initialState, action) => {
	switch (action.type) {
		case "GET_HOTEL_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "GET_HOTEL_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "GET_HOTEL_FULLFILLED":
			return Object.assign({}, state, { data: action.payload.data, isLoading: false })

		case "GET_HOTEL_INFO_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "GET_HOTEL_INFO_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "GET_HOTEL_INFO_FULLFILLED":
			return Object.assign({}, state, { item: action.payload.data, isLoading: false })

		case "CREATE_HOTEL_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "CREATE_HOTEL_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "CREATE_HOTEL_FULLFILLED":
			return Object.assign({}, state, { isLoading: false })

		case "UPDATE_HOTEL_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "UPDATE_HOTEL_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "UPDATE_HOTEL_FULLFILLED":
			return Object.assign({}, state, { isLoading: false })

		case "DELETE_HOTEL_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "DELETE_HOTEL_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "DELETE_HOTEL_FULLFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return Object.assign({}, state, { data: newDataAfterDelete, isLoading: false })

		default:
			return state
	}
}

export default hotel
