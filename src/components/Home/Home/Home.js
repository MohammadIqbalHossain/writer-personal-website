import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import ServicesTopics from '../ServicesTopics/ServicesTopics';

const Home = () => {
    return (
        <div>
            <Banner />
            <ServicesTopics />
            <Services />
        </div>
    );
};

export default Home;