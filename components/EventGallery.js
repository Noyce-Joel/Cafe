import React, { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import CurryNightImg from "../public/events/CurryNightImg.webp";
import MoulesFritesImg from "../public/events/MoulesFritesImg.webp";
import DumplingsImg from "../public/events/DumplingsImg.webp";
import JamaicanImg from "../public/events/JamaicanImg.webp";
import ItalianImg from "../public/events/ItalianImg.webp";
import About from "../components/About";
import { copy } from "../public/copy/copy";
import aboutForge from "../public/about/aboutForge.jpeg";
import Image from "next/image";
import Link from "next/link";

const eventsElements = [
  {
    id: 1,
    image: CurryNightImg,
    name: "CURRY NIGHT",
    date: "12/04/23",
    time: "6.00pm - 10.30pm",
    description:
      "We`ve been waiting for this one. I hope you like your curries hot. We have a real treat for you here.",
  },
  {
    id: 2,
    image: MoulesFritesImg,
    name: "MOULES FRITES NIGHT",
    date: "26/05/23",
    time: "6.00pm - 10.30pm",
    description:
      "Our Head Chef Flo is treating is all to a moules frites night, we could not be more excited about it!",
  },
  {
    id: 3,
    image: DumplingsImg,
    name: "DUMPLINGS NIGHT",
    date: "23/06/23",
    time: "6.00pm - 10.30pm",
    description:
      "A first for us, it’s dumpling night baby! The ultimate tapas style menu filled with gorgeous hand made dumplings.",
  },
  {
    id: 4,
    image: JamaicanImg,
    name: "JAMAICAN NIGHT",
    date: "10/07/23",
    time: "6.00pm - 10.30pm",
    description:
      "A trip to the Caribbean! Expect big bold flavours and comforting dishes!",
  },
  {
    id: 5,
    image: ItalianImg,
    name: "ITALIAN NIGHT",
    date: "15/08/23",
    time: "6.00pm - 10.30pm",
    description:
      "After the fantastic response to our last Italian night, we are bringing it back and escaping to the Mediterranean once again!",
  },
];

const container = {
  whileInView: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};
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

const words = {
  hidden: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,

    transition: {
      duration: 1.5,
      type: "spring",
      mass: 0.7,
      damping: 50,
    },
  },
};

function EventGallery(props) {
  return (
    <motion.div className="item-event-wrap">
      {eventsElements.map((event, index) => (
        <motion.div
          variants={container}
          whileInView="whileInView"
          initial="hidden"
          className="item"
          viewport={{ once: true }}
          key={index}
        >
          <motion.div
            viewport={{ once: true }}
            key={event.id}
            variants={gallery}
            className="item-card-wrap"
            
          >
            <motion.div
              variants={gallery}
              key={event.url}
              className="item-image-wrap"
            >
              <Image
                loading="lazy"
                alt="event-image"
                height={500}
                width={500}
                src={event.image}
                priority={false}
                className="item-image"
              />
            </motion.div>
            <motion.div className="item-info">
              <motion.h1
                variants={words}
                className="item-name"
                key={event.name}
              >
                {event.name}
              </motion.h1>

              <motion.h2 className="item-price">{event.date} <motion.button variants={words} className="hover:scale-[1.05] book-event">
                BOOK NOW
              </motion.button></motion.h2>
              <motion.div className="item-card-description">
                <motion.p>{event.description}</motion.p>
              </motion.div>
              
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default EventGallery;
