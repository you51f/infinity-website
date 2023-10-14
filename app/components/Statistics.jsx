"use client"
import React from 'react'
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { AnimatedNumber } from '.';
import { FaPeopleGroup } from 'react-icons/fa6';
import { PiChartLineUpBold } from 'react-icons/pi';
import { SlBadge } from 'react-icons/sl';

const Statistics = () => {
    
    
  return (
    <div>
        <div className="statistics-container">
        <div className="box" >
        <FaPeopleGroup className="about-icons"/>
      <span className="value">+<AnimatedNumber value={6000}/></span>
      <span className="label">Members & Customers</span>
    </div>
    <div className="box-mid">
        <PiChartLineUpBold className="about-icons"/>
      <span className="value"><AnimatedNumber value={20}/>%</span>
      <span className="label">Market Growth</span>
    </div>
    <div className="box">
        <SlBadge className="about-icons"/>
      <span className="value"><AnimatedNumber value={6}/></span>
      <span className="label">Factory Qualifications</span>
    </div>
      
      
    </div>
    </div>
  )
}

export default Statistics