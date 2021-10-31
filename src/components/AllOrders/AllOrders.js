import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllOrder from '../AllOrder/AllOrder';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then((res) => res.json())
            .then((data) => setAllOrders(data));
    }, []);
    return (
        <div>
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
                        <AllOrder
                            key={allOrder._id}
                            allOrder={allOrder}
                        ></AllOrder>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default AllOrders;
