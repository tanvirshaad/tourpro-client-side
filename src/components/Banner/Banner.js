import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        height={600}
                        className="d-block w-100"
                        src="https://beautifulbangladesh.gov.bd/storage/backend/images/upload/thumbnil/tajingdong-keokradon-2020-07-03-5eff8478e0cd5.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Explore Beautiful Bangladesh</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={600}
                        className="d-block w-100"
                        src="https://beautifulbangladesh.gov.bd/storage/backend/images/upload/thumbnil/nafakhum-2020-05-10-5eb7ca60be209.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Plan Your Tour With Us</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={600}
                        className="d-block w-100"
                        src="https://beautifulbangladesh.gov.bd/storage/backend/images/upload/thumbnil/nilgiri-2020-06-07-5edc99c426aa6.jpeg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Celebrate With Us</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
