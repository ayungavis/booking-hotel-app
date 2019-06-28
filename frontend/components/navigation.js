import React, { Component } from "react"
import { Breadcrumb, Icon, Row, Col } from "antd"
import Link from "next/link"

class Navigation extends Component {
	render() {
		return (
			<Row justify='space-around' type='flex' style={{ marginTop: "20px" }}>
				<Col span={20}>
					<Breadcrumb>
						<Breadcrumb.Item href=''>
							<Icon type='home' />
						</Breadcrumb.Item>
						<Breadcrumb.Item href=''>
							<Icon type={this.props.icon} />
							<span>{this.props.text}</span>
						</Breadcrumb.Item>
					</Breadcrumb>
				</Col>
			</Row>
		)
	}
}

export default Navigation
