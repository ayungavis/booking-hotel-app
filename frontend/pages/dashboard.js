import React, { Component } from "react"
import { Layout, Typography, Row, Col, Card } from "antd"
import { connect } from "react-redux"

import Navbar from "../components/navbar"
import Navigation from "../components/navigation"

class Dashboard extends Component {
	constructor() {
		super()
	}

	render() {
		const { Content } = Layout
		const { Title, Text } = Typography
		return (
			<Layout>
				<Navbar isLoggedIn={true} />
				<Navigation icon='user' text='Dashboard' />
				<Row justify='space-around' type='flex'>
					<Col
						span={20}
						style={{ paddingTop: "30px", paddingBottom: "30px", minHeight: "500px" }}
					>
						<Title>Dashboard</Title>
						<Content>
							<Row gutter={16}>
								<Col span={6} md={6} sm={12} xs={24}>
									<Card
										hoverable
										cover={
											<img
												alt='image1'
												style={{ width: "100%" }}
												src='/static/images/burger1.jpg'
											/>
										}
									>
										<Card.Meta
											title=''
											description='burger with patty and cheese'
										/>
									</Card>
								</Col>
								<Col span={6} md={6} sm={12} xs={24}>
									<Card
										hoverable
										cover={
											<img
												alt='image2'
												style={{ width: "100%" }}
												src='/static/images/burger2.jpg'
											/>
										}
									>
										<Card.Meta
											title='Menu 2'
											description='burger on white ceramic plate'
										/>
									</Card>
								</Col>
								<Col span={6} md={6} sm={12} xs={24}>
									<Card
										hoverable
										cover={
											<img
												alt='image3'
												style={{ width: "100%" }}
												src='/static/images/burger3.jpg'
											/>
										}
									>
										<Card.Meta
											title='Menu 3'
											description='burger with tomato and onion'
										/>
									</Card>
								</Col>
								<Col span={6} md={6} sm={12} xs={24}>
									<Card
										hoverable
										cover={
											<img
												alt='image4'
												style={{ width: "100%" }}
												src='/static/images/burger4.jpg'
											/>
										}
									>
										<Card.Meta
											title='Menu 4'
											description='burger with vegetables'
										/>
									</Card>
								</Col>
							</Row>
						</Content>
					</Col>
				</Row>
			</Layout>
		)
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth,
		hotels: state.hotels,
		priceLists: state.priceLists,
		roomTypes: state.roomTypes,
		bookings: state.bookings
	}
}

export default connect(mapStateToProps)(Dashboard)
