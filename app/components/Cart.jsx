"use client"
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
// import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlForImage } from '@/sanity/lib/image';
import getStripe from '../lib/getStripe';
import { Promo } from '.';
// import { urlFor } from '../lib/client'; 
// import getStripe from '../lib/getStripe';

const Cart = () => {
  const cartRef = useRef();
  // const [openPromoTab, setOpenPromoTab] = useState(false);
  const { totalPrice,openPromoTab, setOpenPromoTab, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();

  const handleCheckout = async () => {
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

  const openPromo = () => {
    setOpenPromoTab(!openPromoTab)
  }

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        {openPromoTab ? 
        <div>
        <button
        type="button"
        className="cart-heading"
        onClick={() => openPromo()}>
          <AiOutlineLeft />
          <span className="heading">Back to Cart</span>
        </button>
        <Promo/>
        </div>
        : 
        <div>
        <button
        type="button"
        className="cart-heading"
        onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/store">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container-cart">
          {cartItems.length >= 1 && cartItems?.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlForImage(item?.image[0])} className="cart-product-image" />
              <div className="item-desc">
                <div className="item_name">
                  <h5>{item?.name}</h5>
                  {/* <h4>${item?.price}</h4> */}
                </div>
                <div className="flex top">
                  {/* <h5>{item?.name}</h5> */}
                  <h4>${item?.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <p className="quantity-desc">
                    <span className="minus" onClick={() => toggleCartItemQuanitity(item._id, item.name, 'dec') }>
                    <AiOutlineMinus />
                    </span>
                    <span className="num" onClick="">{item?.quantity}</span>
                    {item.quantity != item?.stock ? <span className="plus" onClick={() => toggleCartItemQuanitity(item._id, item.name, 'inc') }><AiOutlinePlus /></span> : <span className="max" ><AiOutlinePlus /></span>}
                  </p>
                  {/* {item.quantity != item?.stock ? <p >Max </p> : null} */}
                  
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            {/* <div className="promo-text">
              <h3>use promo code</h3>
            </div> */}
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
            
              {/* <button type="button" onClick={() => openPromo()} className="btn_promo" >
              use promo code
              </button> */}
             
              <Link href="/client-details">
              <button type="button" className="btn" >
                Pay with Stripe
              </button>
              </Link>
              {/* <button type="button" className="btn" onClick={() => handleCheckout()}>
                Pay with Stripe
              </button> */}
            </div>
          </div>
        )}
        </div>
        }
      </div>
    </div>
  )
}

export default Cart