import { getStatus } from "../redux/actions/auth"

// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default function(ctx) {
	if (ctx.req) {
		const token = ctx.req.headers.cookie
		if (token) {
			if (ctx.pathname == "/login" || ctx.pathname == "/register") {
				ctx.res.writeHead(302, {
					Location: "/"
				})
				ctx.res.end()
			} else {
				const action = getStatus(token.split("=")[1])
				return action.payload
					.then(payload => {
						return { user: payload.data }
					})
					.catch(err => {
						ctx.res.writeHead(302, {
							Location: "/login"
						})
						ctx.res.end()
					})
			}
		} else {
			ctx.res.writeHead(302, {
				Location: "/login"
			})
			ctx.res.end()
		}
	}
}
