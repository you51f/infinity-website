
import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { productPathsQuery, productQuery, productsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import imageUrlBuilder from "@sanity/image-url";
import {React } from 'react'
import Image from 'next/image';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Footer, Header, Product, ProductInfo } from '@/app/components';


// export async function generateStaticParams() {
//   // Important, use the plain Sanity Client here
//   const products = await client.fetch(productPathsQuery);

//   return products;
// }

export default async function categoryDetails ({ params }) {
  
    const category = params.slug
    const products = await sanityFetch(productsQuery); 
    var title = ""
    // console.log(params);  
    if (category == "aircraft-models") {
        title = "Aircraft models"
    }else if (category == "pilot") {
        title = "Pilot"
    }else if (category == "cabin-crew") {
        title = "Cabin Crew"
    }else if (category == "decorations") {
        title = "Decorations"
    }else if (category == "extra") {
        title = "Extra"
    }
  
  return (
    <div>
      <Header/>
      <div className='category'>
        {/* heading & category */}
      <div className="heading">
          <div className='pre-heading'><h3 className='heading-text'>Infinity</h3>&nbsp;<h3 className='heading-text2'>{title}</h3></div>
          {/* <Link href="/store/aircraft-models"><h5 className='heading-text-normal' >View All <MdKeyboardArrowRight className='heading-icon'/></h5></Link> */}
        </div>

      <div className="product-container">
        {products.map((product) => {
          if(product.category == category) {
            // if (AircraftModels < 4) {
            //   AircraftModels++
              return <div key={product._id} className="product-position"><Product key={product._id} product={product}/></div>
            // }
            
          }
        })}
      </div>
      {/* heading & category */} 
      </div>
      <Footer/>
    </div>
  )
}

