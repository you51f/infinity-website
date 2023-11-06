import React from 'react';
import Link from 'next/link';
import { AiOutlineWhatsApp } from 'react-icons/ai';


const WhatsAppButton = () => {
    return (
    //   <Link href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER">
    //     <a target="_blank" rel="noopener noreferrer" className="whatsapp-button">
    //       <img alt="WhatsApp Icon" />
    //     </a>
    //   </Link>
      <Link href="https://wa.me/+12679960124" target="_blank" className='whatsapp-button'><AiOutlineWhatsApp  className='whatsapp-button_img'/><div><h6>Whatsapp</h6><p className='whatsapp-number'>Live chat</p></div></Link>
    );
  };
  
  export default WhatsAppButton;