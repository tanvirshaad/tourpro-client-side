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
                        <div className="d-flex align-items-center justify-content-center">
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
                            </div>
                            <div className="d-flex">
                                {user?.email ? (
                                    <div>
                                        <Link
                                            to="/home"
                                            style={{
                                                color: 'white',
                                                textDecoration: 'none',
                                                marginRight: '10px',
                                            }}
                                        >
                                            All Orders
                                        </Link>
                                        <Button
                                            onClick={logOut}
                                            variant="light"
                                        >
                                            Logout
                                        </Button>
                                    </div>
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
