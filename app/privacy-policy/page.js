import React from 'react'
import { Footer, Header, ProductInfo } from '@/app/components';

const PrivacyPolicy = () => {
  return (
    <div>
        <Header/>
        <div className='privacy'>
        <h1 className='privacy-title'>Privacy Policy</h1>
        <h4 className='privacy-text'>INFINITY Flight Horizons, LLC operates the INFINITY Flight Horizons website at www.infinitycoltd.com. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. By using the Service, you agree to the collection and use of information in accordance with this policy.</h4>
        <h4 className='privacy-text2'>1. Data Collection:</h4>
        <h4 className='privacy-text'>
We collect the following data from our users through the provided form: Recipient’s name, ID Number, Specific address, Country/Region, Province/state, City, ZIP Code, Recipient’s mobile, Recipient’s Mailbox, and Email.</h4>
        <h4 className='privacy-text2'>2. Purpose of Data Collection:</h4>
        <h4 className='privacy-text'>
We collect this data for shipping purposes and solely use it to create the shipping label.</h4>
        <h4 className='privacy-text2'>3. Data Security Measures:</h4>
        <h4 className='privacy-text'>
We prioritize the security of your data and have implemented appropriate physical, electronic, and managerial procedures to safeguard and secure the information we collect online. While we cannot guarantee the absolute security of the data, we strive to use commercially acceptable means to protect your personal information.</h4>
        <h4 className='privacy-text2'>4. Sharing Information:</h4>
        <h4 className='privacy-text'>
We share the collected data with the shipping company to facilitate the delivery of our products to customers.</h4>
        <h4 className='privacy-text2'>5. User Rights:</h4>
        <h4 className='privacy-text'>
Users can request modifications to their order or data after submission by emailing the sales department at sales@infinitycoltd.com.</h4>
        </div>
        <Footer/>
    </div>
  )
}

export default PrivacyPolicy