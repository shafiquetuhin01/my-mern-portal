import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const {id} = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const {data: appointment, isLoading} = useQuery(['booking', id], ()=>fetch(url,{
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })).then(res=>res.json());
      if(isLoading){
        return <Loading/>
      }
    return (
        <div>
            <h3 className='text-xl text-purple-400'>Please pay for : {id}</h3>
        </div>
    );
};

export default Payment;