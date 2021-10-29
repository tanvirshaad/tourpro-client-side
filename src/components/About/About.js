import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div className="pb-5">
            <Container>
                <Row>
                    <Col lg={12}>
                        <h1 className="text-center text-black fw-bold fs-1">
                            Abou TourPro
                        </h1>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg={6} md={12} xs={12}>
                        <img
                            src="https://www.tourx-react.egenslab.com/static/media/about-1.bcfbc984.png"
                            alt=""
                        />
                    </Col>
                    <Col lg={6} md={12} xs={12}>
                        <h3>The Best Travel Agency Company in Bangladesh</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Quaerat, non asperiores. Accusantium magni
                            minima optio excepturi, nobis quas veritatis. Sint
                            iure itaque fugit eaque praesentium! Voluptas ipsam
                            neque corrupti reiciendis voluptatem possimus nihil
                            omnis sunt debitis sit, asperiores vitae corporis
                            modi alias. Voluptatibus accusantium laborum harum
                            dicta ullam mollitia vitae, voluptas tenetur
                            doloremque totam soluta reprehenderit laudantium
                            autem numquam impedit.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;
