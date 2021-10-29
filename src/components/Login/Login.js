import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';

const Login = () => {
    return (
        <div>
            <Container>
                <Row className="py-5">
                    <Col lg={12}>
                        <h1 className="fw-bold text-center text-black fs-1">
                            Please Login Here
                        </h1>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Col lg={12}>
                        <div>
                            <button className="signIn-btn">
                                Sign In With <FcGoogle />
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
