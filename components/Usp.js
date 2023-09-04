import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const UspImage = ({ uspImg }) => {
  return (
    <>
      <motion.div
        whileInView={{
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 0.75,
          delay: 0.5,
        }}
        viewport={{
          once: true,
        }}
      >
        <Image
          className="usp-image"
          src={uspImg}
          alt="usp"
          width={800}
          height={800}
        />
      </motion.div>
    </>
  );
};

function Usp() {
  return (
    
    <div className="usp-wrap">
    
        <div className="usp-image-wrap">
          <UspImage uspImg="/usp.webp" />
        </div>
        <div className="usp-orange-block"></div>
        <motion.p
          whileInView={{ x: 0 }}
          initial={{ x: -100 }}
          transition={{ type: "spring", mass: 2, stiffness: 400, damping: 100 }}
          viewport={{once: true}}
          
          className="usp-orange-image-text"
        >
          WE MAKE THINGS SLOWLY, TO ALLOW FLAVOURS AND TEXTURES TO DEVELOP IN
          OUR BREAD.
        </motion.p>
      
      
      <p className="usp-text">
        {" "}
        Freshly baked bread is a universal pleasure that we love to share. Our
        bread classes will teach you how to bring the bakery into your kitchen,
        learning to bake different breads and pasteries with our founder Martha.
      </p>
      
      <div className="usp-image-wrap2">
        <UspImage uspImg="/usp2.webp" />
      </div>
      <div className="usp-blue-block"></div>
      <motion.p
          whileInView={{ x: 0 }}
          initial={{ x: 100 }}
          transition={{ type: "spring", mass: 2, stiffness: 400, damping: 100 }} 
          viewport={{once: true}} className="usp-blue-image-text">
        WE TAKE OUR TIME, WORKING WITH GOOD INGREDIENTS. THIS IS LOCAL, MADE FOR
        YOU, BY US.
        </motion.p>
    </div>
  );
}

export default Usp;
