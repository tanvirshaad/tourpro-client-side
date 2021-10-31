import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch('https://macabre-warlock-05384.herokuapp.com/services')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
    if (isLoading) {
        return (
            <center>
                <Spinner animation="border" variant="primary" />
            </center>
        );
    }
    return (
        <div className="my-5">
            <Container>
                <Row className="text-center">
                    <Col lg={12}>
                        <h1 className="fs-1 fw-bold text-black">
                            Our Services
                        </h1>
                        <p>To Make You Happy</p>
                    </Col>
                </Row>
                <Row>
                    {services.map((service) => (
                        <Service key={service.id} service={service}></Service>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Services;
