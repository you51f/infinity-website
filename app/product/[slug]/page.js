
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { productPathsQuery, productQuery, productsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import imageUrlBuilder from "@sanity/image-url";
import {React } from 'react'
import Image from 'next/image';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Footer, Header, ProductInfo } from '@/app/components';

// export async function generateStaticParams() {
//   // Important, use the plain Sanity Client here
//   const products = await client.fetch(productPathsQuery);

//   return products;
// }

export default async function ProductDetails ({ params }) {
  const product = await sanityFetch(productQuery, params);
  const products = await sanityFetch(productsQuery, params);
  const { image, name, details, price, category } = product;
  const builder = imageUrlBuilder(client); 
  // const [index, setIndex] = useState(0);
  
  return (
    <div>
      <Header/>
      <ProductInfo product={product} products={products}/>
      {/* <div className="product-detail-container">
        <div>  
          <div className="image-container">
            <img
             src={builder.image(image && image[0]).width(300).height(300).url()} 
             
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
      </div> */}

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

