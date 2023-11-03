"use client"
import Link from 'next/link';
import React from 'react'
import { AiOutlineShoppingCart, AiOutlineInfoCircle } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { usePathname } from "next/navigation";
import { useStateContext } from '../context/StateContext';
import { Cart } from './index';


const Header = () => {
    const navLinks = [
        {label: 'Home', path: '/'}, 
        {label: 'Infinity Store', path: '/store'},
        {label: 'Infinity Store', path: '/aviation'},
        {label: 'Contact', path: '/contact'},
        {label: 'About Us', path: '/about'},

      ]
    const pathname = usePathname()
 
    const { showCart, setShowCart, totalQuantities } = useStateContext();
      
 
  return (
    <div className='header-stick'>
        <div className='header-container'>
            <div className='header-logo'></div>
            <div className='header-image'></div>
            {/* <div className='header-text center headerx'><BiPhoneCall className='icons-header-color'/> SD: +249 96 186 1369 &nbsp; | &nbsp; <HiOutlineMail className='icons-header-color'/> sales@infinitycoltd.com</div> */}
            {/* <div className='header-show'>
                <div className='header-text center '><BiPhoneCall className='icons-header-color'/> SD: +249 96 186 1369</div>
                <div className='header-text center '><HiOutlineMail className='icons-header-color'/> sales@infinitycoltd.com</div>
            </div> */}
            {/* <Link href={'/about'} className='header-text info'><AiOutlineInfoCircle className='icons-header-color'/></Link> */}
            <button type='button' className='cart-icon' onClick={() => setShowCart(true)}><AiOutlineShoppingCart className='icons-header-color'/><span className='cart-item-qty'>{totalQuantities}</span></button>
            
        </div>  
        <div className='header-container2 ripplex'>
           
            <Link href='/' className={pathname === '/' ? 'main-ripple' : 'ripple'}  >Home</Link>
            <Link href='/store' className={pathname === '/store' ? 'main-ripple' : 'ripple'}  >Store</Link>
            <Link href='/aviation' className={pathname === '/aviation' ? 'main-ripple' : 'ripple'}  >Aviation</Link>
            <Link href='/contact' className={pathname === '/contact' ? 'main-ripple' : 'ripple'}  >Contact</Link>
            <Link href='/about' className={pathname === '/about' ? 'main-ripple' : 'ripple'}  >About Us</Link>
           
        </div>
        <div className='header-container2 ripple-show'>
            <div className='ripple-row'>
            <Link href='/' className={pathname === '/' ? 'main-ripple' : 'ripple'}  >Home</Link>
            <Link href='/store' className={pathname === '/store' ? 'main-ripple' : 'ripple'}  >Store</Link>
            <Link href='/aviation' className={pathname === '/aviation' ? 'main-ripple' : 'ripple'}  >Aviation</Link>
            <Link href='/contact' className={pathname === '/contact' ? 'main-ripple' : 'ripple'}  >Contact</Link>
            <Link href='/about' className={pathname === '/about' ? 'main-ripple' : 'ripple'}  >About Us</Link>

            </div>
            {/* <div className='ripple-row'>
               
            <Link href='/about' className={pathname === '/about' ? 'main-ripple' : 'ripple'}  >About Us</Link>

            </div> */}
        </div>
        {showCart && <Cart />}
    </div>
  )
 

}

export default Header