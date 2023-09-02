import React from 'react'
import { LuWrench } from 'react-icons/lu';
import { SlBadge } from 'react-icons/sl';
import { FaPeopleGroup } from 'react-icons/fa6';

const Service = () => {
 
  return (
    <div className='service-container'>
      <div className='service-container2 service-color1'>
        <div className="service-text-container">
          <h2 className='service-text'>Repair Parts</h2>
          <h2 className='service-text2'>We Provide All the best parts of Repair For Aircrafts</h2>
        </div>
        <div className="service-icon"><LuWrench/></div>
      </div>
      <div className='service-container2 service-color2'>
        <div className="service-text-container">
          <h2 className='service-text'>Quality</h2>
          <h2 className='service-text2'>We Provide High Quality Spare parts And Items.</h2>
        </div>
        <div className="service-icon"><SlBadge/></div>
      </div>
      <div className='service-container2 service-color3'>
        <div className="service-text-container">
          <h2 className='service-text'>Consulting</h2>
          <h2 className='service-text2'>We Provide Consulting For Buying, Selling, Inspection.</h2>
        </div>
        <div className="service-icon"><FaPeopleGroup/></div>
      </div>
    </div>
  )
}

export default Service