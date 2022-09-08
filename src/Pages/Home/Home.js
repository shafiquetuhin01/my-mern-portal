import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Banner2 from './Banner2';
import HomeContact from './HomeContact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='mx-12'>
            <Banner/>
            <Info/>
            <Services/>
            <Banner2/>
            <MakeAppointment/>
            <Testimonials/>
            <HomeContact/>
            <Footer/>
        </div>
    );
};

export default Home;