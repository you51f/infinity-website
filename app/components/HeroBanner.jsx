"use client"
import React , { useState, useEffect } from 'react'
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from "@sanity/image-url";
import Image from 'next/image';

const HeroBanner = ({sliderImages}) => {
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
    const builder = imageUrlBuilder(client);
    // const images = [
    //   '/images/homepage2.webp',
    //   '/images/homepage1.webp',
    //   // '/images/banner2.png',
    //   // '/images/banner3.png',
    //   '/images/homepage3.webp'
    // ];
    
    const images = sliderImages
    // console.log(images);
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        // console.log("Hello, world!");
      }, 5000);
    
      return () => {
        clearInterval(timer);
      };
    }, []);
    
    return (
      <div className="slider-container">
        {images.map((imageData, index) => (
          <img
            key={index}
            className={`slider-image ${currentImage === index ? 'active' : ''} ${currentImage === (index + 1) % images.length ? 'previous' : ''}`}
            // style={{
            //   backgroundImage: `url(${builder.image(imageData.image && imageData.image[0]).width(1550).height(609.2).url()})`,
            // }}
            src={builder.image(imageData.image && imageData.image[0]).width(1550).height(609).url()}
            
            alt={imageData.image?.alt}
          />
        ))}
        {/* <div className='new-banner-text'>
          <h1 className='banner-text'>INFINITY Flight Horizons</h1>
          <span className='banner-space'></span>
          <p className='banner-sub-text'>Take You To Sky</p>
        </div> */}
      </div>
    );
};
export default HeroBanner