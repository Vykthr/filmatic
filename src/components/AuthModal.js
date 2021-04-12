import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row, Tab, Tabs, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import userApi from '../redux/api/userApi';
import { login } from '../redux/actions/userAction'

const Auth = (props) => {
    const [key, setKey] = useState('login');
    const [ loading, setLoading ] = useState(false)
    const [ regForm, setRegForm ] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [ loginForm, setLoginForm ] = useState({
        email: '',
        password: '',
    })

    const changeRegValues = (e) => {
        setRegForm({ ...regForm, [e.target.name]: e.target.value})
    }

    const changeLoginValues = (e) => {
        setRegForm({ ...loginForm, [e.target.name]: e.target.value})
    }

    const register = async () => {
        const  { username, email, password, confirmPassword  } = regForm
        if( username && email && password && password === confirmPassword) {
            setLoading(true)
            try {
                const res = await userApi.register({ username, email, password})
                console.log(res)
                if(res.data) {
                    login({email, password})
                }
            }
            catch(err) {
                console.error(err)
            }
            finally {
                setLoading(false)
            }
        }
    }

    const login = async ({ email, password}) => {
        if( email && password) {
            setLoading(true)
            try {
                const res = await props.login({email, password})
                console.log(res)
            }
            catch(err) {
                console.error(err)
            }
            finally {
                setLoading(false)
                props.onHide()
            }
        }
    }

    return (
        <Modal
            onHide={props.onHide}
            size="md"
            show={props.show}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            onSelect={(k) => { setKey(k) } }
        >
            <Modal.Body>
                <Tabs defaultActiveKey={key} id="controlled-tab-example">
                    <Tab eventKey="login" title="Login">
                        <Form style={{ paddingTop: 30, paddingBottom: 30 }}>
                            <Form.Group>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="text" placeholder="Email Address"  name="email" onChange={(e) => changeLoginValues(e)} value={loginForm.email}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"  name="password" onChange={(e) => changeLoginValues(e)} value={loginForm.password} />
                            </Form.Group>
                        </Form>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={props.onHide}>Close</Button>
                            <Button onClick={() => login(loginForm) }>Login</Button>
                        </Modal.Footer>
                    </Tab>
                    <Tab eventKey="register" title="Register">
                        <Form style={{ paddingTop: 30, paddingBottom: 30 }}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Username" name="username" onChange={(e) => changeRegValues(e)} value={regForm.username} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="text" placeholder="Email Address" name="email" onChange={(e) => changeRegValues(e)} value={regForm.email}  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => changeRegValues(e)} value={regForm.password}  />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm Password"  name="confirmPassword" onChange={(e) => changeRegValues(e)} value={regForm.confirmPassword}  />
                            </Form.Group>
                        </Form>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={props.onHide}>Close</Button>
                            <Button onClick={() => register()}>{ loading ? <Spinner animation="border" size="sm" /> : 'Register'}</Button>
                        </Modal.Footer>
                    </Tab>
                </Tabs>
            </Modal.Body>
        </Modal>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ login }, dispatch)
}

export default connect(null, mapDispatchToProps )(Auth)
