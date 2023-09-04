import React from 'react'
import cafeHome from '../public/heros/cafehome.webp'
import Hero from '../components/Hero'
import About from '../components/About'
import { copy } from '../public/copy/copy'
import Image from 'next/image'
import cafeImage from '../public/cafe.webp'
function cafe() {





  return (
    <>
    <Hero page={cafeHome} />
      <About
        h1={copy.pages[0].cafe[0].h1}
        h2={copy.pages[0].cafe[1].h2}
        p1={copy.pages[0].cafe[2].p1}
        p2={copy.pages[0].cafe[3].p2}
        p3={copy.pages[0].cafe[4].p3}
        p4={copy.pages[0].cafe[5].p4}
        image={cafeImage}
        
      />
      </>
  )
}

export default cafe