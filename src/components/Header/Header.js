import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">TourPro</Navbar.Brand>
                    <Nav className="ms-auto">
                        <div className="d-flex">
                            <div>
                                <Link
                                    to="/home"
                                    style={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        marginRight: '10px',
                                    }}
                                >
                                    Home
                                </Link>
                                <Link
                                    style={{
                                        color: 'white',
                                        textDecoration: 'none',
                                        marginRight: '10px',
                                    }}
                                    to="#pricing"
                                >
                                    Pricing
                                </Link>
                            </div>
                            <div>
                                {user?.email ? (
                                    <Button onClick={logOut} variant="light">
                                        Logout
                                    </Button>
                                ) : (
                                    <Link
                                        style={{
                                            color: 'white',
                                            textDecoration: 'none',
                                            marginRight: '10px',
                                        }}
                                        to="/login"
                                    >
                                        Login
                                    </Link>
                                )}
                                <Navbar.Text className="ms-3">
                                    Signed in as:{' '}
                                    <a href="/login">{user?.displayName}</a>
                                </Navbar.Text>
                            </div>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
