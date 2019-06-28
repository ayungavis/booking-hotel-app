import axios from "axios"

import server from "../../config/server"

export const getRoom = token => {
	return {
		type: "GET_ROOM",
		payload: axios({
			method: "get",
			url: `${server.api}/rooms`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const getRoomInfo = (id, token) => {
	return {
		type: "GET_ROOM_INFO",
		payload: axios({
			method: "get",
			url: `${server.api}/rooms/${id}`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const createRoom = (token, body) => {
	return {
		type: "CREATE_ROOM",
		payload: axios({
			method: "post",
			url: `${server.api}/rooms`,
			data: body,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const updateRoom = (id, token, body) => {
	return {
		type: "UPDATE_ROOM",
		payload: axios({
			method: "put",
			url: `${server.api}/rooms/${id}`,
			data: body,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const deleteRoom = (id, token) => {
	return {
		type: "DELETE_ROOM",
		payload: axios({
			method: "delete",
			url: `${server.api}/rooms/${id}`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}
