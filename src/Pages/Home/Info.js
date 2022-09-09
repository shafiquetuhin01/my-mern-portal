import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='lg:grid-cols-3 grid-cols-1 gap-5 grid'>
            <InfoCard bgclassName="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" img={clock}/>
            <InfoCard bgclassName="bg-accent" cardTitle="Our Locations" img={marker}/>
            <InfoCard bgclassName="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact Us" img={phone}/> 
        </div>
    );
};

export default Info;