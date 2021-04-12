import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import MovieCard from '../components/MovieCard';
import axios from 'axios'
import { bindActionCreators } from 'redux';
import { getMovies } from '../redux/actions/movieAction'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const Home = ({ getMovies, movie }) => {
    useEffect(() => {
        // getMovies()
    }, [])
    return (
        <Container>
            <Row className="main-header">
                <Col className="image-overlay">
                    <div style={{ paddingLeft: '50px' }}>
                        <h1>Unlimited movies, <br/> TV shows, and more.</h1>
                        <h3>Rent today, Watch anywhere &amp; anytime.</h3>
                        <Link to="/register">
                            <Button variant="primary">
                                Register
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button variant="outline-primary">
                                Login
                            </Button>
                        </Link>
                    </div>
                </Col>
            </Row>

            <Row lg={5} md={4} sm={4} xs={4} style={{ margin: '1rem' }}>
                {   movie.movieList && movie.movieList.map((movie, key) => {
                        return <MovieCard movie={movie} key={key} />
                    })
                }
            </Row>

            <Row>
                <Col className="footer-column">
                    <div>
                        <h1>WATCH YOUR FAVORITE, <br/> Movies, TV shows, and more.</h1>
                        <h3>Anywhere &amp; anytime.</h3>
                    </div>
                </Col>
                <Col className="footer-column">
                    <Image width={500} src="https://image.freepik.com/free-photo/captivating-movie_1098-16213.jpg" />
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = ({ movie }) => ({ movie })

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getMovies }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
