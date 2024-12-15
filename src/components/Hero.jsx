import React from 'react'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {ComputersCanvas} from './canvas'
const Hero = () => {
  return (
    <section className=" flex w-full h-screen mx-auto ">
      {/* Main Container */}
      <div className={`${styles?.paddingX || ""} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-center gap-5`}>
        {/* Left Gradient and Shape */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#31aade]"></div>
          <div className="w-1 sm:h-80 h-40 bg-light-blue-gradient"></div>

        </div>

        {/* Hero Text */}
        <div className='z-10'>
          <h1 className={`${styles?.heroHeadText || ""} text-white`}>
            Hi, I'm <span className="text-[#31aade]">SHIBINSHA</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2 text-lg`}>
            I develop 3D visuals, user< br className="block sm:hidden" />
            interfaces, and web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  );
};

export default Hero;
