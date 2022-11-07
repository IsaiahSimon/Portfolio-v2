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
    // <section className="hero min-h-screen bg-base-300" >
    <section className="bg-black min-h-screen flex w-full justify-center" >
      {/* <div className="hero-content flex lg:flex-row-reverse"> */}
      {/* <div className="flex items-center max-w-1600px pt-[140px] px-[6rem] pb-[270px] lg:py-[3rem] lg:pr-[7em] lg:pl-0 md:flex md:items-center md:justify-center ss:py-[2em] ss:px-0"> */}
      <div className="APP__HEADER">
        <div>
          <div className="">
            <h1 className="xl:text-[6.5rem] lg:text-[4.5rem] text-[3.5rem] tracking-tight font-bold TEXT-GRADIENT font-maven">Hi. I'm Isaiah.</h1>
            <h2 className="xl:text-[4.5rem] lg:text-[2.5rem] text-[1.5rem] tracking-tight font-bold TEXT-GRADIENT font-maven leading-normal">I build things for the web.</h2>
            <p className="font-Montserrat text-softWhite text-[1.3rem] max-w-[580px] mt-[1.3em] mb-[1.3em] leading-normal">I’m a software engineer specializing in building exceptional digital experiences. Currently, open to new opportunities.</p>
            <a href='#contact' className="btn bg-transparent outline-primary outline-2 outline rounded-none text-primary hover:bg-secondary hover:outline-secondary hover:text-black">Contact me!</a>
          </div>

        </div>

        <div>
            <img src={images.profile} />
        </div>
      </div>
    </section>
  );
};

export default AppWrap(Header, 'home');
