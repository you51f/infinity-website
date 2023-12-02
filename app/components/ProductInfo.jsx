"use client"
import { client } from '@/sanity/lib/client';
import React, { useState } from 'react'
import imageUrlBuilder from "@sanity/image-url";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import { urlForImage } from '@/sanity/lib/image';
import { PiWarningCircleDuotone } from "react-icons/pi";
import { Product } from './index';




const ProductInfo = ({product, products}) => {
  const { _id, image, name, details, price, category, sizes, stock } = product;
    const builder = imageUrlBuilder(client);
    const [index, setIndex] = useState(0);
    const [sizeIndex, setSizeIndex] = useState(0); 
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    var sizeNum = 0
    const handleBuyNow = () => { 
      const sentProduct = {...product}
      sentProduct.name = `${sentProduct.name} ${sentProduct.sizes && sentProduct.sizes[sizeIndex]?.size && `- ${sentProduct.sizes[sizeIndex].size}` || ""}`
      sentProduct.price = sentProduct.price + (sentProduct.sizes && sentProduct.sizes[sizeIndex]?.addedprice || 0)

      onAdd(sentProduct, qty);
  
      setShowCart(true);
    }
    const handleAdd = () => {
      const sentProduct = {...product}
      sentProduct.name = `${sentProduct.name} ${sentProduct.sizes && sentProduct.sizes[sizeIndex]?.size && `- ${sentProduct.sizes[sizeIndex].size}` || ""}`
      sentProduct.price = sentProduct.price + (sentProduct.sizes && sentProduct.sizes[sizeIndex]?.addedprice || 0)

      onAdd(sentProduct, qty);
  
    }

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
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
          <h1>{name} {sizes && sizes[sizeIndex]?.size && `- ${sizes[sizeIndex].size}`}</h1>
          
            {/* <h4 className='details'>Details: </h4> */}
          <p>{details}</p>
          <p className="price">${price + (sizes && sizes[sizeIndex]?.addedprice || 0)}</p>
          {/* <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div> */}
          <h4 className='size'>Sizes: </h4>
          <div className='size-container'>
          {
            sizes?.map((item, i) => {
              sizeNum = 1
              return <button key={i} onClick={() => {setSizeIndex(i)}} className={i === sizeIndex ? 'size-box-selected' : 'size-box-normal'}>{item.size}</button>
            })
          }
          </div>
          <div >
          {stock === 0 ? 
           <button type="button" className="no-stock"><PiWarningCircleDuotone/> Not available right now</button> 
          : <div className="buttons">
            {/* <button type="button" className="add-to-cart" onClick={() => handleAdd(product)}>Add to Cart</button>
           <button type="button" className="buy-now" onClick={() => handleBuyNow()}>Buy Now</button> */}
           <button type="button" className="buy-now" onClick={() => handleAdd(product)}>Add to Cart</button>
           </div>
           }
            
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <div className="maylike-products-main">
            <h2>You may also like</h2>
            <div className="marquee">
              <div className="maylike-products-container track">
                {shuffleArray(products)
                  .slice(0, 10)
                  .map((item) =>
                    item._id !== _id ? (
                      <div key={item._id} className="product-position">
                        <Product key={item._id} product={item} />
                      </div>
                    ) : null
                  )}
              </div>
            </div>
          </div>
      </div>
      <style>{`
        
        .size {
          display: ${sizeNum != 0 ? 'flex' : 'none'};
        }
        .details {
          display: ${details != "" ? 'flex' : 'none'};
        }
        
      `}</style>
    </div>  
  )
}

export default ProductInfo