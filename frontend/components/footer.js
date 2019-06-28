import React from "react"
import { Row, Col } from "antd"

const Footer = () => {
	return (
		<Row justify='space-around' type='flex' style={{ background: "#f9f9f9" }}>
			<Col md={8} xs={20} style={{ height: "40px", display: "flex" }}>
				<div style={{ margin: "auto 0px" }}>&copy; 2019 Booking Hotel</div>
			</Col>
			<Col md={8} xs={20}>
				<div
					style={{
						margin: "auto",
						height: "40px",
						display: "flex",
						justifyContent: "flex-end"
					}}
				>
					<Icon style={{ margin: "auto 10px", fontSize: 20 }} type='facebook' />
					<Icon style={{ margin: "auto 10px", fontSize: 20 }} type='instagram' />
					<Icon style={{ margin: "auto 10px", fontSize: 20 }} type='google' />
				</div>
			</Col>
		</Row>
	)
}

export default Footer
