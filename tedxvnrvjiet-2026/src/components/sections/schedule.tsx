"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteData } from "@/data/site-data";
import { Clock, MapPin, Calendar, Bell } from "lucide-react";

export const Schedule = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  return (
    <section id="schedule" ref={containerRef} className="relative py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between space-y-6 md:space-y-0"
        >
          <div>
            <div className="flex items-center space-x-4 text-ted-red mb-6">
              <Calendar size={24} />
              <h4 className="font-bold text-xs tracking-[0.5em] uppercase">The Roadmap</h4>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
              The <span className="text-white/20">Timeline</span> <br /> of Tomorrow
            </h2>
          </div>

          <div className="flex flex-col items-end text-right">
            <div className="p-6 glass rounded-3xl border border-white/10 flex items-center space-x-8">
              <div className="flex flex-col items-end">
                <span className="text-xs font-black tracking-widest text-white/40 uppercase mb-1">Live At</span>
                <span className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter italic">VNRVJIET KS Auditorium</span>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-ted-red/20 flex items-center justify-center text-ted-red border border-ted-red/30">
                <MapPin size={24} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="relative space-y-8">
          {/* Center Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-ted-red/50 via-ted-red to-ted-red/50" />

          {siteData.schedule.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`relative flex items-center justify-between w-full ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-[31px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-ted-red shadow-[0_0_20px_rgba(230,43,30,0.8)] z-10" />

              {/* Content Card */}
              <div className={`w-full pl-16 md:pl-0 md:w-[45%] group ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="glass p-8 md:p-10 rounded-[2.5rem] border border-white/10 hover:border-ted-red/40 transition-all hover:bg-white/5 group shadow-xl">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Clock size={20} className="text-ted-red" />
                      </div>
                      <span className="text-xl font-black text-white uppercase tracking-tight">{item.time}</span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <Bell size={20} className="text-ted-red animate-bounce" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4 leading-tight group-hover:text-ted-red transition-colors">
                    {item.session}
                  </h3>
                  <p className="text-lg text-white/50 leading-relaxed font-medium italic">
                    {item.activity}
                  </p>
                </div>
              </div>

              {/* Spacer for empty side */}
              <div className="hidden md:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-32 container mx-auto px-6 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-5 bg-white/5 border border-white/10 rounded-full text-white/60 font-black text-sm tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all"
        >
          DOWNLOAD FULL BROCHURE
        </motion.button>
      </div>
    </section>
  );
};
