import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

  // Fetch data from Sanity
  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    // Trigger shuffle animation of cards
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      // Reset the cards
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <section className="flex-1 w-full flex-col pt-0 mt-0 bg-base-300 min-h-screen">
      <h2 className="HEAD-TEXT text-7xl">
        My <span className="TEXT-BLUE-GRADIENT">Portfolio </span>
      </h2>
      {/* Filter through the works */}
      <div className="APP__FILTER">
        {["Featured Project", "Side Project", "All"].map(
          (item, index) => (
            <div
              className={`btn bg-transparent text-primary outline-primary hover:text-black hover:outline-secondary outline-2 outline rounded-none  hover:bg-primary ${activeFilter === item ?  "bg-[#595050] text-black" : "" }`}
              key={index}
              onClick={() => handleWorkFilter(item)}
            >
              {item}
            </div>
          )
        )}
      </div>

      {/* Map over data from Sanity */}
      <motion.div
        className="APP__WORK-PORTFOLIO"
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        {filterWork.map((work, index) => (
          <div
            className="APP__WORK-ITEM APP__FLEX"
            key={index}
          >
            <div className="APP__WORK-IMG APP__FLEX">
              <img
                className="w-full h-full rounded-lg object-cover lg:h-[230px]"
                src={urlFor(work.imgUrl)}
                alt={work.name}
              />

              {/* Desktop  */}
              <motion.div
                className="APP__WORK-HOVER APP__FLEX"
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: "easeInOut",
                  staggerChildren: 0.5,
                }}
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    className="APP__FLEX"
                    whileHover={{ scale: [0, 1] }}
                    whileInView={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillEye className="w-1/2 h-1/2 fill-white" />
                  </motion.div>
                </a>

                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    className="APP__FLEX"
                    whileHover={{ scale: [0, 1] }}
                    whileInView={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                  >
                    <AiFillGithub className="w-1/2 h-1/2 fill-white" />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="APP__WORK-CONTENT APP__FLEX">
              <h4 className="BOLD-TEXT">{work.title}</h4>
              <p className="P-TEXT" style={{ marginTop: 10 }}>
                {work.description}
              </p>

              <div className="APP__FLEX outline outline-neutral bg-primary py-2 px-4 rounded-lg absolute top-[-25px]">
                <p className="P-TEXT-TAG">{work.tags[0]}</p>
              </div>

              {/* Mobile */}
              <div className="APP__WORK-BUTTONS" >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <AiFillEye className="w-9 h-9 fill-primary hover:fill-white" />
                </a>

                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <AiFillGithub className="w-9 h-9 fill-primary hover:fill-white" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Work, 'APP__WORKS'),
  'work',
  'bg-black',
);
