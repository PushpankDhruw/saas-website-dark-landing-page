"use client";
import Image from "next/image";
import helixImage from "@/assets/images/helix2.png";
import emojiStar from "@/assets/images/emojistar.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (value) => {
      console.log(value);
    });
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  return (
    <div
      ref={containerRef}
      className="bg-black text-white py-[72px] sm:py-24 text-center overflow-y-visible"
    >
      <div className="container max-w-xl relative">
        <motion.div
          style={{
            translateY,
          }}
        >
          <Image
            src={helixImage}
            alt=""
            className="absolute top-6 left-full transform -translate-x-15  hidden md:inline"
            width={200}
            height={200}
          />
        </motion.div>
        <motion.div
          style={{
            translateY,
          }}
        >
          <Image
            src={emojiStar}
            alt=""
            className="absolute -top-[80px] right-full transform translate-x-4 hidden md:inline"
            width={200}
            height={200}
          />
        </motion.div>

        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">
          Get instant access
        </h2>

        <p className="text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>

        <form className="mt-10 flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9ca3af] sm:flex-1"
          />
          <button className="bg-white text-black py-3 rounded-lg font-medium px-5">
            Get access
          </button>
        </form>
      </div>
    </div>
  );
};
