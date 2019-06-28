const initialState = {
	data: [],
	item: {},
	isLoading: false
}

const priceList = (state = initialState, action) => {
	switch (action.type) {
		case "GET_PRICELIST_PENDING":
			return { ...state, isLoading: true }

		case "GET_PRICELIST_REJECTED":
			return { ...state, isLoading: false }

		case "GET_PRICELIST_FULFILLED":
			return { ...state, data: action.payload.data, isLoading: false }

		case "GET_PRICELIST_INFO_PENDING":
			return { ...state, isLoading: true }

		case "GET_PRICELIST_INFO_REJECTED":
			return { ...state, isLoading: false }

		case "GET_PRICELIST_INFO_FULFILLED":
			return { ...state, item: action.payload.data, isLoading: false }

		case "CREATE_PRICELIST_PENDING":
			return { ...state, isLoading: true }

		case "CREATE_PRICELIST_REJECTED":
			return { ...state, isLoading: false }

		case "CREATE_PRICELIST_FULFILLED":
			return { ...state, isLoading: false }

		case "UPDATE_PRICELIST_PENDING":
			return { ...state, isLoading: true }

		case "UPDATE_PRICELIST_REJECTED":
			return { ...state, isLoading: false }

		case "UPDATE_PRICELIST_FULFILLED":
			return { ...state, isLoading: false }

		case "DELETE_PRICELIST_PENDING":
			return { ...state, isLoading: true }

		case "DELETE_PRICELIST_REJECTED":
			return { ...state, isLoading: false }

		case "DELETE_PRICELIST_FULFILLED":
			const newDataAfterDelete = state.data.data.filter(
				data => data.id != action.payload.data.id
			)
			return { ...state, data: newDataAfterDelete, isLoading: false }

		default:
			return state
	}
}

export default priceList
