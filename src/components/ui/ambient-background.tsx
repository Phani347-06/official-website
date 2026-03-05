"use client";

import React from "react";
import { motion } from "framer-motion";

export const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,rgba(230,43,30,0.15)_0%,transparent_50%)]"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_30%_70%,rgba(74,4,4,0.2)_0%,transparent_40%)]"
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
    </div>
  );
};
