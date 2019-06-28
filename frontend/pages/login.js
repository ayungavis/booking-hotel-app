import React, { Component } from "react"
import { Typography, Icon, Row, Col, Layout, Form, Input, Button } from "antd"
import { connect } from "react-redux"
import Link from "next/link"
import Router from "next/router"

import Navbar from "../components/navbar"
import Navigation from "../components/navigation"
import { postLogin } from "../redux/actions/auth"
import { setCookie } from "../utils/cookie"
import initialize from "../utils/initialize"

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: false,
			iconLoading: false
		}
	}

	static async getInitialProps(ctx) {
		await initialize(ctx)
	}

	enterLoading = () => {
		this.setState({ loading: true })
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				this.props
					.dispatch(
						postLogin({
							email: values.email,
							password: values.password
						})
					)
					.then(res => {
						setCookie("token", this.props.auth.data.token)
						Router.push("/")
					})
			}
		})
	}

	render() {
		const { Content } = Layout
		const { Title } = Typography
		const { getFieldDecorator } = this.props.form
		return (
			<Layout>
				<Navbar isLoggedIn={false} />
				<Navigation icon='user' text='Login' />
				<Row justify='center' type='flex'>
					<Col
						md={12}
						lg={6}
						style={{ paddingTop: "30px", paddingBottom: "30px", minHeight: "500px" }}
					>
						<Content>
							<Title>Login</Title>
							<br />
							<div>
								<Form onSubmit={this.handleSubmit} className='login-form'>
									<Form.Item>
										{getFieldDecorator("email", {
											rules: [
												{
													type: "email",
													message: "Please input a valid email!"
												},
												{
													required: true,
													message: "Please input your username!"
												}
											]
										})(
											<Input
												prefix={
													<Icon
														type='user'
														style={{ color: "rgba(0,0,0,.25)" }}
													/>
												}
												placeholder='Email'
											/>
										)}
									</Form.Item>
									<Form.Item>
										{getFieldDecorator("password", {
											rules: [
												{
													required: true,
													message: "Please input your Password!"
												}
											]
										})(
											<Input
												prefix={
													<Icon
														type='lock'
														style={{ color: "rgba(0,0,0,.25)" }}
													/>
												}
												type='password'
												placeholder='Password'
											/>
										)}
									</Form.Item>

									<Form.Item>
										<Row justify='end' type='flex'>
											{/* getFieldDecorator("remember", {
												valuePropName: "checked",
												initialValue: true
											})(<Checkbox>Remember me</Checkbox>) */}
											<Link href=''>
												<a className='login-form-forgot'>Forgot password</a>
											</Link>
										</Row>
										<Row>
											<Button
												type='primary'
												htmlType='submit'
												className='login-form-button'
												loading={this.state.loading}
												onClick={this.enterLoading}
												block
											>
												Log in
											</Button>
										</Row>
										<Row justify='center' type='flex'>
											<div>
												Or{" "}
												<Link href='/register'>
													<a>register now!</a>
												</Link>
											</div>
										</Row>
									</Form.Item>
								</Form>
							</div>
						</Content>
					</Col>
				</Row>
			</Layout>
		)
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	}
}

const WrappedLogin = Form.create()(Login)

export default connect(mapStateToProps)(WrappedLogin)
