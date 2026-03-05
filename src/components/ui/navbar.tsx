"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { RegisterModal } from "./register-modal";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup ensuring we don't leave the body locked on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Speakers", href: "#speakers" },
    { name: "Experience", href: "#timeline" },
    { name: "Schedule", href: "#schedule" },
    { name: "Team", href: "#team" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "pb-4 pt-[calc(1rem+env(safe-area-inset-top))] glass border-b border-white/10" : "pb-8 pt-[calc(2rem+env(safe-area-inset-top))]"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-10 h-10 bg-ted-red rounded-full flex items-center justify-center font-bold text-xl tracking-tighter">TEDx</div>
            <span className="font-bold text-xl tracking-tight hidden sm:inline-block">VNRVJIET <span className="text-ted-red">2026</span></span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-12 items-center">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium tracking-widest uppercase text-white/70 hover:text-ted-red transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <div className="relative group/navbtn">
            <motion.button
              onClick={() => setIsRegisterOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-ted-red text-white text-sm font-bold rounded-full hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(230,43,30,0.4)] cursor-pointer"
            >
              REGISTER
            </motion.button>
            {/* Tooltip Content */}
            <div className="absolute top-full mt-6 right-0 w-[320px] md:w-[380px] bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 text-left opacity-0 -translate-y-4 pointer-events-none group-hover/navbtn:opacity-100 group-hover/navbtn:translate-y-0 transition-all duration-300 shadow-2xl">
              {/* Tooltip Arrow */}
              <div className="absolute bottom-full right-6 border-8 border-transparent border-b-zinc-900/95 drop-shadow-xl" />
              <div className="text-white font-black tracking-tighter mb-4 text-lg md:text-xl">
                The TEDx pass includes:
              </div>
              <ul className="space-y-4">
                <li className="flex items-center text-sm md:text-base font-medium text-white/80">
                  <span className="mr-3 text-xl md:text-2xl">🎤</span> Access to all TEDx talks
                </li>
                <li className="flex items-center text-sm md:text-base font-medium text-white/80">
                  <span className="mr-3 text-xl md:text-2xl">👥</span> Interaction with speakers
                </li>
                <li className="flex items-center text-sm md:text-base font-medium text-white/80">
                  <span className="mr-3 text-xl md:text-2xl">🍽️</span> Lunch (Veg & Non-Veg)
                </li>
                <li className="flex items-center text-sm md:text-base font-medium text-white/80">
                  <span className="mr-3 text-xl md:text-2xl">🎁</span> Exclusive goodies & merch
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 top-[80px] h-screen bg-black/60 backdrop-blur-md z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Details */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-3xl overflow-hidden border-b border-white/10 z-50 shadow-2xl"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold tracking-widest uppercase hover:text-ted-red transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsRegisterOpen(true);
                }}
                className="w-full py-4 bg-ted-red text-white text-xl font-bold rounded-xl shadow-[0_0_30px_rgba(230,43,30,0.3)] text-center cursor-pointer"
              >
                REGISTER NOW
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
    </nav>
  );
};
