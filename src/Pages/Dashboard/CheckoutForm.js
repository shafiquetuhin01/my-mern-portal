import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useState } from "react";

const CheckoutForm = ({appointment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const {price} = appointment;

    useEffect(()=>{
      fetch('http://localhost:5000/create-payment-intent',{
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({price})

      })
      .then(res=>res.json())
      .then(data=>{
        if(data?.clientSecret){
          setClientSecret(data.clientSecret);
        }
      })
    },[price]);
    
    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card === null){
          return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card
        });
        setCardError(error?.message || '');

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="mt-4 btn-sm btn-success tex-white font-bold px-2 py-1 rounded-md" type="submit" disabled={!stripe || !clientSecret}>
          Pay 
        </button>
      </form>
      {
        cardError && <p className="text-red-500">{cardError}</p>
      }
    </div>
  );
};

export default CheckoutForm;
