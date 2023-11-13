import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const breads = [
  {
    id: 1,
    url: "/white.webp",
    name: "WHITE TOP",
    description:
      "A CLASSIC FROM THE VERY BEGINNING. INDULGE IN OUR SMOOTH WHITE SOURDOUGH, CRAFTED WITH A CAREFUL BLEND OF FLOURS",
    price: ["£2.10 / £3.40"],
  },
  {
    id: 2,
    url: "/brown.webp",
    name: "MILLHOUSE",
    description:
      "An artful fusion of white, wholemeal, and rye flours imparts to this sourdough a rich wholemeal flavor and airy texture ",
    price: ["£2.10 / £3.40"],
  },
  {
    id: 3,
    url: "/rye.webp",
    name: "BRIGHT RYE",
    description:
      "The inclusion of rye flour and malted grains in this petite sourdough loaf introduces a robust and subtly denser texture",
    price: ["£1.00 / £2.50"],
  },
  {
    id: 4,
    url: "/baguette.webp",
    name: "BAGUETTE, PETIT PAIN, BETARD",
    description:
      "An extensively fermented yeasted bread, enriched with the essence of extra virgin olive oil. Delight in its tender and chewy character",
    price: ["£1.00 / £2.95"],
  },
  {
    id: 5,
    url: "/ciabatta.webp",
    name: "CIABATTA ROLL",
    description:
      "Savor the excellence of our meticulously fermented yeasted bread, enriched with premium extra virgin olive oil",
    price: ["£1.00 / £2.95"],
  },
  {
    id: 6,
    url: "/rye-brown.webp",
    name: "DARK LOAF",
    description:
      "Rich, robust, and deeply flavorful, this non-wheat bread is an ideal companion for smoked salmon ",
    price: ["£2.50"],
  },
  {
    id: 7,
    url: "/round.webp",
    name: "SEASAME & SUNFLOWER",
    description:
      "Introducing our white seeded sourdough, the perfect companion for your egg-based breakfasts",
    price: ["£2.95 / £4.40"],
  },
  {
    id: 8,
    url: "/seeded.webp",
    name: "SEEDED LOAF",
    description:
      "Delight in our light brown sourdough base, generously filled with a medley of nourishing seeds for a wholesome and flavorful experience",
    price: ["£2.95 / £4.40"],
  },
  {
    id: 9,
    url: "/toasted.webp",
    name: "TOASTED SESAME",
    description:
      "A batard generously filled and coated with black and white sesame seeds.",
    price: ["£2.95"],
  },
  //   {
  //     id: 10,
  //     name: "LIGHT RYE & CARAWAY",
  //     image: CarawayImg,
  //     description:
  //       "Our light rye with added aromatic caraway seeds. There are many a faithful follower of this loaf.",
  //     price: ["£2.25"],
  //   },
  //   {
  //     id: 11,
  //     name: "/mr-potato-bread-scale-e1497262120382.jpg",

  //     description:
  //       "A white sourdough with hefty chunks of roasted potato, rosemary and nigella seeds. Dunk it in your soup or stew.",
  //     price: ["£2.95"],
  //   },
  {
    id: 12,
    url: "/fig-walnut.webp",
    name: "FIG & PITSACHIO",
    description:
      "Black and white pistachio seeds fill and cover this loaf. Toast it for super intense flavours.",
    price: ["£3.40"],
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



function Shop(props) {
  const [open, setOpen] = useState();

  return (
    <motion.div
      className="item-wrap"
    >
      {breads.map((bread, index) => (
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
          key={bread.id}
          variants={gallery}
          className="item-card-wrap"
        >
          <motion.div
            variants={gallery}
            key={bread.url}
            className="item-card-image"
          >
            <Image
              loading="lazy"
              
              alt="item-image"
              height={270}
              width={270}
              src={bread.url}
              priority={false}
              className="item-shop-images"
            />
          </motion.div>
          <motion.div className="item-info">
            <motion.h1 variants={words} className="item-name" key={bread.name}>
              {bread.name}
            </motion.h1>
            <motion.button variants={words} className="group basket-button ">
              <ShoppingBagIcon
                className="group-hover:animate-bounce pt-1"
                strokeWidth={0.75}
                width={29}
              />{" "}
             <span>+</span>
            </motion.button>
            <motion.h2 className="item-price">{bread.price}</motion.h2>
            <motion.div className="item-card-description">
              <motion.p></motion.p>
              <p> {bread.description}</p>
            </motion.div>
          </motion.div>
        </motion.div>
        </motion.div>
      ))}
    
    </motion.div>
  );
}

export default Shop;
