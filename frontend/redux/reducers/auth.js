const initialState = {
	data: [],
	isLogin: false,
	isLoading: false
}

const auth = (state = initialState, action) => {
	switch (action.type) {
		case "GET_STATUS_PENDING":
			return Object.assign({}, state, {
				isLoading: true,
				isLogin: false
			})

		case "GET_STATUS_REJECTED":
			return Object.assign({}, state, {
				isLoading: false,
				isLogin: false
			})

		case "GET_STATUS_FULFILLED":
			return Object.assign({}, state, {
				data: action.payload.data,
				isLoading: false,
				isLogin: true
			})

		case "POST_LOGIN_PENDING":
			return Object.assign({}, state, {
				isLoading: true,
				isLogin: false
			})

		case "POST_LOGIN_REJECTED":
			return Object.assign({}, state, {
				isLoading: false,
				isLogin: false
			})

		case "POST_LOGIN_FULFILLED":
			return Object.assign({}, state, {
				data: action.payload.data,
				isLoading: false,
				isLogin: true
			})

		case "POST_REGISTER_PENDING":
			return Object.assign({}, state, {
				isLoading: true,
				isLogin: false
			})

		case "POST_REGISTER_REJECTED":
			return Object.assign({}, state, {
				isLoading: false,
				isLogin: false
			})

		case "POST_REGISTER_FULFILLED":
			return Object.assign({}, state, {
				data: action.payload.data,
				isLoading: false,
				isLogin: true
			})

		default:
			return state
	}
}

export default auth
