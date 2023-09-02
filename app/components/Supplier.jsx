import React from 'react'

const Supplier = () => {
  return (
    <div>
       {/* heading */}
       <div className="heading">
        <div className='pre-heading'><h3 className='heading-text'>Our</h3>&nbsp;<h3 className='heading-text2'>Suppliers</h3></div>
        {/* <h5 className='heading-text-normal'>View All <MdKeyboardArrowRight className='heading-icon'/></h5> */}
      </div>
      {/* heading */}
      <div className="supplier-container">
        <div className="supplier-image1"></div>
        <div className="supplier-image2"></div>
        <div className="supplier-image3"></div>
      </div>
    </div>
  )
}

export default Supplier