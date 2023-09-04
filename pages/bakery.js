import React from "react";
import bakeryHome from "../public/heros/bakeryhome.webp";
import bakeryAbout from "../public/bakeryAbout.webp";
import Hero from "../components/Hero";
import About from "../components/About";
import { copy } from "../public/copy/copy";
import BakeryGallery from "../components/BakeryGallery";
import Shop from "../components/Shop";
function Bakery() {
  return (
    <>
      <Hero page={bakeryHome} />
      <About
        h1={copy.pages[0].bakery[0].h1}
        h2={copy.pages[0].bakery[1].h2}
        p1={copy.pages[0].bakery[2].p1}
        image={bakeryAbout}
      />
      <div
        style={{
          borderLeft: "solid",
          borderRight: "solid",
          borderRadius: "90px",
          borderColor: "lightgray",
        }}
        className="about-wrap"
      >
        <p className="p1">{copy.pages[0].bakery[3].p2}</p>
        <b className="p1">{copy.pages[0].bakery[4].p3}</b>
        <p className="p1">{copy.pages[0].bakery[5].p4}</p>
      </div>
      <BakeryGallery />
      <Shop />
    </>
  );
}

export default Bakery;
