import Image from "next/image";
import React from "react";

import herobg from "@/app/assets/images/hero-bg.png";
import HeroLinks from "./hero-links";

function Hero() {
  return (
    <div className='h-[40vh] sm:h-[60vh] lg:h-[65vh] relative w-full lg:px-10 px-4'>
      <Image src={herobg} className='z-0' alt='Hero Background Image' fill />

      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-30' />

      <div className='absolute bottom-4 lg:bottom-6 md:w-full flex items-center justify-center'>
        <HeroLinks />
      </div>
    </div>
  );
}

export default Hero;
