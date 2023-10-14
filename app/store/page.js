
import React  from 'react'
import { Advertising, Product } from '../components'
import { BiFilter } from 'react-icons/bi';
import { BiSolidDownArrow } from 'react-icons/bi';
import { Footer, Header, WhatsAppButton } from '../components';
import { client } from '@/sanity/lib/client';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { productsQuery } from '@/sanity/lib/queries';

export default async function Store () {
  const products = await sanityFetch(productsQuery);
  return (
    <div>
      <Header/>
        <Advertising/>
        {/* <button className='filter-btn'>
            <BiFilter className='filter-icon'/> Categories.All <BiSolidDownArrow/>
          </button> */}
        {/* heading */}
      <div className="heading">
        <div className='pre-heading'><h3 className='heading-text'>Infinity</h3>&nbsp;<h3 className='heading-text2'>Desktop Decoration</h3></div>
        {/* <h5 className='heading-text-normal'>View All <MdKeyboardArrowRight className='heading-icon'/></h5> */}
      </div>
      {/* heading */}

      <div className="product-container">
        {products?.map((product) => <Product key={product._id} product={product}/>)}
      </div>
      <Footer/>
      <WhatsAppButton/>
    </div>
  )
};

// export const getServerSideProps = async () => {
//   const query = '*[_type == "product"]';
//   const products = await client.fetch(query);

//   return {
//     props: { products }
//   }
// }

// export async function getServerSideProps() {
//   const query = '*[_type == "product"]';
//   const res = await client.fetch(query);
//   const products = await res.json()

//   return {
//     props: { products }
//   }
 
 
// }
