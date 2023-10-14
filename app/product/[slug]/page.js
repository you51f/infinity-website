
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { productPathsQuery, productQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import imageUrlBuilder from "@sanity/image-url";
import {React } from 'react'
import Image from 'next/image';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Footer, Header } from '@/app/components';

export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const products = await client.fetch(productPathsQuery);

  return products;
}

export default async function ProductDetails ({ params }) {
  const product = await sanityFetch(productQuery, params);
  const { image, name, details, price } = product;
  const builder = imageUrlBuilder(client);
  
  return (
    <div>
      <Header/>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image
             src={builder.image(image && image[0]).width(300).height(300).url()} 
             width={180}
            height={140}
            className="product-detail-image"
            alt={image[0]?.alt}
              />
          </div>
          {/* <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlForImage(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div> */}
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          {/* <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div> */}
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
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
          </div>
        </div>
      </div>

      {/* <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div> */}
      <Footer/>
    </div>
  )
}

