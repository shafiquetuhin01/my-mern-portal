import React from 'react';
import appointment from "../../assets/images/appointment.png";
const HomeContact = () => {
    return (
        <section className='py-5' style={{backgroundImage:`url(${appointment})`}}>
            <div className='py-8 text-center'>
                <h4 className='text-primary text-xl'>Contact Us</h4>
                <h4 className='text-3xl text-white'>Stay connected with us</h4>
            </div>
            <div className='text-center'>
                <form action="" >
                    <input type="email" name='email' placeholder='your email' className='w-full lg:w-7/12 mx-auto mt-3 p-2 rounded-md' />
                    <input type="text" name='subject' placeholder='subject' className='w-full lg:w-7/12 mx-auto mt-3 p-2 rounded-md' />
                    <textarea rows="6" type="text" name='subject' placeholder='your message' className='w-full lg:w-7/12 mx-auto mt-3 p-2 rounded-md' />
                    <button className="btn btn-primary block mx-auto my-5 btn-wide text-white font-bold">Submit</button>

                </form>
            </div>
        </section>
    );
};

export default HomeContact;