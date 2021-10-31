import React from 'react';

const Footer = () => {
    return (
        <div
            style={{
                backgroundColor: '#000',
                color: '#fff',
                padding: '10px 0px',
                textAlign: 'center',
                marginTop: '40px',
            }}
        >
            <h3>
                <span className="text-primary">TourPro</span> &copy; 2021
            </h3>
            <p>All Rights Reserved</p>
        </div>
    );
};

export default Footer;
