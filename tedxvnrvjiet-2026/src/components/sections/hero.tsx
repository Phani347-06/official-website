"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteData } from "@/data/site-data";
import { RegisterModal } from "@/components/ui/register-modal";

export const Hero = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <motion.div
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-[1.05]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-motion-of-red-particles-background-30467-large.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center container px-6 flex flex-col items-center">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="mb-6 flex items-center space-x-4 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10"
        >
          <div className="w-2 h-2 rounded-full bg-ted-red animate-pulse" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/80">
            {siteData.event.name} Presents
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-4 text-white uppercase"
        >
          {siteData.event.theme}
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-lg md:text-2xl font-medium text-white/60 tracking-[0.2em] mb-12 uppercase italic"
        >
          {siteData.event.subtitle}
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 items-center"
        >
          <motion.button
            onClick={() => setIsRegisterOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-ted-red text-white text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(230,43,30,0.4)] relative group overflow-hidden cursor-pointer"
          >
            <span className="relative z-10">GET TICKETS</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
          </motion.button>

          <div className="flex flex-col items-start sm:items-center">
            <span className="text-sm font-bold tracking-widest text-white/40 uppercase">March 12, 2026</span>
            <span className="text-xs tracking-widest text-ted-red font-bold">VNRVJIET KS Auditorium</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-white/40 rotate-90 mb-8 origin-left">Scroll to Explore</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-ted-red to-transparent" />
      </motion.div>
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </section>
  );
};
