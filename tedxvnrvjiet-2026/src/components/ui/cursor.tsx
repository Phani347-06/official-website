"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const Cursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
      
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === "pointer");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-ted-red/80 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x,
          y,
          scale: isPointer ? 2.5 : 1,
          opacity: 0.6,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-80 h-80 rounded-full bg-ted-red/10 blur-[100px] pointer-events-none z-[9998]"
        style={{
          x: useSpring(useMotionValue(0), springConfig),
          y: useSpring(useMotionValue(0), springConfig),
        }}
        animate={{
            x: mouseX.get() - 150,
            y: mouseY.get() - 150,
        }}
      />
    </>
  );
};
