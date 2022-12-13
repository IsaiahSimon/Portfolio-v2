import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="HEAD-TEXT text-7xl">
        My
        <span className="TEXT-BLUE-GRADIENT"> Expertise</span>
      </h2>

      <div className="APP__PROFILES">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opactiy: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3, type: "tween" }}
            className="APP__PROFILE-ITEM"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="BOLD-TEXT" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="P-TEXT" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about", "bg-neutral");
