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
                            to="#features"
                        >
                            Features
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
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
