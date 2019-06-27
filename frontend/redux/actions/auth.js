import axios from "axios"

import server from "../../config/server"

export const getStatus = token => {
	return {
		type: "GET_STATUS",
		payload: axios({
			method: "get",
			url: `${server.api}/auth/check`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const postLogin = body => {
	return {
		type: "POST_LOGIN",
		payload: axios({
			method: "post",
			url: `${server.api}/auth/login`,
			data: body
		})
	}
}

export const postRegister = body => {
	return {
		type: "POST_REGISTER",
		payload: axios({
			method: "post",
			url: `${server.api}/auth/register`,
			data: body
		})
	}
}
