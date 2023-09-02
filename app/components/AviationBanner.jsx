import React , { useState, useEffect } from 'react'

const AviationBanner = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
      '/images/avbanner1.png',
      '/images/avbanner2.png'
    ];
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 5000);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      <div className="slider-container aviation">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-image ${currentImage === index ? 'active' : ''} ${currentImage === (index + 1) % images.length ? 'previous' : ''}`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
        <div className='new-banner-text aviation'>
          <h1 className='banner-text'>INFINITY SERVICES</h1>
          {/* <span className='banner-space'></span>
          <p className='banner-sub-text'>Take You To Sky</p> */}
        </div>
      </div>
    );
}

export default AviationBanner