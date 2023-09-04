import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

const breads = [
  {
    id: 1,
    url: "/white-peak-scale.jpg",
    name: "WHITE PEAK",
    description:
      "A staple since day one. Our creamy white sourdough, made with a blend of flours including Yorkshire Organic Millers’ own stoneground.",
    price: ["£2.10 / £3.40"],
  },
  {
    id: 2,
    url: "/millstone-scale.jpg",
    name: "MILLSTONE",
    description:
      "A blend of white, wholemeal & rye flours give this sourdough the flavour of a wholemeal loaf with a texture closer to a white.",
    price: ["£2.10 / £3.40"],
  },
  {
    id: 3,
    url: "/light-rye-scale.jpg",
    name: "LIGHT RYE",
    description:
      "The rye flour and malted grains in this little sourdough loaf add a heartier and slightly denser texture to it’s wheaty friends.",
    price: ["£1.00 / £2.50"],
  },
  {
    id: 4,
    url: "/baguette-petit-pain-batard.jpg",
    name: "BAGUETTE, PETIT PAIN, BATARD",
    description:
      "A long fermented, yeasted bread made with extra virgin olive oil. Soft and chewy with a light, open texture inside.",
    price: ["£1.00 / £2.95"],
  },
  {
    id: 5,
    url: "/ciabatta-roll.jpg",
    name: "CIABATTA ROLL",
    description:
      "A long fermented, yeasted bread made with extra virgin olive oil. Soft and chewy with a light, open texture inside.",
    price: ["£1.00 / £2.95"],
  },
  {
    id: 6,
    url: "/dark-peak-scale.jpg",
    name: "DARK PEAK",
    description:
      "Dark, dense and intense, this non-wheat bread is the perfect for smoked salmon or for using in any Scandi-inspired dishes.",
    price: ["£2.50"],
  },
  {
    id: 7,
    url: "/sesame-linseed-and-sunflower-scale.jpg",
    name: "SEASAME, LINSEED & SUNFLOWER",
    description:
      "Our white seeded sourdough. Your best friend for any egg-based breakfast.",
    price: ["£2.95 / £4.40"],
  },
  {
    id: 8,
    url: "/seeded-millstone-scale.jpg",
    name: "SEEDED MILLSTONE",
    description:
      "Our light brown sourdough base packed with a whole host of wholesome seeds.",
    price: ["£2.95 / £4.40"],
  },
  {
    id: 9,
    url: "/toasted-sesame-batard-scale.jpg",
    name: "TOASTED SESAME BATARD",
    description:
      "Black and white sesame seeds fill and cover this batard. Toast it for super intense sesame flavours.",
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
    url: "/fig-and-walnut-scale.jpg",
    name: "FIG & WALNUT",
    description:
      "Black and white sesame seeds fill and cover this batard. Toast it for super intense sesame flavours.",
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

const customLoader = ({ src }) => {
  return `https://forgebakehouse.co.uk/wp-content/uploads/2017/02${src}`;
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
              loader={customLoader}
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
