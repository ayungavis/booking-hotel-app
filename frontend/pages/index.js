import React, { Component } from "react"
import { Layout } from "antd"
import { connect } from "react-redux"

import initialize from "../utils/initialize"

class Index extends Component {
	constructor() {
		super()
		this.state = {
			isLoading: true
		}
	}

	async componentDidMount() {
		initialize()
	}

	render() {
		return (
			<Layout>
				{this.state.isLoading ? (
					<div className='lds-ellipsis'>
						<div />
						<div />
						<div />
						<div />
					</div>
				) : (
					<div />
				)}
			</Layout>
		)
	}
}

const mapStateToProps = state => {
	return {}
}

export default connect(mapStateToProps)(Index)
