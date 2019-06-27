import React from "react"
import { Layout, Row, Col } from "antd"
import Link from "next/link"

const Navbar = () => {
	const { Header } = Layout
	return (
		<Header>
			<Row justify='space-around' type='flex'>
				<Col span={20}>
					<Row justify='space-around' type='flex'>
						<Col span={12} md={12} xs={24}>
							<span>Booking Hotel</span>
						</Col>
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
								<Link href='/'>
									<a>Home</a>
								</Link>
							</div>
							<div style={{ width: "fit-content", margin: "auto 0px" }}>
								<Link href='/'>
									<a>Product</a>
								</Link>
							</div>
							<div style={{ width: "fit-content", margin: "auto 0px" }}>
								<Link href='/'>
									<a>About us</a>
								</Link>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</Header>
	)
}

export default Navbar
