"use client";

import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const appImageRef = useRef<HTMLDivElement>(null);

  // Track the entire page's scroll
  const { scrollYProgress } = useScroll({
    target: appImageRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#502ca8] py-[72px] sm:py-24">
      <div className="container" ref={appImageRef}>
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>

        <p className="text-xl text-center max-w-xl mx-auto text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress
        </p>
        <motion.div
          style={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 20,
            opacity: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
            rotateX: { duration: 0.8, ease: [0.42, 0, 0.58, 1] },
          }}
        >
          <Image
            src={appScreen}
            alt="The product screenshot"
            className="mt-14 mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};
