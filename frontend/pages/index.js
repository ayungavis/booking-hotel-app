import React, { Component } from "react"
import { Layout, Typography, Row, Col, Card, Table, Divider, Tag } from "antd"
import { connect } from "react-redux"
import cookie from "js-cookie"

import Navbar from "../components/navbar"
import Navigation from "../components/navigation"
import initialize from "../utils/initialize"
import { getHotel } from "../redux/actions/hotel"
import { getBooking } from "../redux/actions/booking"
import { getRoom } from "../redux/actions/room"
import { getRoomType } from "../redux/actions/roomType"

import "../assets/less/style.less"

class Index extends Component {
	constructor() {
		super()
		this.state = {
			isLoggedIn: false,
			token: cookie.get("token")
		}
	}

	static async getInitialProps(ctx) {
		await initialize(ctx)
	}

	componentWillMount() {
		this.getHotel()
		this.getBooking()
		this.getRoom()
		this.getRoomType()
	}

	getHotel() {
		this.props.dispatch(getHotel(this.state.token, ""))
	}

	getBooking() {
		this.props.dispatch(getBooking(this.state.token, ""))
	}

	getRoom() {
		this.props.dispatch(getRoom(this.state.token, ""))
	}

	getRoomType() {
		this.props.dispatch(getRoomType(this.state.token, ""))
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
												src='/static/images/hotel-1.jpg'
											/>
										}
									>
										<Card.Meta
											title={`${this.props.hotel.data.length} Hotels`}
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
												src='/static/images/hotel-2.jpg'
											/>
										}
									>
										<Card.Meta
											title={`${this.props.room.data.length} Rooms`}
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
												src='/static/images/hotel-3.jpg'
											/>
										}
									>
										<Card.Meta
											title={`${this.props.roomType.data.length} Room Types`}
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
												src='/static/images/hotel-4.jpg'
											/>
										}
									>
										<Card.Meta
											title={`${this.props.booking.data.length} Bookings`}
											description='burger with vegetables'
										/>
									</Card>
								</Col>
							</Row>
						</Content>

						{/* <Row gutter={24} style={{ marginTop: "30px" }}>
							<Col span={12} md={12}>
								<Title level={3}>List of Hotels</Title>
								<Card />
							</Col>
							<Col span={12} md={12}>
								<Title level={3}>List of Bookings</Title>
							</Col>
						</Row> */}
					</Col>
				</Row>
			</Layout>
		)
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth,
		booking: state.booking,
		hotel: state.hotel,
		priceList: state.priceList,
		room: state.room,
		roomType: state.roomType
	}
}

export default connect(mapStateToProps)(Index)
