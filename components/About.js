import { motion } from "framer-motion";
import aboutForge from "../public/about/aboutForge.jpeg";
import React from "react";
import Image from "next/image";

function About({ h1, h2, h3, p1, p2, p3, p4, image }) {
  return (<div>
    <section className="about-wrap">
      <h1 className="heading">{h1}</h1>
      <h2 className="heading-two">{h2}</h2>
      
      <div className="line" />
      
      <div>
        <p className="p1">{p1}</p>
        <p className="p2">{p2}</p>
      </div>

      
    </section>
    <motion.div
        whileInView={{
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        viewport={{
          once: true,
        }}
        className='about-image-wrap'
      >
        <Image
          className="about-image"
          src={image}
          alt="about image"
          width={800}
          height={800}
        />
      </motion.div>
      
    </div>
  );
}

export default About;
