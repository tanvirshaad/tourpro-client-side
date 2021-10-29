import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Features></Features>
            <About></About>
        </div>
    );
};

export default Home;
