"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteData } from "@/data/site-data";
import { Users, Handshake, Twitter, Linkedin, Instagram } from "lucide-react";

export const Team = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });

  return (
    <section id="team" ref={containerRef} className="relative py-32 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between space-y-6 md:space-y-0"
        >
          <div>
            <div className="flex items-center space-x-4 text-ted-red mb-6">
              <Users size={24} />
              <h4 className="font-bold text-xs tracking-[0.5em] uppercase">The Architects</h4>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-white">
              The <span className="text-white/20">Creative</span> <br /> Engine
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-lg text-white/50 leading-relaxed font-medium">
              A diverse team of visionaries, engineers, and storytellers working behind the scenes to create a world-class experience.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {siteData.team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.8 }}
            whileHover={{ y: -20, rotateY: 10 }}
            className="group relative h-[350px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl transition-all hover:border-ted-red/40"
          >
            <div className="absolute inset-0 z-0 scale-[1.05] group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            <div className="absolute bottom-0 left-0 w-full p-10 z-10">
              <div className="mb-4 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                <a href={member.social?.instagram || "#"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ted-red transition-colors backdrop-blur-md">
                  <Instagram size={18} />
                </a>
                <a href={member.social?.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-ted-red transition-colors backdrop-blur-md">
                  <Linkedin size={18} />
                </a>
              </div>
              <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none mb-2">{member.name}</h3>
              <p className="text-ted-red font-bold tracking-widest uppercase text-[10px]">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const Sponsors = () => {
  return (
    <section className="relative py-32 bg-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <div className="flex items-center justify-center space-x-4 text-ted-red mb-6">
          <Handshake size={24} />
          <h4 className="font-bold text-xs tracking-[0.5em] uppercase">The Partners</h4>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] text-white">
          Fueled By <span className="text-white/20 italic">Innovation</span>
        </h2>
      </div>

      <div className="flex overflow-hidden relative group">
        <div className="flex animate-[scroll_40s_linear_infinite] space-x-20 md:space-x-40 py-10 px-10 items-center justify-center">
          {[...siteData.sponsors, ...siteData.sponsors, ...siteData.sponsors].map((sponsor, i) => (
            <div key={i} className="flex-shrink-0 w-32 md:w-56 grayscale hover:grayscale-0 transition-all opacity-30 hover:opacity-100 cursor-pointer">
              <img src={sponsor.logo} alt={sponsor.name} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
