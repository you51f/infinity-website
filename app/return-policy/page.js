import React from 'react'
import { Footer, Header, ProductInfo } from '@/app/components';

const ReturnPolicy = () => {
  return (
    <div>
        <Header/>
        <div className='privacy'>
        <h1 className='privacy-title'>Return Policy</h1>
        <h4 className='privacy-text'>We strive to ensure the quality of our products and your satisfaction with every purchase. If you receive a product that is damaged or broken, please notify us within one week of receiving the item. The damaged product must be returned in its original packaging as received by the customer.</h4>
        <h4 className='privacy-text'>Upon receiving the returned product, we will initiate a refund within 48 hours. Alternatively, if the customer prefers, we can arrange an exchange for the same type of product. Please note that we only cover the cost of return shipping for damaged or incorrectly shipped products. For other cases, the customer is responsible for the return shipping fees.</h4>
        <h4 className='privacy-text'>Please be aware that customized products, once the customer has confirmed the design, material, size, or other specifications, are not eligible for return.</h4>
        <h4 className='privacy-text'>If you have any concerns or inquiries regarding returns or refunds, please feel free to reach out to our sales department at sales@infinitycoltd.com. We are dedicated to providing a seamless shopping experience for all our customers.</h4>
        </div>
        <Footer/>
    </div> 
  )
}

export default ReturnPolicy