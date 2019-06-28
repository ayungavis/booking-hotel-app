import React, { Component } from "react"
import { Layout, Row, Col } from "antd"
import { connect } from "react-redux"

import Navbar from "../components/navbar"
import Navigation from "../components/navigation"

class Dashboard extends Component {
	constructor() {
		super()
	}

	render() {
		const { Content } = Layout
		return (
			<Layout>
				<Navbar isLoggedIn={true} />
				<Navigation icon='user' text='Dashboard' />
				<Row justify='space-around' type='flex'>
					<p>Hello, world!</p>
				</Row>
			</Layout>
		)
	}
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps)(Dashboard)
