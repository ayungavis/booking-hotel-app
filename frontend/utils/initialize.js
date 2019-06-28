import Router from "next/router"
import axios from "axios"
import cookie from "js-cookie"

import server from "../config/server"

// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default function() {
	const token = cookie.get("token")
	if (token) {
		axios
			.get(`${server.api}/auth/check`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then(res => {
				if (res.data.error) {
					Router.push("/login")
				}
				Router.push("/dashboard")
			})
			.catch(err => {
				cookie.remove("token")
				Router.push("/login")
			})
	} else {
		Router.push("/login")
	}
}
