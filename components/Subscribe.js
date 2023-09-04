import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
const Form = () => {
  const banner = {
    whileInView: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      },
    },
  };

  const stagger = {
    whileInView: {
      y: 0,
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
      },
    },
    hidden: {
      y: 50,
      x: 15,
    },
    viewport: {
      once: true,
    },
  };

  return (
    <motion.div
      variants={banner}
      whileInView="whileInView"
      initial="hidden"
      animate="animate"
      viewport="viewport"
      
    >
      <form className="form-wrap">
        <motion.div>
          <div className="form-header-line">
            <motion.h1 variants={stagger}>SUBSCRIBE</motion.h1>
          </div>
          <div className="form-header-line">
            <motion.h1 variants={stagger}>TO OUR</motion.h1>
          </div>
          <div className="form-header-line">
            <motion.h1 variants={stagger}>NEWSLETTER</motion.h1>
          </div>
        </motion.div>
        <p>GET EXCLUSIVE OFFERS AND BAKERY NEWS DIRECT TO YOU</p>
       
        <div
          style={{
            border: "solid",
            borderRadius: "40px",
            borderColor: "gray",
            justifyContent: "space-between",
            display: "flex",
            padding: "5px",
            paddingInline: "10px",
            overflowX: "hidden",
            
          }}
          className="email-input"
          htmlFor="input"
        >
          <input
            id="input"
            placeholder="email"
            type="email"
            className="email"
          />
          <div>
            <PaperAirplaneIcon height={20} width={20} />
          </div>
        </div>
      </form>
    </motion.div>
  );
};

function Subscribe() {
  return (
    <div className="newsletter-wrap">
      <div className="subscribe">
        <Form />
      </div>
      <div className="newsletter-image-block">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          <Image
            className="newsletter-image"
            src="/newsletter-image.webp"
            height={340}
            width={340}
            alt="newsletter image"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Subscribe;
