import React, { useEffect, useState } from "react";
import Header from "./Header";
import Title from "./Title";
import Nav from "./Nav";
import Footer from "./Footer";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Phone from "./Phone";
function Layout({ children }) {
  const layout = {
    show: {
      transition: {
        staggerChildren: 0.35,
        
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 1
      }
    },
   
    
   
  };

  
  return (
    <AnimatePresence>
      <motion.div initial='hidden' animate='show' exit='exit' variants={layout}>
        <motion.div variants={item} >
          <Header />
          <Title />
          <Nav />
          <motion.main>{children}</motion.main>
          
          <Footer />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Layout;
