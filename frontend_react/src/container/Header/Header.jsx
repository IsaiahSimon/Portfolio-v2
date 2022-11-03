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
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={images.profile} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-[6.5rem] tracking-tight font-bold text-gradient font-Maven">Hi. I'm Isaiah.</h1>
          <h2 className="text-5xl tracking-tight font-bold text-gradient font-Maven leading-normal">I build things for the web.</h2>
          <p className="font-Montserrat text-white text-[1.3rem] max-w-[580px] mt-[1.3em] mb-[1.3em] leading-normal">I’m a software engineer specializing in building exceptional digital experiences. Currently, open to new opportunities.</p>
          <button className="btn bg-transparent outline-secondary outline-2 outline rounded-none text-secondary hover:bg-secondary hover:text-black">Contact me!</button>
        </div>
      </div>
    </section>
  );
};

export default AppWrap(Header, 'home');
