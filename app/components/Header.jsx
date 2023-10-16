"use client"
import Link from 'next/link';
import React from 'react'
import { AiOutlineShoppingCart, AiOutlineInfoCircle } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { usePathname } from "next/navigation";

const Header = () => {
    const navLinks = [
        {label: 'Home', path: '/'}, 
        {label: 'Infinity Store', path: '/store'},
        {label: 'Infinity Store', path: '/aviation'},
        {label: 'Contact', path: '/contact'},
        {label: 'About Us', path: '/about'},

      ]
    const pathname = usePathname()
 
 
      
 
  return (
    <div>
        <div className='header-container'>
            <div className='header-logo'></div>
            <div className='header-text center headerx'><BiPhoneCall className='icons-header-color'/> SD: +249 96 186 1369 &nbsp; | &nbsp; <HiOutlineMail className='icons-header-color'/> sales@infinitycoltd.com</div>
            <div className='header-show'>
                <div className='header-text center '><BiPhoneCall className='icons-header-color'/> SD: +249 96 186 1369</div>
                <div className='header-text center '><HiOutlineMail className='icons-header-color'/> sales@infinitycoltd.com</div>
            </div>
            <Link href={'/about'} className='header-text info'><AiOutlineInfoCircle className='icons-header-color'/></Link>
            {/* <div className='header-text'><AiOutlineShoppingCart className='icons-header-color'/></div> */}
            
        </div>  
        <div className='header-container2 ripplex'>
           
            <Link href='/' className={pathname === '/' ? 'main-ripple' : 'ripple'}  >Home</Link>
            <Link href='/store' className={pathname === '/store' ? 'main-ripple' : 'ripple'}  >Infinity Store</Link>
            <Link href='/aviation' className={pathname === '/aviation' ? 'main-ripple' : 'ripple'}  >Infinity Aviation</Link>
            <Link href='/contact' className={pathname === '/contact' ? 'main-ripple' : 'ripple'}  >Contact</Link>
            <Link href='/about' className={pathname === '/about' ? 'main-ripple' : 'ripple'}  >About Us</Link>
           
        </div>
        <div className='header-container2 ripple-show'>
            <div className='ripple-row'>
            <Link href='/' className={pathname === '/' ? 'main-ripple' : 'ripple'}  >Home</Link>
            {/* <Link href='/store' className={pathname === '/store' ? 'main-ripple' : 'ripple'}  >Infinity Store</Link> */}
            <Link href='/aviation' className={pathname === '/aviation' ? 'main-ripple' : 'ripple'}  >Infinity Aviation</Link>
            <Link href='/contact' className={pathname === '/contact' ? 'main-ripple' : 'ripple'}  >Contact</Link>
            <Link href='/about' className={pathname === '/about' ? 'main-ripple' : 'ripple'}  >About Us</Link>

            </div>
            {/* <div className='ripple-row'>
               
            <Link href='/about' className={pathname === '/about' ? 'main-ripple' : 'ripple'}  >About Us</Link>

            </div> */}
        </div>
    
    </div>
  )


}

export default Header