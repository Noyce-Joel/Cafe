import React from "react";
import {  motion } from "framer-motion";
import Image from "next/image";

const Photo = ({ image }) => {
  const gallery = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        mass: 0.4,
        damping: 20,
      },
    },
  };
  return (
    <motion.div>
      <motion.div variants={gallery} className="gallery-photo">
        <Image
          width={290}
          height={290}
          src={image}
          alt='bakery-image'
          style={{ borderRadius: "15px" }}
        />
      </motion.div>
    </motion.div>
  );
};

function BakeryGallery() {
  const container = {
    whileInView: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  };
  
  return (
   
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="whileInView"
        animate="animate"
        viewport={{once: true}}
        className="gallery-wrap"
      >
        <div className="gallery">
          <Photo image="/BakerImg.webp" />
          <Photo image="/BakerImg2.webp" />
          <Photo image="/BakerImg3.webp" />
          <Photo image="/BakerImg4.webp" />
          <Photo image="/BakerImg5.webp" />
          <Photo image="/BakerImg6.webp" />
        </div>
      </motion.div>
    
  );
}

export default BakeryGallery;
