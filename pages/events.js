import React, { useState } from "react";
import Hero from "../components/Hero";
import eventsHero from "../public/heros/events-hero.webp";
import EventGallery from "../components/EventGallery";
import About from "../components/About";
import { copy } from "../public/copy/copy";
import eventHome from "../public/heros/eventhome.webp";
import { motion } from "framer-motion";
import Image from "next/image";
function Events() {
  return (
    <>
      <Hero page={eventsHero} />
      <div>
        <section className="about-wrap">
          <h1 className="item-heading">{copy.pages[0].events[0].h1}</h1>
          <h2 className="item-heading2">{copy.pages[0].events[1].h2}</h2>
        </section>
      </div>

      <EventGallery />
    </>
  );
}

export default Events;
