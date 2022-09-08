import React from 'react'; 
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from '../Shared/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center' style={{backgroundImage:`url(${appointment})`}}>
            <div className='flex-1 lg:block hidden'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-3 lg:p-1'>
                <h2 className='text-primary text-xl font-bold'>Appointment</h2>
                <h2 className='text-white text-3xl font-bold my-3'>Make An Appointment Today</h2>
                <p className='text-white text-justify pr-5 mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get started</PrimaryButton>
            </div>
            
        </section>
    );
};

export default MakeAppointment;