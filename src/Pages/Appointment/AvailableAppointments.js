import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formatedDate = format(date, "PP");
    useEffect(()=>{
        fetch(`http://localhost:5000/available?date=${formatedDate}`)
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[]);
    return (
        <div>
            <h3 className='my-12 text-2xl fob text-secondary text-center'>You have selected {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=><Service key={service._id} service={service} setTreatment={setTreatment} treatment={treatment}></Service>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}/>}
        </div>
    );
};

export default AvailableAppointments;