import React, { Component } from "react"
import { Breadcrumb, Icon, Row, Col, Layout, Form, Input, Button, Checkbox } from "antd"
import { connect } from "react-redux"
import Link from "next/link"
import Router from "next/router"

import { postLogin } from "../redux/actions/auth"
import { setCookie } from "../utils/cookie"

import "../assets/less/style.less"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            token: ""
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props
                    .dispatch(
                        postRegister({
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
        const { Header, Content } = Layout
        const { getFieldDecorator } = this.props.form
        return (
            <Layout>
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
                <Row justify='space-around' type='flex' style={{ marginTop: "20px" }}>
                    <Col span={20}>
                        <Breadcrumb>
                            <Breadcrumb.Item href=''>
                                <Icon type='home' />
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href=''>
                                <Icon type='user' />
                                <span>Login</span>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row justify='center' type='flex'>
                    <Col
                        md={12}
                        lg={6}
                        style={{ paddingTop: "30px", paddingBottom: "30px", minHeight: "500px" }}
                    >
                        <Content>
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
                                        <Row>
                                            <Button
                                                type='primary'
                                                htmlType='submit'
                                                className='login-form-button'
                                                block
                                            >
                                                Sign up
											</Button>
                                        </Row>
                                        <Row justify='center' type='flex'>
                                            <div>
                                                Do you have an account?{" "}
                                                <Link href='/login'>
                                                    <a>login now!</a>
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
        user: state.auth
    }
}

const WrappedLogin = Form.create()(Login)

export default connect(mapStateToProps)(WrappedLogin)
