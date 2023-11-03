"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { sendContactForm } from '../api/send';
 
export default async function Success() {
  const { setCartItems, setTotalPrice, setTotalQuantities, formValues, restForm } = useStateContext();
  // const { formValues, updateFormValue, handleSubmit } = useStateContext();

 
  async function sendForm() {
    await sendContactForm(formValues)
    // Send the form data to the server
    restForm()
    }


    
  
  useEffect(() => {
    sendForm()

    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    // runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:sales@infinitycoltd.com">
            sales@infinitycoltd.com
          </a>
        </p>
        <Link href="/store">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  )
}

