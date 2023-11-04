"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
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
  const [buttonDisabled, setButtonDisabled] = useState(false);


  const { formData, updateFormValue, handleSubmit, cartItems, setShowCart } = useStateContext();

  useEffect(() => {
   setShowCart(false);
  }, []);

  const handleCheckout = async (e) => {
    e.preventDefault();
    setButtonDisabled(true);
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
        
        <div className='fill-form-text'><p className='left-logo'></p><h3>Delivery Details</h3></div>
        <form className="checkout-for-details" onSubmit={handleCheckout}>
        
      
        <input
        type="text"
        placeholder="Recipient's name"
        value={formData.recipientName}
        onChange={(e) => updateFormValue('recipientName', e.target.value)}
        required
        className="input"
      />

      <input
        type="text"
        placeholder="ID Number"
        value={formData.idNumber}
        onChange={(e) => updateFormValue('idNumber', e.target.value)}
        required
        className="input"
      />

      <input
        type="text"
        placeholder="Specific address"
        value={formData.specificAddress}
        onChange={(e) => updateFormValue('specificAddress', e.target.value)}
        required
        className="input"
      />

      <input
        type="text"
        placeholder="Country/Region"
        value={formData.countryRegion}
        onChange={(e) => updateFormValue('countryRegion', e.target.value)}
        required
        disabled
        className="input"
      />

      <input
        type="text"
        placeholder="Province/state"
        value={formData.provinceState}
        onChange={(e) => updateFormValue('provinceState', e.target.value)}
        required
        className="input"
      />

      <input
        type="text"
        placeholder="City"
        value={formData.city}
        onChange={(e) => updateFormValue('city', e.target.value)}
        required
        className="input"
      />

      <input
        type="text"
        placeholder="Postal Code or Zip code"
        value={formData.postalCode}
        onChange={(e) => updateFormValue('postalCode', e.target.value)}
        required
        className="input"
      />

      <input
        type="number"
        placeholder="Recipient's mobile"
        value={formData.recipientMobile}
        onChange={(e) => updateFormValue('recipientMobile', e.target.value)}
        required
        className="input"
      />

      <input
        type="text"
        placeholder="Recipient's Mailbox"
        value={formData.recipientMailbox}
        onChange={(e) => updateFormValue('recipientMailbox', e.target.value)}
        required
        className="input"
      />

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => updateFormValue('email', e.target.value)}
        required
        className="input"
      />

      <label className='input-checkbox'>
        <input
          type="checkbox"
          checked={formData.privacyPolicyChecked}
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
          checked={formData.returnPolicyChecked}
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
      
    
      <button type="submit" className="button checkout-btn" style={{ backgroundColor: buttonDisabled ? 'lightgrey' : '' }} disabled={buttonDisabled}>Continue To Stripe</button>
      {buttonDisabled && <p className='sentM'>Preparing the Stripe checkout page</p>}
      
    </form>
        </div>
        
    </div>
  )
}

export default ClientDetails