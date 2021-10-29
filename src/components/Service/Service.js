import React from 'react';
import { Button, ButtonGroup, Card, Col } from 'react-bootstrap';
import { BsFillClockFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, description, duration, price, id } = service;
    return (
        <div className="col-lg-4 g-4">
            <Card className="h-100">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-black fw-bold">
                        Explore {name}
                    </Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <div className="text-success fw-bold d-flex align-items-center">
                        <BsFillClockFill />
                        <span className="ms-2">{duration}</span>
                    </div>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Link to={`/booking/${id}`}>
                        <Button variant="primary">
                            Book Now For {price}{' '}
                            <span className="fw-bolder">৳</span>
                        </Button>
                    </Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;
