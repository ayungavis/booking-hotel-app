import axios from "axios"

import server from "../../config/server"

export const getBooking = (token, url) => {
	return {
		type: "GET_BOOKING",
		payload: axios({
			method: "get",
			url: `${server.api}/bookings${url}`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const getBookingInfo = (id, token) => {
	return {
		type: "GET_BOOKING_INFO",
		payload: axios({
			method: "get",
			url: `${server.api}/bookings/${id}`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const createBooking = (token, body) => {
	return {
		type: "CREATE_BOOKING",
		payload: axios({
			method: "post",
			url: `${server.api}/bookings`,
			data: body,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const updateBooking = (id, token, body) => {
	return {
		type: "UPDATE_BOOKING",
		payload: axios({
			method: "put",
			url: `${server.api}/bookings/${id}`,
			data: body,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const deleteBooking = (id, token) => {
	return {
		type: "DELETE_BOOKING",
		payload: axios({
			method: "delete",
			url: `${server.api}/bookings/${id}`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}
