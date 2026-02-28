"use client";

import React from "react";
import { Navbar } from "@/components/ui/navbar";
import { Cursor } from "@/components/ui/cursor";
import { AmbientBackground } from "@/components/ui/ambient-background";
import { Hero } from "@/components/sections/hero";
import { Speakers } from "@/components/sections/speakers";
import { Schedule } from "@/components/sections/schedule";
import { Timeline } from "@/components/sections/timeline";
import { Team, Sponsors } from "@/components/sections/sponsors";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-x-hidden selection:bg-ted-red selection:text-white">
      {/* Global UI Elements */}
      <Cursor />
      <AmbientBackground />
      <Navbar />

      {/* Sections */}
      <div className="relative z-10 flex flex-col w-full">
        <Hero />
        <Speakers />
        <Schedule />
        <Timeline />
        <Team />
        <Sponsors />
        <Footer />
      </div>

      {/* Background elements to add texture */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(230,43,30,0.1),transparent_40%)]" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(74,4,4,0.15),transparent_40%)]" />
      </div>
    </main>
  );
}
