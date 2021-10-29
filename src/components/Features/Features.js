import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Features = () => {
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        <h1 className="text-center fw-bold fs-1 text-black">
                            Why You'll Travel With Us
                        </h1>
                    </Col>
                </Row>
                <Row className="py-5">
                    <Col lg={4} md={6} sm={12}>
                        <div
                            className="h-100"
                            style={{
                                backgroundColor: '#0d6efd7a',
                                textAlign: 'center',
                                padding: '20px',
                                borderRadius: '20px',
                            }}
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4185/4185509.png"
                                className="img-fluid"
                                style={{ width: '200px', color: 'white' }}
                                alt=""
                            />
                            <h3 className="mt-3">100% trusted travel agency</h3>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div
                            className="h-100"
                            style={{
                                backgroundColor: '#0d6efd7a',
                                textAlign: 'center',
                                padding: '20px',
                                borderRadius: '20px',
                            }}
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3284/3284607.png"
                                className="img-fluid"
                                style={{ width: '200px', color: 'white' }}
                                alt=""
                            />
                            <h3 className="mt-3">Best Tour Guide</h3>
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div
                            className="h-100"
                            style={{
                                backgroundColor: '#0d6efd7a',
                                textAlign: 'center',
                                padding: '20px',
                                borderRadius: '20px',
                            }}
                        >
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/4185/4185758.png"
                                className="img-fluid"
                                style={{ width: '200px', color: 'white' }}
                                alt=""
                            />
                            <h3 className="mt-3">10+ years of experience</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Features;
