import React from "react"
import { Breadcrumb, Icon, Row, Col } from "antd"
import Link from "next/link"

const Navigation = () => (
	<Row justify='space-around' type='flex' style={{ marginTop: "20px" }}>
		<Col span={20}>
			<Breadcrumb>
				<Breadcrumb.Item href=''>
					<Icon type='home' />
				</Breadcrumb.Item>
				<Breadcrumb.Item href=''>
					<Icon type='user' />
					<span>Home</span>
				</Breadcrumb.Item>
			</Breadcrumb>
		</Col>
	</Row>
)

export default Navigation
