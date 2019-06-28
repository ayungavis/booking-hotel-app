const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const room = (state = initialState, action) => {
	switch (action.type) {
		case "GET_ROOM_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "GET_ROOM_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "GET_ROOM_FULLFILLED":
			return Object.assign({}, state, { data: action.payload.data, isLoading: false })

		case "GET_ROOM_INFO_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "GET_ROOM_INFO_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "GET_ROOM_INFO_FULLFILLED":
			return Object.assign({}, state, { item: action.payload.data, isLoading: false })

		case "CREATE_ROOM_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "CREATE_ROOM_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "CREATE_ROOM_FULLFILLED":
			return Object.assign({}, state, { isLoading: false })

		case "UPDATE_ROOM_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "UPDATE_ROOM_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "UPDATE_ROOM_FULLFILLED":
			return Object.assign({}, state, { isLoading: false })

		case "DELETE_ROOM_PENDING":
			return Object.assign({}, state, { isLoading: true })

		case "DELETE_ROOM_REJECTED":
			return Object.assign({}, state, { isLoading: false })

		case "DELETE_ROOM_FULLFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return Object.assign({}, state, { data: newDataAfterDelete, isLoading: false })

		default:
			return state
	}
}

export default room
