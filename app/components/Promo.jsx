"use client"
import React, { useState } from 'react'
import { useStateContext } from '../context/StateContext';

const Promo = () => {
    const [promoCode, setPromoCode] = useState('');
    const { savedPromos, totalPrice } = useStateContext();
    const [promos, setPromos] = useState([]);
    const [newTotal, setNewTotal] = useState(totalPrice);
    const [invalidVoucher, setInvalidVoucher] = useState(false);



    const addPromo = () => {
        // console.log(savedPromos)
        setPromos(savedPromos)
        const matchedPromo = promos.find((v) => v.name === promoCode);
        if (matchedPromo) {
            setSelectedVoucher(matchedPromo.name)
          const discount = matchedPromo.discount / 100; // Convert discount percentage to decimal
          const discountedPrice = totalPrice - totalPrice * discount;
          setNewTotal(discountedPrice);
          setInvalidVoucher(false);
        } else { 
            setSelectedVoucher('')
          setNewTotal(totalPrice);
          setInvalidVoucher(true);
        }
    }

  return (
    <div className="empty-cart">
            <div className='promo-title'><h3>Get your discount:</h3></div>
            <input 
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter a promp code"
            className="input"/>
              <button
                type="button"
                onClick={() => addPromo()}
                className="btn"
              >
                Apply promo
              </button>
              {invalidVoucher && (
                <div className="invalid_voucher">
                  Invalid Promo. Please enter a valid promo code.
                </div>
              )}
          </div>
  )
}

export default Promo