"use client"
import { client } from '@/sanity/lib/client';
import React, { useState } from 'react'
import imageUrlBuilder from "@sanity/image-url";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';




const ProductInfo = ({product: { image, name, details, price }}) => {
    const builder = imageUrlBuilder(client);
    const [index, setIndex] = useState(0);
  return (
    <div>
        <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
             src={builder.image(image && image[index]).width(300).height(300).url()} 
             
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
              <span className="minus"><AiOutlineMinus /></span>
              <span className="num">0</span>
              <span className="plus" ><AiOutlinePlus /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" >Add to Cart</button>
            <button type="button" className="buy-now" >Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ProductInfo