"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { sendContactForm } from '../api/send';
import { SuccessInfo } from '../components';
 
export default function Success() {
  const { setCartItems, setTotalPrice, setTotalQuantities, formValues, resetForm, formData } = useStateContext();
  // const { formValues, updateFormValue, handleSubmit } = useStateContext();

 
  const sendForm = async() => {
    console.log(formData);
    await sendContactForm(formData)
    resetForm()
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    // Send the form data to the server
    }


    
  
  useEffect(() => {
    sendForm()
    // resetForm()
    // localStorage.clear();
    // setCartItems([]);
    // setTotalPrice(0);
    // setTotalQuantities(0);
    // runFireworks();
  }, []);

  return (
    <SuccessInfo/>
  )
}

