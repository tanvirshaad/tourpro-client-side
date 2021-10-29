import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    // from where we are coming(location.state.from)
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle().then((result) => {
            history.push(redirect_uri);
        });
    };
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
                            <button
                                onClick={handleGoogleLogin}
                                className="signIn-btn"
                            >
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
