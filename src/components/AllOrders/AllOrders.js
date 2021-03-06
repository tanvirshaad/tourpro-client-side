import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://macabre-warlock-05384.herokuapp.com/orders')
            .then((res) => res.json())
            .then((data) => setAllOrders(data));
    }, []);
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
                    const remaining = allOrders.filter(
                        (order) => order._id !== id
                    );
                    setAllOrders(remaining);
                }
            });
    };
    return (
        <div className="py-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        <h1 className="fs-1 fw-bold text-center text-black">
                            All Orders
                        </h1>
                    </Col>
                </Row>
                <Row>
                    {allOrders.map((allOrder) => (
                        <div key={allOrder._id} className="col-lg-4 g-4">
                            <Container>
                                <Card
                                    className="h-100"
                                    border="primary"
                                    style={{ width: '18rem' }}
                                >
                                    <Card.Body>
                                        <Card.Title>
                                            <h6>
                                                Order no: {allOrder.order._id}
                                            </h6>
                                            <h3>
                                                User:{' '}
                                                <span className="text-primary">
                                                    {allOrder.name}
                                                </span>
                                            </h3>
                                        </Card.Title>
                                        <Card.Text>
                                            <h5>{allOrder.order.name}</h5>
                                            <h6>
                                                Price:
                                                {allOrder.order.price}
                                            </h6>
                                            <h6>Address: {allOrder.address}</h6>
                                        </Card.Text>
                                        <Button
                                            onClick={() =>
                                                handleDelete(allOrder._id)
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

export default AllOrders;
