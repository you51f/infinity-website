import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from "@sanity/image-url";


const builder = imageUrlBuilder(client);

const Product = ({product: { image, name, slug, price }}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-box'>
          {image[0] ? (
            <Image
            src={builder.image(image && image[0]).width(300).height(300).url()} 
            // src={builder.image(post.mainImage).width(300).height(300).url()} 
            // src={urlFor( image && image[0])} 
            width={180}
            height={140} 
            className="productImage"
            alt={image[0]?.alt}
            />
          ) : null}
          <div className='product-text-container'>
            <h5 >{name}</h5>
            <h5 >${price}</h5>
          </div>
          <div className='product-btn'>More Details</div>
        </div>
      </Link>  
    </div>
  )
}

export default Product