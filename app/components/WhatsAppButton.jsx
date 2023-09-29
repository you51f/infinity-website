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
      <Link href="https://wa.me/+249961861369" target="_blank" className='whatsapp-button'><AiOutlineWhatsApp  className='whatsapp-button_img'/></Link>
    );
  };
  
  export default WhatsAppButton;