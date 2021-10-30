import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';
import './Booking.css';
import { BsFillClockFill } from 'react-icons/bs';
const Booking = () => {
    const { _id } = useParams();
    const [service, setServcie] = useState({});
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    useEffect(() => {
        const url = `http://localhost:5000/services/${_id}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setServcie(data));
    }, []);
    return (
        <div>
            <Container>
                <Row className="py-5">
                    <Col lg={12}>
                        <h1 className="fw-bold fs-1 text-black text-center">
                            Place Your Order
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={service.img} />
                            <Card.Body>
                                <Card.Title>{service.name}</Card.Title>
                                <BsFillClockFill className="text-success" />
                                <span className="ms-2">{service.duration}</span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <form className="shipping-form" onSubmit={handleSubmit}>
                            <input
                                defaultValue={user.displayName}
                                {...register('name')}
                            />

                            <input
                                defaultValue={user.email}
                                {...register('email', { required: true })}
                            />
                            {errors.email && (
                                <span className="error">
                                    This field is required
                                </span>
                            )}
                            <input
                                placeholder="Address"
                                defaultValue=""
                                {...register('address')}
                            />
                            <input
                                placeholder="City"
                                defaultValue=""
                                {...register('city')}
                            />
                            <input
                                placeholder="phone number"
                                defaultValue=""
                                {...register('phone')}
                            />
                            <input
                                className="bg-primary text-white"
                                type="submit"
                            />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;
