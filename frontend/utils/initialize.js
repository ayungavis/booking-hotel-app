import Router from "next/router"

import { getStatus } from "../redux/actions/auth"
import { getCookie } from "../utils/cookie"

// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default function(ctx) {
	if (ctx.isServer) {
		if (ctx.req.headers.cookie) {
			ctx.store.dispatch(getStatus(getCookie("token", ctx.req)))
		}
	} else {
		const token = getCookie("token", ctx.req)

		if (token && (ctx.pathname === "/login" || ctx.pathname === "/register")) {
			setTimeout(function() {
				Router.push("/")
			}, 0)
		}
	}
}
