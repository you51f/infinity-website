import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const SectionOfWork = () => {
  return (
    <div className='work-sec'>
      <div className='work-sec2'>
      <div className='work-sec-container'>
        <div className="work-sec-text-container">
          <h2 className='banner-sub-text2'>INFINITY</h2>
          <h2 className='banner-sub-text2'>Provides All Spare Parts for Aircraft.</h2>
          <Link href={'/aviation'} className='sec-btn1'>
            Go to page
          </Link>
        </div>
        <div className='work-sec-img'></div>
        {/* <Image src="/images/work-sec-image.png" width={200} height={200}/> */}
      </div>
      <div className='work-sec-container2'>
        <div className="work-sec-text-container">
          <h2 className='banner-sub-text2'>INFINITY</h2>
          <h2 className='banner-sub-text2'>Manufacture All Aviation Stuff.</h2>
          <Link href={'/contact'} className='sec-btn2'>
            Go to page
          </Link>
        </div>
        <div className='work-sec-img2'></div>
        {/* <Image src="/images/work-sec-image.png" width={200} height={200}/> */}
      </div>
    </div>
    </div>
  )
}

export default SectionOfWork