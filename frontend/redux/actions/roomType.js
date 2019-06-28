import axios from "axios"

import server from "../../config/server"

export const getRoomType = token => {
	return {
		type: "GET_ROOMTYPE",
		payload: axios({
			method: "get",
			url: `${server.api}/room-types`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const getRoomTypeInfo = (id, token) => {
	return {
		type: "GET_ROOMTYPE_INFO",
		payload: axios({
			method: "get",
			url: `${server.api}/room-types/${id}`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const createRoomType = (token, body) => {
	return {
		type: "CREATE_ROOMTYPE",
		payload: axios({
			method: "post",
			url: `${server.api}/room-types`,
			data: body,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const updateRoomType = (id, token, body) => {
	return {
		type: "UPDATE_ROOMTYPE",
		payload: axios({
			method: "put",
			url: `${server.api}/room-types/${id}`,
			data: body,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const deleteRoomType = (id, token) => {
	return {
		type: "DELETE_ROOMTYPE",
		payload: axios({
			method: "delete",
			url: `${server.api}/room-types/${id}`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}
