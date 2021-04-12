import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import MovieCard from '../components/MovieCard'

const Account = ({ movie, user }) => {
    console.log(movie)
    return (
        <Container style={{ marginTop: 100}}>
            <h1>Available Movies</h1>
            <Row lg={5} md={4} sm={4} xs={4} style={{ margin: '1rem' }}>
                {
                    movie.movieList.filter(({rentedTo})=> rentedTo.indexOf(user.userData.id) > -1).map((movie) => { return <MovieCard movie={movie} />})
                }
            </Row>
        </Container>
    )
}

const mapStateToProps = ({ movie, user }) => ({ movie, user })

export default connect(mapStateToProps, null)(Account)
