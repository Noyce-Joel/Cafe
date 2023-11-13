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
        <UspImage uspImg="/french-toast.webp" />
      </div>
      <div className="usp-orange-block"></div>
      <motion.p
        whileInView={{ x: 0 }}
        initial={{ x: -100 }}
        transition={{ type: "spring", mass: 2, stiffness: 400, damping: 100 }}
        viewport={{ once: true }}
        className="usp-orange-image-text"
      >
        WE CRAFT OUR PRODUCTS DELIBERATELY, PROVIDING AMPLE TIME FOR FLAVORS AND
        TEXTURES TO UNFOLD IN OUR BREAD.
      </motion.p>

      <p className="usp-text">
        {" "}
        Indulging in freshly baked bread is a joy universally appreciated, and
        we delight in sharing this pleasure. Join our bread classes, where our
        founder Bready Bread will guide you in bringing the essence of the bakery into
        your kitchen.
      </p>

      <div className="usp-image-wrap2">
        <UspImage uspImg="/almond-croissants.webp" />
      </div>
      <div className="usp-blue-block"></div>
      <motion.p
        whileInView={{ x: 0 }}
        initial={{ x: 100 }}
        transition={{ type: "spring", mass: 2, stiffness: 400, damping: 100 }}
        viewport={{ once: true }}
        className="usp-blue-image-text"
      >
        WE ARE PATIENT, WORKING WITH GREAT INGREDIENTS. LOCAL PRODUCTS, MADE FOR
        YOU, BY US.
      </motion.p>
    </div>
  );
}

export default Usp;
