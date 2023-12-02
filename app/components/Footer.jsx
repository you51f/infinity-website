"use client"
import React, {useState} from 'react'
import { BiPhoneCall } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { BiLogoTiktok } from 'react-icons/bi';
import { FaStripe } from "react-icons/fa6";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="client-side">
        <div className="footer-decore"></div>
        <div className="footer-section1">
          <div className="footer-container2">
            <Link href={'/'}><div className="footer-logo"></div></Link>
            <Link href={'/'}><div className="footer-logo-text">INFINITY</div></Link>
          </div>
          <div className="footer-contact-title">Contact Us</div>
          <div className="footer-contact"><HiOutlineMail className='footer-contact-icon'/>&nbsp;Email</div>
          <div className="footer-contact-sub sub-pad">sales@infinitycoltd.com</div>
          <div className="footer-contact"><BiPhoneCall className='footer-contact-icon'/>&nbsp;Call us</div>
          <div className="footer-contact-sub sub-pad">US: +1 725 334 2579</div>
          {/* <div className="footer-contact-sub">EG: +20 103 089 1184</div>
          <div className="footer-contact-sub sub-pad">MY: +60 117 007 1557</div> */}
          <div className="footer-contact">Follow us on:</div>
          <div className="footer-follow-icons">
            <Link href="https://instagram.com/infinity_flight_horizons?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><AiOutlineInstagram  className='icon-space-footer'/></Link>
            <Link href="https://www.facebook.com/INFINITYFlightHorizons?mibextid=ZbWKwL" target="_blank"><AiFillFacebook className='icon-space-footer'/></Link>
            <Link href="https://x.com/infinity_fh?t=IL-mdl1_P9obCM_kNFBDyQ&s=09" target="_blank"><FaXTwitter  className='icon-space-footer'/></Link>
            <Link href="https://www.tiktok.com/@infinity_fh?_t=8hkLfukvhtl&_r=1" target="_blank"><BiLogoTiktok  className='icon-space-footer'/></Link>
            <Link href="https://www.linkedin.com/in/infinity-flight-26990929b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedin  className='icon-space-footer'/></Link>
            </div>
          
        </div>  
        <div className="footer-section2">
        <div className="footer-section3">
          <div className="footer-lined-title">Pages & Services</div>
          <ul className="footer-list">
            <li className='doted-text'><Link href={'/'}>Home</Link></li>
            <li className='doted-text'><Link href={'/aviation'}>Aviation</Link></li>
            {/* <li className='doted-text'><Link href={'/store'}>Store</Link></li>  */}
            <li className='doted-text'><Link href={'/contact'}>Contact</Link></li>
            <li className='doted-text'><Link href={'/about'}>About Us</Link></li>
          </ul>
        </div>
        <div className="footer-section3">
          <div className="footer-lined-title">Our Policies & Payments</div>
          <ul className="footer-list">
            {/* <li className='doted-text'>About Us</li> */}
            <li className='doted-text'><Link href={"/privacy-policy"}>Privacy policy</Link></li>
            <li className='doted-text'><Link href={"/return-policy"}>Return policy</Link></li>
          </ul>
          <div className="footer-contact">We Accept:</div>
          <div className="footer-follow-icons">
            <RiVisaLine  className='icon-space-footer'/>
            <FaCcMastercard className='icon-space-footer'/>
            <FaStripe  className='icon-space-footer'/>
            
            </div>
        </div>
        </div>
        </div>
        <div className="evo-side">
          <Link className='evo' href={'https://twitter.com/evoTechSd?t=u3In7S8TfB3tlr9hsjmZSQ&s=35'} target="_blank" attribute></Link>
          <div className="footer-line"></div>
        <div className="copy-right">© 2022 All rights reserved. EVO Technologies & Services.</div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer