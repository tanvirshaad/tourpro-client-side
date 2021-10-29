import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const Booking = () => {
    const { id } = useParams();
    const [service, setServcie] = useState({});
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    useEffect(() => {}, []);
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
                        <h2>This is service: {id}</h2>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        {/* <form
                            className="shipping-form"
                            onSubmit={handleSubmit(onSubmit)}
                        >
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
                            <input type="submit" />
                        </form> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;
