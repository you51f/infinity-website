"use client"
import React  from 'react'
import { Advertising, Product } from '../components'
import { BiFilter } from 'react-icons/bi';
import { BiSolidDownArrow } from 'react-icons/bi';
import { useState } from 'react'

const store = () => {
  return (
    <div>
        <Advertising/>
        <button className='filter-btn'>
            <BiFilter className='filter-icon'/> Categories.All <BiSolidDownArrow/>
          </button>
        {/* heading */}
      <div className="heading">
        <div className='pre-heading'><h3 className='heading-text'>Infinity</h3>&nbsp;<h3 className='heading-text2'>Desktop Decoration</h3></div>
        {/* <h5 className='heading-text-normal'>View All <MdKeyboardArrowRight className='heading-icon'/></h5> */}
      </div>
      {/* heading */}
        <Product/>
        <Product/>
        {/* heading */}
      <div className="heading">
        <div className='pre-heading'><h3 className='heading-text'>Infinity</h3>&nbsp;<h3 className='heading-text2'>Uniforms</h3></div>
        {/* <h5 className='heading-text-normal'>View All <MdKeyboardArrowRight className='heading-icon'/></h5> */}
      </div>
      {/* heading */}
        <Product/>
        {/* heading */}
      <div className="heading">
        <div className='pre-heading'><h3 className='heading-text'>Infinity</h3>&nbsp;<h3 className='heading-text2'>Collections</h3></div>
        {/* <h5 className='heading-text-normal'>View All <MdKeyboardArrowRight className='heading-icon'/></h5> */}
      </div>
      {/* heading */}
        <Product/>
    </div>
  )
}

export default store