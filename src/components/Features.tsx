"use client";
import EcosystemIcon from "@/assets/icons/ecosystem.svg";
import React, { useCallback, useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;
  const borderRef = useRef<HTMLDivElement>(null);
// Wrap the function with useCallback and include borderRef in the dependency array
const updateMousePosition = useCallback((e: MouseEvent) => {
  if (!borderRef.current) return;
  const BorderRect = borderRef.current.getBoundingClientRect();
  offsetX.set(e.x - BorderRect.x);
  offsetY.set(e.y - BorderRect.y);
}, [borderRef,offsetX, offsetY]); // Dependency array

useEffect(() => {
  window.addEventListener("mousemove", updateMousePosition);
  return () => window.removeEventListener("mousemove", updateMousePosition);
}, [updateMousePosition]);

  return (
    <div
      key={title}
      className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 relative"
    >
      <motion.div
        ref={borderRef}
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      ></motion.div>
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <EcosystemIcon />
      </div>
      <div className="mt-6 font-bold">{title}</div>
      <h3 className="mt-2 text-white/70">{description}</h3>
    </div>
  );
};

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map(({ title, description }) => (
            <Feature key={title} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
};
