import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, config } from "framer-motion";

function Title() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 825], [0, 900]);
  const title = 'BAKEHOUSE';
  const banner = {
    animate: {
      transition: {
        delayChildren: 0.7,
        staggerChildren: 0.05,
      },
    },
    whileInView: {
      viewport: 'once'
    }
  };
  
  const letterAni = {
    initial: { y: 200 },
    animate: {
      y: 0,
      transition: {
        type: 'spring',
       
        duration: 1.7,
      },
    },
  };
  return (
    
      <motion.div variants={banner} initial='initial' animate='animate' className="circles-wrap">
        <Link href='/'>
        <motion.div className="title">
          {[...title].map((letter, index) => (
            <motion.span key={index} variants={letterAni}>
              <p >{letter}</p>
            </motion.span>
          ))}
        </motion.div>
        </Link>
        <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          
          transition={{
            type: "spring",
            stiffness: 20, 
            mass: 1.5,
            delay: 0.4,
          }}
          style={{ y: y1, x: 0 }}
          className="circles"
        >
          <div className="circle-1" />
          <div className="circle-2" />
          <div className="circle-3" />
        </motion.div>
      </motion.div>
   
  );
}

export default Title;
