"use client";

import React, { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { Sparkles, Globe, Brain, Zap } from "lucide-react";

interface Card {
  title: string;
  icon: ReactNode;
  text: string;
  color: string;
}

export const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Background scale and rotate
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, 15]);
  const opacity = useTransform(smoothProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  const cards = [
    {
      title: "The Unseen",
      icon: <Sparkles size={40} className="text-ted-red" />,
      text: "Every grand idea begins in the shadows, an unseen force waiting for a catalyst to bring it into the light.",
      color: "rgba(230, 43, 30, 0.2)"
    },
    {
      title: "The Resonance",
      icon: <Globe size={40} className="text-ted-red" />,
      text: "When ideas collide, they create a resonance that ripples through communities, changing perceptions and building futures.",
      color: "rgba(74, 4, 4, 0.4)"
    },
    {
      title: "The Awakening",
      icon: <Brain size={40} className="text-ted-red" />,
      text: "At TEDx, we don't just share information; we awaken the latent potential within every individual to see the world differently.",
      color: "rgba(230, 43, 30, 0.1)"
    }
  ];

  return (
    <section id="experience" ref={containerRef} className="relative h-[300vh] bg-black">
      {/* Sticky Background */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
         <motion.div
           style={{ scale, rotate, opacity }}
           className="relative w-[80%] aspect-square md:w-[60%] flex items-center justify-center"
         >
           <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(230,43,30,0.3)_0%,transparent_70%)] blur-[100px]" />
           <div className="absolute inset-0 border-[1px] border-white/10 rounded-full animate-[spin_60s_linear_infinite]" />
           <div className="absolute inset-20 border-[1px] border-ted-red/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
           
           <motion.h2 
             style={{ opacity }}
             className="text-[12vw] font-black text-white/10 uppercase tracking-tighter leading-none select-none text-center"
           >
             NUMINA <br /> EXPERIENCE
           </motion.h2>
         </motion.div>

         {/* Content Layers */}
         <div className="absolute inset-0 flex flex-col items-center">
           {cards.map((card, idx) => (
             <ScrollCard key={idx} card={card} index={idx} progress={smoothProgress} />
           ))}
         </div>
      </div>
    </section>
  );
};

const ScrollCard = ({ card, index, progress }: { card: Card, index: number, progress: MotionValue<number> }) => {
  const start = 0.1 + index * 0.25;
  const end = start + 0.2;
  
  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, end], [100, -100]);
  const x = useTransform(progress, [start, end], [index % 2 === 0 ? 50 : -50, index % 2 === 0 ? -50 : 50]);

  return (
    <motion.div
      style={{ opacity, y, x }}
      className="absolute top-1/2 -translate-y-1/2 w-full max-w-2xl px-6"
    >
      <div className="glass p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 p-8 text-white/5 font-black text-8xl leading-none">0{index + 1}</div>
        <div className="relative z-10 flex flex-col items-start space-y-8">
           <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
             {card.icon}
           </div>
           <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">{card.title}</h3>
           <p className="text-xl text-white/60 leading-relaxed font-medium">
             {card.text}
           </p>
           <div className="flex items-center space-x-2 text-ted-red font-bold text-xs tracking-widest uppercase cursor-pointer hover:translate-x-2 transition-transform">
             <span>LEARN MORE</span>
             <Zap size={16} fill="currentColor" />
           </div>
        </div>
      </div>
    </motion.div>
  );
};
