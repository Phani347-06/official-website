"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

export const PassModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-pass-modal", handleOpen);
    return () => window.removeEventListener("open-pass-modal", handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <React.Fragment>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: "-50%", x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: "-50%", x: "-50%" }}
            className="fixed top-1/2 left-1/2 w-[90%] max-w-4xl bg-zinc-900 border border-white/10 rounded-3xl p-6 md:p-10 z-[101] shadow-2xl overflow-y-auto max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2">
                Choose Your <span className="text-ted-red">Pass</span>
              </h2>
              <p className="text-white/60 text-sm md:text-base tracking-[0.1em] uppercase">
                Select the experience that fits you best
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {/* Standard Pass */}
              <div className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors flex flex-col">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-ted-red text-white rounded-full flex items-center justify-center text-2xl mb-4 shadow-[0_0_20px_rgba(230,43,30,0.4)]">
                    🎟️
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tighter uppercase">Standard Pass</h3>
                  <div className="mt-2 text-white/50 text-sm h-6">Single entry to the event.</div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    "Access to all TEDx talks",
                    "Interaction with speakers",
                    "Lunch (Veg & Non-Veg)",
                    "Exclusive goodies & merch",
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start text-white/80 text-sm md:text-base font-medium">
                      <Check className="mr-3 text-ted-red shrink-0 mt-0.5" size={18} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://aspireup.ai/organization/tedxvnrvjiet/event/100061"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-ted-red text-white text-base font-bold rounded-xl shadow-[0_0_30px_rgba(230,43,30,0.4)] block text-center cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform uppercase tracking-wider"
                >
                  Select Standard
                </a>
              </div>

              {/* Squad Pass */}
              <div className="relative group bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6 md:p-8 hover:from-white/15 hover:to-white/10 transition-colors flex flex-col">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ted-red text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full shadow-lg">
                  Best Value
                </div>
                
                <div className="mb-6">
                  <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center text-2xl mb-4 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    👥
                  </div>
                  <h3 className="text-2xl font-black text-white tracking-tighter uppercase relative">
                    Squad Pass <span className="text-ted-red">(5)</span>
                  </h3>
                  <div className="mt-2 text-ted-red font-bold text-sm tracking-wider h-6">
                    ₹500 OFF FOR BATCH OF 5
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    "Everything in Standard Pass",
                    "Discounted bundle pricing",
                    "Guaranteed squad seating",
                    "Faster squad registration line",
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start text-white/80 text-sm md:text-base font-medium">
                      <Check className="mr-3 text-white shrink-0 mt-0.5" size={18} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://aspireup.ai/organization/tedxvnrvjiet/event/100067"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-white text-black text-base font-bold rounded-xl shadow-[0_0_30px_rgba(255,255,255,0.4)] block text-center cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform uppercase tracking-wider"
                >
                  Select Squad
                </a>
              </div>
            </div>
          </motion.div>
        </React.Fragment>
      )}
    </AnimatePresence>
  );
};
