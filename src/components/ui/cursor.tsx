"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const Cursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect mobile/touch devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);

      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === "pointer");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkMobile);
    };
  }, [mouseX, mouseY]);

  // Don't render on mobile/touch devices
  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-ted-red/80 pointer-events-none z-[9999] mix-blend-screen"
      style={{
        x,
        y,
        scale: isPointer ? 2.5 : 1,
        opacity: 0.6,
      }}
    />
  );
};
