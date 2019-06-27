import React, { Component } from "react"
import { Icon, Row, Col, Layout, Card, Carousel } from "antd"
import Link from "next/link"
import Router from "next/router"
import { connect } from "react-redux"
import axios from "axios"
import cookie from "js-cookie"

import Navbar from "../components/navbar"
import Navigation from "../components/breadcrumb"
import server from "../config/server"

import "../assets/less/style.less"

class Index extends Component {
	constructor() {
		super()
		this.state = {
			test: []
		}
	}

	static async getInitialProps(ctx) {
		// initialize(ctx)
		const token = cookie.get("token")
		if (token) {
			const response = await axios
				.get(`${server.api}/auth/check`, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				})
				.then(res => {
					// if (res.error == "token_expired") {
					Router.push("/login")
				})
				.catch(err => {
					Router.push("/login")
				})
		}
	}

	componentDidMount() {
		const token = cookie.get("token")
		if (token) {
			axios
				.get(`${server.api}/auth/check`, {
					headers: {
						Authorization: `Bearer ${token}`
					}
				})
				.then(res => {
					if (res.data.error) {
						Router.push("/login")
					}
					this.setState({ test: res.data.user })
					console.log(res)
				})
				.catch(err => {
					Router.push("/login")
				})
		}
	}

	render() {
		const { Content } = Layout
		return (
			<Layout>
				<Navbar />
				<Navigation />
				<Row justify='space-around' type='flex'>
					<Col
						span={20}
						style={{ paddingTop: "30px", paddingBottom: "30px", minHeight: "500px" }}
					>
						<Content>
							<div>
								<Carousel autoplay>
									<div>
										<h3>
											<img src='/static/images/big-images.jpg' />
										</h3>
									</div>
									<div>
										<h3>
											<img src='/static/images/big-images-2.jpg' />
										</h3>
									</div>
									<div>
										<h3>
											<img src='/static/images/big-images-3.jpg' />
										</h3>
									</div>
								</Carousel>
							</div>
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
											title='Menu 1'
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
			</Layout>
		)
	}
}

const mapStateToProps = state => {
	return {
		auth: state.data
	}
}

export default connect(mapStateToProps)(Index)
