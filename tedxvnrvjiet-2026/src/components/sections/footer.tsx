"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Youtube, Instagram, ArrowRight, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-32 bg-zinc-950 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Left Side: Brand */}
        <div className="flex flex-col items-start space-y-12">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-ted-red rounded-full flex items-center justify-center font-black text-2xl tracking-tighter">TEDx</div>
            <span className="text-3xl font-black text-white uppercase tracking-tighter leading-none">VNRVJIET <br /><span className="text-ted-red">2026</span></span>
          </div>
          <p className="text-xl md:text-2xl text-white/50 leading-relaxed font-medium max-w-lg italic">
            &quot;Ideas worth spreading, forces worth discovering, futures worth building.&quot;
          </p>
          <div className="flex space-x-6">
            <motion.a
              href="https://www.linkedin.com/company/tedxvnrvjiet/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-ted-red hover:text-white transition-all text-white/50"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@TEDx"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-ted-red hover:text-white transition-all text-white/50"
            >
              <Youtube size={24} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/tedxvnrvjiet/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-ted-red hover:text-white transition-all text-white/50"
            >
              <Instagram size={24} />
            </motion.a>
          </div>
        </div>

        {/* Right Side: Newsletter */}
        {/* <div className="glass p-12 md:p-16 rounded-[3rem] border border-white/10 relative overflow-hidden group shadow-2xl bg-gradient-to-br from-white/10 to-transparent">
          <div className="absolute top-0 right-0 p-12 text-ted-red/10 font-black text-9xl leading-none">JOIN</div>
          <div className="relative z-10 flex flex-col space-y-10">
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">The Numina <br /><span className="text-ted-red">Pulse</span></h3>
            <p className="text-lg text-white/60 leading-relaxed font-medium max-w-md">
              Get exclusive access to speaker announcements, early-bird registration, and behind-the-scenes insights.
            </p>
            <div className="relative w-full group">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-20 px-10 rounded-full bg-black/50 border border-white/10 focus:border-ted-red/50 outline-none text-white text-lg font-bold transition-all pr-40"
              />
              <button className="absolute right-3 top-3 bottom-3 px-10 bg-ted-red rounded-full text-white font-black text-xs tracking-widest uppercase flex items-center space-x-3 hover:bg-red-700 transition-colors">
                <span>JOIN</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div> */}
      </div>

      <div className="mt-32 pt-12 border-t border-white/5 container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="flex items-center space-x-8 text-xs font-bold tracking-widest text-white/30 uppercase">
          <a href="#" className="hover:text-ted-red transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-ted-red transition-colors">Code of Conduct</a>
          <a href="#" className="hover:text-ted-red transition-colors">Press Kit</a>
        </div>
        <div className="flex flex-col items-center md:items-end space-y-2">
          <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">
            This independent TEDx event is operated under license from TED.
          </p>
          <p className="flex items-center space-x-2 text-xs font-bold text-white/40 uppercase tracking-widest">
            <span>Made with</span>
            <Heart size={14} className="text-ted-red animate-pulse fill-ted-red" />
            <span>for the global community</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
