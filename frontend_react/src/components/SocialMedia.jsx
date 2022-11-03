import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <ul className="flex flex-row">
      <li className="ml-[2.4rem] text-4xl">
        <a href="https://linkedin.com/in/isaiahsimon101/" className="flex" target="_blank" rel='noreferrer'>
          <FaLinkedinIn className="fill-primary hover:fill-white" />
        </a>
      </li>
      <li className="ml-[2.4rem] text-4xl">
        <a href="https://github.com/IsaiahSimon" target="_blank" rel='noreferrer'>
          <BsGithub className="fill-primary hover:fill-white" />
        </a>
      </li>
      <li className="ml-[2.4rem] text-4xl">
        <a href="https://twitter.com/isimondev" target="_blank" rel='noreferrer'>
          <BsTwitter className="fill-primary hover:fill-white" />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
