import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
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
                                    to="/login"
                                >
                                    Login
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
                                <Navbar.Text>
                                    Signed in as: <a href="#login">Mark Otto</a>
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
