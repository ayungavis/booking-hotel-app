import axios from "axios"

import server from "../../config/server"

export const getPriceList = token => {
	return {
		type: "GET_PRICELIST",
		payload: axios({
			method: "get",
			url: `${server.api}/price-lists`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const getPriceListInfo = (id, token) => {
	return {
		type: "GET_PRICELIST_INFO",
		payload: axios({
			method: "get",
			url: `${server.api}/price-lists/${id}`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const createPriceList = (token, body) => {
	return {
		type: "CREATE_PRICELIST",
		payload: axios({
			method: "post",
			url: `${server.api}/price-lists`,
			data: body,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const updatePriceList = (id, token, body) => {
	return {
		type: "UPDATE_PRICELIST",
		payload: axios({
			method: "put",
			url: `${server.api}/price-lists/${id}`,
			data: body,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}

export const deletePriceList = (id, token) => {
	return {
		type: "DELETE_PRICELIST",
		payload: axios({
			method: "delete",
			url: `${server.api}/price-lists/${id}`,
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}
}
