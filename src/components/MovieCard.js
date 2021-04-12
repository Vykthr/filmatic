import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import Rating from './Rating'
import { createBrowserHistory} from 'history';
import { Link } from "react-router-dom";

const movieCard = ({ movie }) => {
    const history = createBrowserHistory();
    const viewMovie = (movie) => {
        history.push('/movie='+movie.id)
    }
    return (
        <Col style={{ marginBottom: 30 }}>
            <Card style={{ padding: '10px', backgroundColor: 'transparent' }} className="movie-card">
                <Card.Img variant="top" src={movie.img} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text> */}
                    <Card.Text style={{ margin: 0 }}>{movie.duration}</Card.Text>
                    <Card.Text style={{ margin: 0 }}><Rating rate={movie.rating} /></Card.Text>
                    <Link  to={{ pathname: `/movie/${movie.title.replace(/\s+/g, '-').toLowerCase()}`, state: { movie } }}>
                        <Button style={{ width: '100%', marginLeft: 0, marginRight: 0 }} variant="outline-primary">Watch</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default movieCard
