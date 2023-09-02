import Link from 'next/link'
import React from 'react'

const Advertising = () => {
  return (
    
      <div className='advertising-container'>
      <div className='advertising-container2'>
        <div className="advertising-text-container">
          <h2 className='advertising-sub-text'>Customize Whatever You Want</h2>
          <h2 className='advertising-sub-text2'>We manufacture All your wanted
Aviation Accessories based on your customization. </h2>
          <Link href={'/contact'} className='sec-btn3'>
            Go to page
          </Link>
        </div>
        <div className='advertising-img'></div>
        {/* <Image src="/images/work-sec-image.png" width={200} height={200}/> */}
      </div>
     
    </div>

  )
}

export default Advertising