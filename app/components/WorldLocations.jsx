"use client"
import React from 'react'
import {IoLocationSharp} from 'react-icons/io5'

const WorldLocations = () => {
  return (
    <div>
        <div className="location-container">
            <div className="location-row">
                <div className="location-box">
                    <IoLocationSharp className="location-icon1" />
                    <div className="location-text">Floor 4, Shunxinglong Workshop, No.8 Yushan Road, Xincuoliao Industrial Zone, Xinjin Street, Longhu district, Shantuo city, Guangdong Povince</div>
                </div>
                <div className="location-box">
                    <IoLocationSharp className="location-icon2" />
                    <div className="location-text">Elo-Obour Square Front of Gate No.4 A.U.C South Investors, Zizina, New Cairo 1, Cairo Government 11835, Egypt.</div>
                </div>
            </div>
            <div className="location-row">
                <div className="location-box">
                    <IoLocationSharp className="location-icon3" />
                    <div className="location-text">Malaysia, Jalan Us 1 off Jalan Ikram-uniten taman unipark suira, 43000 Kajang Selangor darul </div>
                </div>
                <div className="location-box">
                    <IoLocationSharp className="location-icon4" />
                    <div className="location-text">Al Shargi Street, Arkaweet squ “50”, Khartoum.</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorldLocations