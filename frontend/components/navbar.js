import React, { Component } from "react"
import { Layout, Row, Col } from "antd"
import Link from "next/link"
import cookie from "js-cookie"

class Navbar extends Component {
	handleLogout = () => {
		cookie.remove("token")
		Router.push("/")
	}

	render() {
		const { Header } = Layout
		return (
			<Header>
				<Row justify='space-around' type='flex'>
					<Col span={20}>
						<Row justify='space-around' type='flex'>
							<Col span={12} md={12} xs={24}>
								<Link href='/'>
									<a>Booking Hotel</a>
								</Link>
							</Col>
							{this.props.isLoggedIn ? (
								<Col
									span={12}
									md={12}
									xs={0}
									style={{
										textAlign: "right",
										height: 50,
										display: "flex",
										justifyContent: "flex-end",
										textTransform: "uppercase"
									}}
								>
									<div style={{ width: "fit-content", margin: "auto 0px" }}>
										<Link href='/dashboard'>
											<a>Dashboard</a>
										</Link>
									</div>
									<div style={{ width: "fit-content", margin: "auto 0px" }}>
										<Link href='/dashboard'>
											<a>Rooms</a>
										</Link>
									</div>
									<div style={{ width: "fit-content", margin: "auto 0px" }}>
										<Link href='/dashboard'>
											<a>Bookings</a>
										</Link>
									</div>
									<div style={{ width: "fit-content", margin: "auto 0px" }}>
										<Link href='/'>
											<a onClick={this.handleLogout}>Logout</a>
										</Link>
									</div>
								</Col>
							) : (
								<Col
									span={12}
									md={12}
									xs={0}
									style={{
										textAlign: "right",
										height: 50,
										display: "flex",
										justifyContent: "flex-end",
										textTransform: "uppercase"
									}}
								>
									<div style={{ width: "fit-content", margin: "auto 0px" }}>
										<Link href='/login'>
											<a>Login</a>
										</Link>
									</div>
								</Col>
							)}
						</Row>
					</Col>
				</Row>
			</Header>
		)
	}
}

export default Navbar
