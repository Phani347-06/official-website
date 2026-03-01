"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteData } from "@/data/site-data";
import { ArrowLeft, Clock, Users, Calendar, Mic2 } from "lucide-react";
import { Navbar } from "@/components/ui/navbar";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ArchivePage() {
    const params = useParams();
    const slug = params.slug as string;
    const event = siteData.pastEvents.find((e) => e.slug === slug);

    const heroRef = useRef<HTMLDivElement>(null);
    const speakersRef = useRef<HTMLDivElement>(null);
    const scheduleRef = useRef<HTMLDivElement>(null);
    const speakersInView = useInView(speakersRef, { once: false, amount: 0.1 });
    const scheduleInView = useInView(scheduleRef, { once: false, amount: 0.1 });

    if (!event) {
        return (
            <main className="relative min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-6xl font-black mb-4">404</h1>
                    <p className="text-white/50 text-xl mb-8">Event not found</p>
                    <Link href="/" className="px-8 py-3 bg-ted-red rounded-full text-white font-bold">
                        Go Home
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="relative min-h-screen bg-black overflow-x-hidden selection:bg-ted-red selection:text-white">
            <AmbientBackground />
            <Navbar />

            {/* Hero Section */}
            <section ref={heroRef} className="relative min-h-[60vh] md:min-h-[80vh] flex items-end overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={event.image}
                        alt={event.theme}
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-6 pb-20 pt-40">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link
                            href="/#timeline"
                            className="inline-flex items-center space-x-3 text-white/50 hover:text-ted-red transition-colors mb-8 group"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm font-bold tracking-widest uppercase">Back to Home</span>
                        </Link>

                        <div className="flex items-center space-x-4 mb-6">
                            <div className="w-2 h-2 rounded-full bg-ted-red animate-pulse" />
                            <span className="text-xs font-black tracking-[0.4em] uppercase text-ted-red">
                                TEDxVNRVJIET Archive
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-6">
                            {event.theme}
                        </h1>

                        <p className="text-xl md:text-2xl text-white/50 font-medium max-w-2xl leading-relaxed mb-10">
                            {event.description}
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-4">
                            {event.highlights.map((highlight, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + idx * 0.1 }}
                                    className="px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center space-x-3"
                                >
                                    <div className="w-8 h-8 rounded-full bg-ted-red/20 flex items-center justify-center text-ted-red font-black text-xs">
                                        0{idx + 1}
                                    </div>
                                    <span className="text-sm font-bold tracking-tight text-white/80">
                                        {highlight}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Year Badge */}
                <div className="absolute top-24 md:top-32 right-4 md:right-16 z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="glass p-6 rounded-3xl border border-white/10 text-center"
                    >
                        <Calendar size={24} className="text-ted-red mx-auto mb-2" />
                        <span className="text-lg font-black text-white uppercase tracking-tight">
                            {event.year}
                        </span>
                    </motion.div>
                </div>
            </section>

            {/* Speakers Section */}
            <section ref={speakersRef} className="relative py-32 bg-black overflow-hidden">
                <div className="container mx-auto px-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={speakersInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center space-x-4 text-ted-red mb-6">
                            <Mic2 size={24} />
                            <h4 className="font-bold text-xs tracking-[0.5em] uppercase">The Speakers</h4>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-white">
                            Who <span className="text-white/20">Spoke</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {event.speakers.map((speaker, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            animate={speakersInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.05, duration: 0.8 }}
                            whileHover={{ y: -10 }}
                            className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-ted-red/40 transition-all"
                        >
                            {/* Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                                <div className="mb-2 px-3 py-1 bg-ted-red text-[10px] font-black tracking-widest rounded-full text-white uppercase inline-block opacity-0 group-hover:opacity-100 transition-all duration-500">
                                    {speaker.talk}
                                </div>
                                <h3 className="text-xl font-black tracking-tight text-white mb-1 leading-none uppercase">
                                    {speaker.name}
                                </h3>
                                <p className="text-xs font-bold tracking-wider text-white/50 uppercase italic">
                                    {speaker.title}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Schedule Section */}
            <section ref={scheduleRef} className="relative py-32 bg-zinc-950 overflow-hidden">
                <div className="container mx-auto px-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={scheduleInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center space-x-4 text-ted-red mb-6">
                            <Clock size={24} />
                            <h4 className="font-bold text-xs tracking-[0.5em] uppercase">The Schedule</h4>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-white">
                            How It <span className="text-white/20">Unfolded</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="relative space-y-6">
                        {/* Center Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-ted-red via-ted-red/50 to-ted-red/10" />

                        {event.schedule.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                animate={scheduleInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="relative pl-20 group"
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-[22px] top-8 w-4 h-4 rounded-full bg-ted-red shadow-[0_0_15px_rgba(230,43,30,0.6)] z-10 group-hover:scale-150 transition-transform" />

                                {/* Content Card */}
                                <div className="glass p-8 rounded-3xl border border-white/10 hover:border-ted-red/30 transition-all group shadow-xl">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Clock size={18} className="text-ted-red" />
                                        </div>
                                        <span className="text-lg font-black text-white uppercase tracking-tight">
                                            {item.time}
                                        </span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-2 leading-tight group-hover:text-ted-red transition-colors">
                                        {item.session}
                                    </h3>
                                    <p className="text-base text-white/50 font-medium italic">
                                        {item.activity}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Back CTA */}
            <section className="py-24 bg-black text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="container mx-auto px-6"
                >
                    <p className="text-white/30 text-sm font-bold tracking-[0.3em] uppercase mb-6">
                        Continue the journey
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center space-x-4 px-12 py-5 bg-ted-red text-white font-black text-sm tracking-[0.2em] rounded-full shadow-[0_0_30px_rgba(230,43,30,0.4)] hover:bg-red-700 transition-all group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" />
                        <span>BACK TO TEDX 2026</span>
                    </Link>
                </motion.div>
            </section>

            {/* Background elements */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(230,43,30,0.1),transparent_40%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(74,4,4,0.15),transparent_40%)]" />
            </div>
        </main>
    );
}
