import React, { Suspense } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

function Hero({ page, setLoading }) {
  return (
    <div className="hero-wrap">
      <div className="hero-box">
        <div>
          <div className="mt-10 mb-60">
            <Suspense>
              <motion.div
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                layoutId="hero"
              >
                <Image priority src={page} alt="Hero" className="hero-image" />
              </motion.div>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
