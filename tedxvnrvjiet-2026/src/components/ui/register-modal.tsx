"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-md bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-white/10">
                            <h2 className="text-2xl font-bold uppercase tracking-widest text-white">Select Pass</h2>
                            <button
                                onClick={onClose}
                                className="p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                                aria-label="Close"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <a
                                href="https://aspireup.ai/organization/tedxvnrvjiet/event/100061"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onClose}
                                className="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-ted-red/50 transition-all text-left"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Single Pass</h3>
                                    <p className="text-sm text-white/60">One ticket for individual entry</p>
                                </div>
                                <div className="w-10 h-10 shrink-0 rounded-full bg-ted-red/20 text-ted-red flex items-center justify-center group-hover:bg-ted-red group-hover:text-white transition-colors">
                                    <ArrowRight size={20} />
                                </div>
                            </a>

                            <a
                                href="https://aspireup.ai/organization/sintillashunz-vnrvjiet/event/100062"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={onClose}
                                className="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-ted-red/50 transition-all text-left"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">Combo Pass</h3>
                                    <p className="text-sm text-white/60">TEDx + Sintillashunz combo entry</p>
                                </div>
                                <div className="w-10 h-10 shrink-0 rounded-full bg-ted-red/20 text-ted-red flex items-center justify-center group-hover:bg-ted-red group-hover:text-white transition-colors">
                                    <ArrowRight size={20} />
                                </div>
                            </a>
                        </div>

                        {/* Footer decoration */}
                        <div className="h-1 w-full bg-gradient-to-r from-transparent via-ted-red to-transparent opacity-50" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
