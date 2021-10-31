import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch('https://macabre-warlock-05384.herokuapp.com/orders')
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
    }, []);
    const orders = myOrders.filter((order) => order.name === user.displayName);
    const handleDelete = (id) => {
        const url = `https://macabre-warlock-05384.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                let result = window.confirm('Are you sure to delete?');
                if (result) {
                    alert('Order deleted');
                    const remaining = orders.filter(
                        (order) => order._id !== id
                    );
                    setMyOrders(remaining);
                }
            });
    };
    return (
        <div className="py-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        <h1 className="fs-1 fw-bold text-center text-black">
                            My Orders
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {orders.map((order) => (
                        <div key={order._id} className="col-lg-4 g-4">
                            <Container>
                                <Card
                                    className="h-100"
                                    border="primary"
                                    style={{ width: '18rem' }}
                                >
                                    <Card.Img
                                        variant="top"
                                        src={order.order.img}
                                    />
                                    <Card.Body>
                                        <Card.Title>
                                            <h6>Order no: {order._id}</h6>
                                        </Card.Title>
                                        <Card.Text>
                                            <h5>{order.order.name}</h5>
                                            <h6>
                                                Price:
                                                {order.order.price}
                                            </h6>
                                        </Card.Text>
                                        <Button
                                            onClick={() =>
                                                handleDelete(order._id)
                                            }
                                            variant="danger"
                                        >
                                            Cancel Order
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Container>
                        </div>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default MyOrder;
