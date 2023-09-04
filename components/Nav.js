import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Bread from '../public/svgs/bread'
import Coffee from '../public/svgs/coffee'
import At from '../public/svgs/at'
import Wine from '../public/svgs/wine'
import { AnimatePresence, motion } from "framer-motion";

function Nav() {
  const [navColor, setNavColor] = useState("#FFFFFF");
  const [textColor, setTextColor] = useState("#000000");
  const [opacity, setOpacity] = useState();
  const ref = useRef();

  const listenScrollEvent = () => {
    const pos = ref.current.getBoundingClientRect();
    pos.top === 0 ? setNavColor("#024252") : setNavColor("#FFFFFF");
    pos.top === 0 ? setTextColor("#FFFFFF") : setTextColor("#000000");
    pos.top === 0 ? setOpacity(0) : setOpacity();
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const Btn = ({ page, svgSrc, pageUrl, Icon }) => {
    return (
      <Link href={pageUrl}>
        <button className="group">
          <div
            style={{
              fill: textColor,
              stroke: textColor,
            }}
            className="group-hover:animate-bounce"
          >
            {/* <Image
              style={{ fill: textColor, stroke: textColor }}
              className="svg"
              src={svgSrc}
              alt="SVG"
              width={27}
              height={27}
            /> */}
            <Icon style={{stroke: textColor}}/>
          </div>
          <div
            style={{ opacity: opacity }}
            className="dot group-active:scale-[1.5] group-hover:opacity-100 group-hover:scale-125"
          />
          <p
            style={{ color: textColor }}
            className="duration-100 group-hover:scale-110"
          >
            {page}
          </p>
        </button>
      </Link>
    );
  };

  const Menu = () => {
    const [open, setOpen] = useState();
    const menuContainer = {
      whileInView: {
        transition: {
          staggerChildren: 0.1,
          duration: 1,
          delayChildren: 0.5,
        },
      },
      exit: {
        transition: {
          staggerChildren: 0.1,
          duration: 1,
        },
      },
    };
    const listItems = {
      initial: {
        y: 100,
      },
      whileInView: {
        y: 0,
      },
      exit: {
        y: 100,
      },
      transition: {
        duration: 2,
        type: "spring",
        friction: 2000,
      },
    };

    const handleTimeOut = () =>
    setTimeout(() => {

    }, [4000])

    return (
      <div
        style={{
          backgroundColor: navColor,
          color: textColor,
        }}
        className="menu"
      >
        <button className="menu-btn" onClick={() => setOpen(true)}>
          MENU
        </button>
        <AnimatePresence mode="wait">
          {open && (
            <motion.div
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              exit={{
                x: -1000,
                transition: {
                  duration: 2,
                  delay: 0.7,
                  type: "spring",
                  friction: 1000,
                  staggerCHildren: 0.2,
                },
              }}
              transition={{
                duration: 1.8,
                delay: 0.2,
                type: "spring",
                mass: 1,
                damping: 20,
              }}
              className="menu-open"
            >
              <motion.button
                onClick={() => setOpen(false)}
                className="menu-close"
              >
                X
              </motion.button>
              <motion.ul
                variants={menuContainer}
                initial="initial"
                whileInView="whileInView"
                exit="exit"
                className="menu-list"
              >
                <motion.div className="menu-header-line">
                  <motion.li variants={listItems}>
                    <Link href="/">HOME</Link>
                  </motion.li>
                </motion.div>
                <motion.div className="menu-header-line">
                  <motion.li variants={listItems}>
                    <Link href="/bakery">THE BAKERY</Link>
                  </motion.li>
                </motion.div>
                <motion.div className="menu-header-line">
                  <motion.li variants={listItems}>
                    <Link href="/cafe">THE CAFE</Link>
                  </motion.li>
                </motion.div>
                <motion.div className="menu-header-line">
                  <motion.li variants={listItems}>
                    <Link href="/events">EVENTS</Link>
                  </motion.li>
                </motion.div>
                <motion.div className="menu-header-line">
                  <motion.li variants={listItems}>
                    <Link href="/contact">CONTACT</Link>
                  </motion.li>
                </motion.div>

                
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      <Menu />
      <nav
        id="navBar"
        style={{
          backgroundColor: navColor,
          color: textColor,
         
          transition: "100ms",
        }}
        className="nav-wrap"
        ref={ref}
      >
        {/* <Btn page="THE BAKERY" pageUrl={"/bakery"} svgSrc="../svgs/bread.svg" />
        <Btn page="THE CAFE" pageUrl={"/cafe"} svgSrc="../svgs/coffee.svg" />
        <Btn page="EVENTS" pageUrl={"/events"} svgSrc="../svgs/wine.svg" />
        <Btn page="CONTACT" pageUrl={"/contact"} svgSrc="../svgs/at.svg" /> */}
       <Btn page="THE BAKERY" pageUrl={"/bakery"} Icon={Bread} /> 
       <Btn page="THE CAFE" pageUrl={"/cafe"} Icon={Coffee} />
       <Btn page="EVENTS" pageUrl={"/events"} Icon={Wine} />
       <Btn page="CONTACT" pageUrl={"/contact"} Icon={At}/> 
      </nav>
    </>
  );
}

export default Nav;
