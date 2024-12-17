import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  // Hook to get scroll progress
  const { scrollYProgress } = useScroll();

  // Define the vertical position transformation based on scroll
  const yPos = useTransform(scrollYProgress, [0, 1], [0, 400]); // Adjust the 400 value to control movement range

  return (
    <section className="flex w-full h-screen mx-auto">
      {/* Main Container */}
      <div
        className={`${
          styles?.paddingX || ""
        } absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-center gap-5`}
      >
        {/* Left Gradient and Moving Shape */}
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Round Shape */}
          <motion.div
            className="w-5 h-5 rounded-full bg-[#31aade]"
            style={{ y: yPos }} // Attach y-axis motion
          ></motion.div>

          {/* Gradient Line */}
          <div className="w-1 sm:h-80 h-40 bg-light-blue-gradient"></div>
        </div>

        {/* Hero Text */}
        <div className="z-10">
          <h1 className={`${styles?.heroHeadText || ""} text-white`}>
            Hi, I'm <span className="text-[#31aade]">SHIBINSHA</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2 text-lg`}>
            I develop 3D visuals, user
            <br className="block sm:hidden" />
            interfaces, and web applications.
          </p>
        </div>
      </div>

      {/* 3D Canvas */}
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
