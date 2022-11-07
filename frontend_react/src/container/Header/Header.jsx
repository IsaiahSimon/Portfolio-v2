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
    <section id="home" className="bg-black min-h-screen flex w-full justify-center " >
      <div className="APP__HEADER ">
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
