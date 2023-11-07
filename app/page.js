
import { imageSlidersQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import Image from 'next/image'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Header, HeroBanner, Service, Product, WhatsAppButton, SectionOfWork, Footer, Advertising, TeamMember, Supplier, Review } from './components'


export default async function Home() {
  const sliderImages = await sanityFetch(imageSlidersQuery); 
  // console.log(sliderImages);
  return (
    <main >
      <Header/>
      <HeroBanner sliderImages={sliderImages}/>
      <SectionOfWork/>
      {/* heading & category */}
      <div className="heading">
          <div className='pre-heading'><h3 className='heading-text'>INFINITY</h3>&nbsp;<h3 className='heading-text2'>Reviews</h3></div>
          {/* <Link href="/store/aircraft-models"><h5 className='heading-text-normal' >View All <MdKeyboardArrowRight className='heading-icon'/></h5></Link> */}
        </div>
      <div className='review-main'>
        <Review />
      </div>
      {/* heading */}
      {/* <div className="heading">
        <div className='pre-heading'><h3 className='heading-text'>Get unique stuff from our</h3>&nbsp;<h3 className='heading-text2'>Infinity Store</h3></div>
        <Link href="/store"><h5 className='heading-text-normal' >View All <MdKeyboardArrowRight className='heading-icon'/></h5></Link>
      </div> */}
      {/* heading */}
      {/* <Product/> */} 
      {/* <Advertising/> */}
      {/* <Service /> */}
      {/* <TeamMember/> */}
      {/* <Supplier/> */}
      <Footer/>
      <WhatsAppButton />
    </main>
  ) 
}

