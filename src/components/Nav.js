
import React from 'react'
import { Button, Form, FormControl, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import Logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom'

const MainNav = ({ user }) => {
    return (
        <Navbar className="nav menu">
            <Navbar.Brand><Link to="/"><Button variant="link" ><img src={Logo} width={180} /></Button></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    <Link className="navLink" to="/"><Button variant="outline-primary">Home</Button></Link>
                    <Link className="navLink" to="/"><Button variant="outline-primary">Movies</Button></Link>
                    <Link className="navLink" to="/"><Button variant="outline-primary">Contact</Button></Link>
                    { user.userData ? <Link className="navLink" to="/account"><Button variant="outline-primary">Account</Button></Link> :
                    <><Link className="navLink" to="/"><Button variant="outline-primary">Login</Button></Link>
                    <Link className="navLink" to="/"><Button variant="outline-primary">Register</Button></Link></> }
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    )
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps, null)(MainNav)
