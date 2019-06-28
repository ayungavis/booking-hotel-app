import axios from "axios"

import server from "../../config/server"

export const getHotel = token => {
	return {
		type: "GET_HOTEL",
		payload: axios({
			method: "get",
			url: `${server.api}/hotels`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const getHotelInfo = (id, token) => {
	return {
		type: "GET_HOTEL_INFO",
		payload: axios({
			method: "get",
			url: `${server.api}/hotels/${id}`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const createHotel = (token, body) => {
	return {
		type: "CREATE_HOTEL",
		payload: axios({
			method: "post",
			url: `${server.api}/hotels`,
			data: body,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const updateHotel = (id, token, body) => {
	return {
		type: "UPDATE_HOTEL",
		payload: axios({
			method: "put",
			url: `${server.api}/hotels/${id}`,
			data: body,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const deleteHotel = (id, token) => {
	return {
		type: "DELETE_HOTEL",
		payload: axios({
			method: "delete",
			url: `${server.api}/hotels/${id}`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}
