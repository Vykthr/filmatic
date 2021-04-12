import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Form, Image, Modal, Row } from 'react-bootstrap';
import { useLocation, Link } from "react-router-dom";
import Rating from '../components/Rating';
import AuthModal from '../components/AuthModal';
import YouTube from 'react-youtube';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { rentMovie } from '../redux/actions/movieAction'

const MovieView = ({ user, movie, rentMovie }) => {
    const { state } = useLocation();
    const [ price, setPrice ] = useState(state.movie.price)
    const [ days, setDays ] = useState(3)
    const [modalShow, setModalShow] = useState(false);
    const [authModal, setAuthModal] = useState(false);

    const setDetails = (value) => {
        setDays(value)
    }

    const stock = movie.movieList.filter((movie) => movie.id == state.movie.id)[0]

    const rent = async () => {
        const res = await rentMovie(user.userData.id, state.movie.id, movie.movieList)
        if(res) {
            setModalShow(false)
        }
    }

    useEffect(() => {
        setPrice(days === 3 ? state.movie.price : state.movie.price + (1000 * (days-3)))
    }, [days])
    return (
        <Container style={{ marginTop: '40px', padding: '100px' }}>
            <Row>
                <Col style={{ display: 'flex', justifyContent: 'center' }}>
                    <Image height="600px" src={state.movie.img} />
                </Col>
                <Col>
                    <div>
                        <h1>{state.movie.title}</h1>
                        <p>{state.movie.description}</p>
                        <p>Price: &#8358;{price.toLocaleString('en-Gb')}</p>
                        <p>Stock: {stock.stock - stock.rentedTo.length}</p>
                        <Rating rate={state.movie.rating} />
                        <Form style={{ marginTop: '1rem' }}>
                            <Form.Group>
                                <Form.Label>Renting for:</Form.Label>
                                <Form.Control as="select" value={days} onChange={(e) => { setDetails(e.target.value)}}>
                                    {[...new Array(19)].map((num, key) => {
                                        return <option value={key+3} key={key}>{key + 3} Days</option>
                                    })}
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        {
                            movie.movieList.filter((movie) => movie.id === state.movie.id)[0]?.rentedTo.indexOf(user.userData.id) > -1 ? 
                            <Link to="/account"><Button>You have rented this movie, visit account to to watch </Button></Link> :
                            stock > 0 ? <Button onClick={() => { user.userData ? setModalShow(true) : setAuthModal(true) }}>Proceed - &#8358;{price.toLocaleString('en-Gb')}</Button> :
                            <Button>Out of Stock - check back later</Button>
                        }
                    </div>
                </Col>
            </Row>
            <Container style={{ padding: '30px', marginTop: '50px' }}>
               { state.movie.trailer && <YouTube videoId={state.movie.trailer} opts={{ width: '100%', height: '500px' }} /> }
            </Container>

            <PaymentModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                price={price}
                rent={() => rent()}
            />

            { authModal && <AuthModal show={authModal} onHide={() => setAuthModal(false)} /> }
        </Container>
    )
}

const PaymentModal = (props) => {
    return (
        <Modal
        show={props.show}
        onHide={props.onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Card Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control type="text" placeholder="0000 0000 0000 0000" />
                </Form.Group>
                <Row>
                    <Col> 
                        <Form.Group>
                            <Form.Label>Card Expiry</Form.Label>
                            <Form.Control type="text" placeholder="MM/YY" />
                        </Form.Group>
                    </Col>
                    <Col> 
                        <Form.Group>
                            <Form.Label>CVC</Form.Label>
                            <Form.Control type="text" placeholder="123" />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>Close</Button>
          <Button onClick={props.rent}>Pay Now - &#8358;{props.price.toLocaleString('en-Gb')}</Button>
        </Modal.Footer>
      </Modal>
    )
}

const mapStateToProps = ({ user, movie }) => ({ user, movie })

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ rentMovie }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieView)
