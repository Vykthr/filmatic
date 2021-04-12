import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.png';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ padding: 50 }}>
            <Row style={{ padding: 50}} className="footer">
                <Col className="footer-column">
                    <Link to="/"><Image width={300} src="https://mynollyapp.com/assets/images/play-store.png" /></Link>
                </Col>
                <Col className="footer-column">
                    <Link to="/"><Image width={300} src="https://mynollyapp.com/assets/images/apple-store.png" /></Link>
                </Col>
            </Row>
            <Row className="footer" style={{ paddingTop: 50 }}>
                <Col className="footer-column">
                    <div style={{ textAlign: 'center' }}>
                        <Image width={200} src={Logo} />
                        <p>Watch Anywhere &amp; Anytime.</p>
                    </div>
                </Col>
                <Col>
                    <ul className="footerLinkGroup">
                        <h4>Account</h4>
                        <li className="footerLink"><Link className="footerLink" to="/">Account</Link></li>
                        <li className="footerLink"><Link className="footerLink" to="/">Register</Link></li>
                        <li className="footerLink"><Link className="footerLink" to="/">Login</Link></li>
                    </ul>
                </Col>
                <Col>
                    <ul className="footerLinkGroup">
                        <h4>Company</h4>
                        <li className="footerLink"><Link className="footerLink" to="/">Movies</Link></li>
                        <li className="footerLink"><Link className="footerLink" to="/">FAQ</Link></li>
                        <li className="footerLink"><Link className="footerLink" to="/">Privacy Policy</Link></li>
                    </ul>
                </Col>
                <Col>
                    <ul className="footerLinkGroup">
                        <h4>Socials</h4>
                        <Row>
                            <Link className="footerLink social" to="/"><FaFacebook /></Link>
                            <Link className="footerLink social" to="/"><FaTwitter /></Link>
                            <Link className="footerLink social" to="/"><FaInstagram /></Link>
                            <Link className="footerLink social" to="/"><FaYoutube /></Link>
                        </Row>
                    </ul>
                </Col>
            </Row>
        </footer>
    )
}

export default Footer

