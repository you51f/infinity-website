"use client"
import React from 'react'
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const AnimatedNumber = ({ value }) => {
    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger the animation only once when it enters the viewport
        threshold: 0.1, // Percentage of the box visible in the viewport to trigger the animation
        config: { duration: 10000 }, // Adjust the duration (in milliseconds) to control the speed of the animation
      });
    
      const animatedValue = useSpring({
        number: inView ? value : 0,
        from: { number: 0 },
      });
  return (
    <div ref={ref}>
        <animated.span >
        {animatedValue.number.to((val) => Math.floor(val))}
      </animated.span>
    </div>
  )
}

export default AnimatedNumber