"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { useStateContext } from '../context/StateContext';
import getStripe from '../lib/getStripe';

const ClientDetails = () => {

    const [recipientName, setRecipientName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [specificAddress, setSpecificAddress] = useState('');
  const [countryRegion, setCountryRegion] = useState('(US) United States');
  const [provinceState, setProvinceState] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [recipientMobile, setRecipientMobile] = useState('');
  const [recipientMailbox, setRecipientMailbox] = useState('');
  const [email, setEmail] = useState('');
  const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);
  const [returnPolicyChecked, setReturnPolicyChecked] = useState(false);


  const { formValues, updateFormValue, handleSubmit, cartItems } = useStateContext();

  const handleCheckout = async (e) => {
    e.preventDefault();
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    // toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }
  return (
    <div className='checkout'>
        <div className='checkout-form'>
        
        <div className='fill-form-text'><p className='left-logo'></p><h3>Fill this form for Delivery Details</h3></div>
        <form className="checkout-for-details" onSubmit={handleCheckout}>
        
      
        <input
        type="text"
        placeholder="Recipient's name"
        value={formValues.recipientName}
        onChange={(e) => updateFormValue('recipientName', e.target.value)}
        required
        className="input"
      />

      <input
        type="number"
        placeholder="ID Number"
        value={formValues.idNumber}
        onChange={(e) => updateFormValue('idNumber', e.target.value)}
        required
        className="input"
      />

      <input
        type="text"
        placeholder="Specific address"
        value={formValues.specificAddress}
        onChange={(e) => updateFormValue('specificAddress', e.target.value)}
        required
        className="input"
      />

      <input
        type="text"
        placeholder="Country/Region"
        value={formValues.countryRegion}
        onChange={(e) => updateFormValue('countryRegion', e.target.value)}
        required
        disabled
        className="input"
      />

      <input
        type="text"
        placeholder="Province/state"
        value={formValues.provinceState}
        onChange={(e) => updateFormValue('provinceState', e.target.value)}
        required
        className="input"
      />

      <input
        type="text"
        placeholder="City"
        value={formValues.city}
        onChange={(e) => updateFormValue('city', e.target.value)}
        required
        className="input"
      />

      <input
        type="text"
        placeholder="Postal Code or Zip code"
        value={formValues.postalCode}
        onChange={(e) => updateFormValue('postalCode', e.target.value)}
        required
        className="input"
      />

      <input
        type="text"
        placeholder="Recipient's mobile"
        value={formValues.recipientMobile}
        onChange={(e) => updateFormValue('recipientMobile', e.target.value)}
        required
        className="input"
      />

      <input
        type="text"
        placeholder="Recipient's Mailbox"
        value={formValues.recipientMailbox}
        onChange={(e) => updateFormValue('recipientMailbox', e.target.value)}
        required
        className="input"
      />

      <input
        type="email"
        placeholder="Email"
        value={formValues.email}
        onChange={(e) => updateFormValue('email', e.target.value)}
        required
        className="input"
      />

      <label className='input-checkbox'>
        <input
          type="checkbox"
          checked={formValues.privacyPolicyChecked}
          onChange={(e) => updateFormValue('privacyPolicyChecked', e.target.value)}
          required
        />
        <div className='input-checkbox-text'>
            
        I have read and agree to the <Link className='policy-link' href={"/privacy-policy"}>privacy policy</Link>.
            </div>
      </label>

      <label className='input-checkbox'>
        <input
          type="checkbox"
          checked={formValues.returnPolicyChecked}
          onChange={(e) => updateFormValue('returnPolicyChecked', e.target.value)}
          required
        />
        <div className='input-checkbox-text'>

        I have read and agree to the <Link className='policy-link' href={"/return-policy"}>return policy</Link>.
        </div>
      </label>

      <div className='checkout-btn2'>
        <h4>Note: Kindly note that your order may take 7 to 10 days to reach your doorstep as our team carefully prepares and send it to your address. Please don't hesitate to get in touch with us if you need any assistance.</h4>
      </div>
      
    
      <button type="submit" className="button checkout-btn">Continue To Stripe</button>
      {/* <p className='sentM'>Your message was sent successfully!</p> */}
      
    </form>
        </div>
        
    </div>
  )
}

export default ClientDetails