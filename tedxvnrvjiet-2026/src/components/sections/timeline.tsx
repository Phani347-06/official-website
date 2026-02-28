"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteData } from "@/data/site-data";
import { ArrowRight, History } from "lucide-react";

export const Timeline = () => {
  const [activeYear, setActiveYear] = useState(siteData.pastEvents[0].year);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const activeEvent = siteData.pastEvents.find(e => e.year === activeYear) || siteData.pastEvents[0];

  return (
    <section id="timeline" ref={containerRef} className="relative py-32 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between space-y-6 md:space-y-0"
        >
          <div>
            <div className="flex items-center space-x-4 text-ted-red mb-6">
              <History size={24} />
              <h4 className="font-bold text-xs tracking-[0.5em] uppercase">The Legacy</h4>
            </div>
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
              A Journey of <br /> <span className="text-white/10">Inspiration</span>
            </h2>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex space-x-4 mb-8">
              {siteData.pastEvents.map((event) => (
                <button
                  key={event.year}
                  onClick={() => setActiveYear(event.year)}
                  className={`relative px-8 py-4 text-2xl font-black tracking-tighter transition-all rounded-2xl overflow-hidden group ${
                    activeYear === event.year ? "text-white bg-ted-red shadow-2xl" : "text-white/30 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {event.year}
                  {activeYear === event.year && (
                    <motion.div
                      layoutId="active-year-bg"
                      className="absolute inset-0 bg-ted-red -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          key={activeYear}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
        >
          {/* Content */}
          <div className="order-2 lg:order-1 flex flex-col items-start space-y-10">
            <div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4"
              >
                TEDx <span className="text-ted-red">VNRVJIET</span> <br />
                <span className="text-white/40 italic">{activeEvent.theme}</span>
              </motion.h3>
              <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-medium">
                {activeEvent.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {activeEvent.highlights.map((highlight, idx) => (
                <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center space-x-6">
                   <div className="w-12 h-12 rounded-full bg-ted-red/20 flex items-center justify-center text-ted-red font-black text-lg">
                     0{idx + 1}
                   </div>
                   <span className="text-lg font-bold tracking-tight text-white/80">{highlight}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-4 px-10 py-5 bg-white text-black font-black text-sm tracking-[0.2em] rounded-full shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all hover:bg-ted-red hover:text-white"
            >
              <span>EXPLORE {activeYear} ARCHIVE</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
            </motion.button>
          </div>

          {/* Media */}
          <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-[3rem] overflow-hidden group shadow-2xl">
            <img
              src={activeEvent.image}
              alt={activeEvent.theme}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                 <PlayCircle size={40} className="text-white fill-white/20" />
               </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Year Number */}
      <div className="absolute bottom-[-10%] right-[-10%] opacity-[0.02] text-[40vw] font-black pointer-events-none select-none text-white tracking-tighter">
        {activeYear}
      </div>
    </section>
  );
};

const PlayCircle = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="10 8 16 12 10 16 10 8" />
  </svg>
);
