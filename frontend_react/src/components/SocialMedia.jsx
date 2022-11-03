import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <ul className="flex flex-row">
      <li className="ml-[2.4rem] text-4xl">
        <a href="https://linkedin.com/in/isaiahsimon101/" className="flex">
          <FaLinkedinIn className="fill-primary hover:fill-white" />
        </a>
      </li>
      <li className="ml-[2.4rem] text-4xl">
        <a href="https://github.com/IsaiahSimon">
          <BsGithub className="fill-primary hover:fill-white" />
        </a>
      </li>
      <li className="ml-[2.4rem] text-4xl">
        <a href="https://twitter.com/isimondev">
          <BsTwitter className="fill-primary hover:fill-white" />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
