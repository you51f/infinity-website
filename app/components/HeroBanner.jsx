"use client"
import React , { useState, useEffect } from 'react'

const HeroBanner = () => {
    // <div>
    //   <div>
    //     <div className='banner'>
    //       <h1 className='banner-text'>INFINITY AVIATION</h1>
    //       <span className='banner-space'></span>
    //       <p className='banner-sub-text'>Take You To Sky</p>
    //     </div>
       
    //   </div>
    // </div>
    
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
      '/images/banner1.png',
      // '/images/banner2.png',
      // '/images/banner3.png',
      '/images/banner4.png',
      '/images/banner5.png'
    ];
    
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        console.log("Hello, world!");
      }, 5000);
    
      return () => {
        clearInterval(timer);
      };
    }, []);
    
    return (
      <div className="slider-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-image ${currentImage === index ? 'active' : ''} ${currentImage === (index + 1) % images.length ? 'previous' : ''}`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
        <div className='new-banner-text'>
          <h1 className='banner-text'>INFINITY Flight Horizons</h1>
          <span className='banner-space'></span>
          <p className='banner-sub-text'>Take You To Sky</p>
        </div>
      </div>
    );
};
export default HeroBanner