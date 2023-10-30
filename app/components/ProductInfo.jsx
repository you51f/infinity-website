"use client"
import { client } from '@/sanity/lib/client';
import React, { useState } from 'react'
import imageUrlBuilder from "@sanity/image-url";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import { urlForImage } from '@/sanity/lib/image';




const ProductInfo = ({product}) => {
  const { image, name, details, price, category } = product;
    const builder = imageUrlBuilder(client);
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    const handleBuyNow = () => {
      onAdd(product, qty);
  
      setShowCart(true);
    }

  return (
    <div>
        <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
             src={urlForImage(image[index])} 
             
            className="product-detail-image"
            alt={image[0]?.alt}
              />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={builder.image(item).width(300).height(300).url()}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          {/* <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div> */}
          <div className="buttons">
          <button type="button" className="add-to-cart" onClick={() => onAdd(product, qty)}>Add to Cart</button>
            <button type="button" className="buy-now" onClick={() => handleBuyNow()}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default ProductInfo