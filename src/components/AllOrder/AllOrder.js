import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const AllOrder = (props) => {
    const { name, _id, address, phone, order } = props.allOrder;
    const handleDelete = (id) => {
        const url = `http://localhost:5000/orders/${_id}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };
    return (
        <div className="col-lg-4 g-4">
            <Container>
                <Card border="primary" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>
                            <h6>Order no: {order._id}</h6>
                            <h3>
                                User:{' '}
                                <span className="text-primary">{name}</span>
                            </h3>
                        </Card.Title>
                        <Card.Text>
                            <h5>{order.name}</h5>
                            <h6>Order Details:{order.price}</h6>
                        </Card.Text>
                        <Button
                            onClick={() => handleDelete(_id)}
                            variant="danger"
                        >
                            Cancel Order
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default AllOrder;
