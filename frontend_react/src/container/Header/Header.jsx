import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <section className="hero min-h-screen bg-base-300" >
      {/* <div className="hero-content flex lg:flex-row-reverse"> */}
      {/* <div className="flex items-center max-w-1600px pt-[140px] px-[6rem] pb-[270px] lg:py-[3rem] lg:pr-[7em] lg:pl-0 md:flex md:items-center md:justify-center ss:py-[2em] ss:px-0"> */}
      <div className="flex items-center">
        <div className="max-w-[100%] min-w-0 p-9">
          <h1 className="xl:text-[6.5rem] lg:text-[4.5rem] text-[3.5rem] tracking-tight font-bold text-gradient font-Maven">Hi. I'm Isaiah.</h1>
          <h2 className="xl:text-[4.5rem] lg:text-[2.5rem] text-[1.5rem] tracking-tight font-bold text-gradient font-Maven leading-normal">I build things for the web.</h2>
          <p className="font-Montserrat text-softWhite text-[1.3rem] max-w-[580px] mt-[1.3em] mb-[1.3em] leading-normal">I’m a software engineer specializing in building exceptional digital experiences. Currently, open to new opportunities.</p>
          <button className="btn bg-transparent outline-secondary outline-2 outline rounded-none text-secondary hover:bg-secondary hover:text-black">Contact me!</button>
        </div>
        <div className="max-w-[100%] min-w-0">
          <img src={images.profile} className="p-7 shadow-2xl md:h-[555px] md:max-w-[555px] md:m-auto w-[100%] relative" />
        </div>
      </div>
    </section>
  );
};

export default AppWrap(Header, 'home');
