"use client"
import Image from 'next/image'
import Link from 'next/link'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Header, HeroBanner, Service, Product, WhatsAppButton, SectionOfWork, Footer, Advertising, TeamMember, Supplier } from './components'


export default function Home() {
  return (
    <main >
      <Header/>
      <HeroBanner/>
      <SectionOfWork/>
      {/* heading */}
      <div className="heading">
        <div className='pre-heading'><h3 className='heading-text'>Get unique stuff from our</h3>&nbsp;<h3 className='heading-text2'>Infinity Store</h3></div>
        <h5 className='heading-text-normal'>View All <MdKeyboardArrowRight className='heading-icon'/></h5>
      </div>
      {/* heading */}
      {/* <Product/> */} 
      <Advertising/>
      <Service />
      <TeamMember/>
      <Supplier/>
      <Footer/>
      <WhatsAppButton />
    </main>
  ) 
}

