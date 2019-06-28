const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const room = (state = initialState, action) => {
	switch (action.type) {
		case "GET_ROOM_PENDING":
			return { ...state, isLoading: true }

		case "GET_ROOM_REJECTED":
			return { ...state, isLoading: false }

		case "GET_ROOM_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "GET_ROOM_INFO_PENDING":
			return { ...state, isLoading: true }

		case "GET_ROOM_INFO_REJECTED":
			return { ...state, isLoading: false }

		case "GET_ROOM_INFO_FULFILLED":
			return { ...state, item: action.payload.data, isLoading: false }

		case "CREATE_ROOM_PENDING":
			return { ...state, isLoading: true }

		case "CREATE_ROOM_REJECTED":
			return { ...state, isLoading: false }

		case "CREATE_ROOM_FULFILLED":
			return { ...state, isLoading: false }

		case "UPDATE_ROOM_PENDING":
			return { ...state, isLoading: true }

		case "UPDATE_ROOM_REJECTED":
			return { ...state, isLoading: false }

		case "UPDATE_ROOM_FULFILLED":
			return { ...state, isLoading: false }

		case "DELETE_ROOM_PENDING":
			return { ...state, isLoading: true }

		case "DELETE_ROOM_REJECTED":
			return { ...state, isLoading: false }

		case "DELETE_ROOM_FULFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return { ...state, data: newDataAfterDelete, isLoading: false }

		default:
			return state
	}
}

export default room
