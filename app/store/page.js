
import React  from 'react'
import { Advertising, MoreProduct, Product } from '../components'
import { BiFilter } from 'react-icons/bi';
import { BiSolidDownArrow } from 'react-icons/bi';
import { Footer, Header, WhatsAppButton } from '../components';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { client } from '@/sanity/lib/client';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { productsQuery } from '@/sanity/lib/queries';
import Link from 'next/link';
 
export default async function Store () {
  const products = await sanityFetch(productsQuery); 
  var pilot = 0
  var CabinCrew = 0
  var AircraftModels = 0
  var AircraftModels20 = 0
  var AircraftModels16 = 0
  var Decorations = 0
  var others = 0
  return (
    <div>
      <Header/>
        <Advertising/>
        {/* <button className='filter-btn'>
            <BiFilter className='filter-icon'/> Categories.All <BiSolidDownArrow/>
          </button> */}

        {/* heading & category */}
        <div className="heading Aircraft-models">
          <div className='pre-heading'><h3 className='heading-text'>INFINITY</h3>&nbsp;<h3 className='heading-text2'>Aircraft models</h3></div>
          {/* <Link href="/store/aircraft-models"><h5 className='heading-text-normal' >View All <MdKeyboardArrowRight className='heading-icon'/></h5></Link> */}
        </div>

      <div className="product-container">
        {products.map((product) => {
          if(product.category == "aircraft-models") {
            if (AircraftModels < 3) {
              AircraftModels++
              return <div key={product._id} className="product-position"><Product key={product._id} product={product}/></div>
            }else if (AircraftModels === 3) {
              AircraftModels++
              return <Link className='product-position' href="/store/aircraft-models"><MoreProduct/></Link>
            }
            
          }
        })}
      </div>
        {/* heading & category */}
        <div className="heading Aircraft-models20">
          <div className='pre-heading'><h3 className='heading-text'>INFINITY</h3>&nbsp;<h3 className='heading-text2'>Aircraft models - 20cm</h3></div>
          {/* <Link href="/store/aircraft-models"><h5 className='heading-text-normal' >View All <MdKeyboardArrowRight className='heading-icon'/></h5></Link> */}
        </div>

      <div className="product-container">
        {products.map((product) => {
          if(product.category == "aircraft-models-20cm") {
            if (AircraftModels20 < 3) {
              AircraftModels20++
              return <div key={product._id} className="product-position"><Product key={product._id} product={product}/></div>
            }else if (AircraftModels20 === 3) {
              AircraftModels20++
              return <Link className='product-position' href="/store/aircraft-models-20cm"><MoreProduct/></Link>
            }
            
          }
        })}
      </div>
        {/* heading & category */}
        <div className="heading Aircraft-models16">
          <div className='pre-heading'><h3 className='heading-text'>INFINITY</h3>&nbsp;<h3 className='heading-text2'>Aircraft models - 16cm</h3></div>
          {/* <Link href="/store/aircraft-models"><h5 className='heading-text-normal' >View All <MdKeyboardArrowRight className='heading-icon'/></h5></Link> */}
        </div>

      <div className="product-container">
        {products.map((product) => {
          if(product.category == "aircraft-models-16cm") {
            if (AircraftModels16 < 3) {
              AircraftModels16++
              return <div key={product._id} className="product-position"><Product key={product._id} product={product}/></div>
            }else if (AircraftModels16 === 3) {
              AircraftModels16++
              return <Link className='product-position' href="/store/aircraft-models-16cm"><MoreProduct/></Link>
            }
            
          }
        })}
      </div>
       


        {/* heading & category */}
          <div className="heading pilot">
          <div className='pre-heading'><h3 className='heading-text'>INFINITY</h3>&nbsp;<h3 className='heading-text2'>Pilot</h3></div>
          {/* <Link href="/store/pilot"><h5 className='heading-text-normal' >View All <MdKeyboardArrowRight className='heading-icon'/></h5></Link> */}
        </div>

      <div className="product-container">
        {products.map((product) => {
          if(product.category == "pilot") {
            if (pilot < 3) {
              pilot++
              return <div key={product._id} className="product-position"><Product key={product._id} product={product}/></div>
            } else if (pilot === 3) {
              pilot++
              return <Link className='product-position' href="/store/pilot"><MoreProduct/></Link>
            }
          }
        })}
      </div>
      {/* heading & category */} 

      {/* heading & category */}
      <div className="heading Cabin-Crew">
          <div className='pre-heading'><h3 className='heading-text'>INFINITY</h3>&nbsp;<h3 className='heading-text2'>Cabin Crew</h3></div>
          {/* <Link href="/store/cabin-crew"><h5 className='heading-text-normal' >View All <MdKeyboardArrowRight className='heading-icon'/></h5></Link> */}
        </div>
        
      <div className="product-container">
        {products.map((product) => {
          if(product.category == "cabin-crew") {
            if (CabinCrew < 3) {
              CabinCrew++
              return <div key={product._id} className="product-position"><Product key={product._id} product={product}/></div>
            } else if (CabinCrew === 3) {
              CabinCrew++
              return <Link className='product-position' href="/store/cabin-crew"><MoreProduct/></Link>
            }
          }
        })}
      </div>
      {/* heading & category */} 

       {/* heading & category */}
       <div className="heading Decorations">
          <div className='pre-heading'><h3 className='heading-text'>INFINITY</h3>&nbsp;<h3 className='heading-text2'>Decorations</h3></div>
          {/* <Link href="/store/decorations"><h5 className='heading-text-normal' >View All <MdKeyboardArrowRight className='heading-icon'/></h5></Link> */}
        </div>
        
      <div className="product-container">
        {products.map((product) => {
          if(product.category == "decorations") {
            if (Decorations < 3) {
              Decorations++
              return <div key={product._id} className="product-position"><Product key={product._id} product={product}/></div>
            } else if (Decorations === 3) {
              Decorations++
              return <Link className='product-position' href="/store/decorations"><MoreProduct/></Link>
            }
          }
        })}
      </div>
      {/* heading & category */} 

      {/* heading & category */}
      <div className="heading others">
          <div className='pre-heading'><h3 className='heading-text'>INFINITY</h3>&nbsp;<h3 className='heading-text2'>Extra</h3></div>
          {/* <Link href="/store/extra"><h5 className='heading-text-normal' >View All <MdKeyboardArrowRight className='heading-icon'/></h5></Link> */}
        </div>
        
      <div className="product-container">
        {products.map((product) => {
          if(product.category != "decorations" && product.category != "cabin-crew" && product.category != "pilot" && product.category != "aircraft-models" && product.category != "aircraft-models-16cm" && product.category != "aircraft-models-20cm" ) {
            if (others < 3) {
              others++
              return <div key={product._id} className="product-position"><Product key={product._id} product={product}/></div>
            } else if (others === 3) {
              others++
              return <Link className='product-position' href="/store/extra"><MoreProduct/></Link>
            }
          }
        })}
      </div>
      {/* heading & category */} 

      <style>{`
        
        .pilot {
          display: ${pilot > 0 ? 'flex' : 'none'};
        }
        .Cabin-Crew {
          display: ${CabinCrew > 0 ? 'flex' : 'none'};
        }
        .Aircraft-models {
          display: ${AircraftModels > 0 ? 'flex' : 'none'};
        }
        .Aircraft-models20 {
          display: ${AircraftModels20 > 0 ? 'flex' : 'none'};
        }
        .Aircraft-models16 {
          display: ${AircraftModels16 > 0 ? 'flex' : 'none'};
        }
        .Decorations {
          display: ${Decorations > 0 ? 'flex' : 'none'};
        }
        .others {
          display: ${others > 0 ? 'flex' : 'none'};
        }
      `}</style>
      <Footer/>
      <WhatsAppButton/>
    </div>
  )
};

export const revalidate = 30;

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
