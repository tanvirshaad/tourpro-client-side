import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);
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
