"use client";

import Image from "next/image";
import { ArrowRight, Download, Sparkles, Phone, Mail, MessageCircle, CheckCircle2, Award } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="ambient-glow w-[550px] h-[550px] -top-24 -left-20 bg-purple-600/20" />
      <div className="ambient-glow w-[500px] h-[500px] top-1/3 -right-20 bg-indigo-600/20" />
      <div className="ambient-glow w-[400px] h-[400px] bottom-0 left-1/3 bg-cyan-600/15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-purple-500/30 text-xs font-medium text-purple-300 shadow-sm shadow-purple-500/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Work &amp; High-Impact Projects</span>
            </div>

            {/* Main Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                D.A.N.U{" "}
                <span className="text-gradient-primary">Wijewardana</span>
              </h1>
              
              <div className="mt-4 flex flex-wrap items-center gap-2 text-base sm:text-lg font-semibold text-purple-300">
                <span className="text-white">Digital Marketing</span>
                <span className="text-purple-400 font-bold">•</span>
                <span className="text-purple-300">Web Design</span>
                <span className="text-purple-400 font-bold">•</span>
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Social Media Management
                </span>
              </div>
            </div>

            {/* Short 2-3 sentence impactful intro */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Final-year BSc (Hons) IT student with experience in social media management and web development. Working as a freelance web &amp; graphic designer, I help brands and fashion events build their online presence with clean websites, engaging content, and digital support.
            </p>

            {/* Profile tag bullets */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs sm:text-sm text-slate-300">
              <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-purple-400" />
                Final Year BSc (Hons) IT
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Social Media &amp; Web Dev
              </span>
              <span className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                Fashion Digital Support
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#designs"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-white/10 hover:border-purple-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>See Designs</span>
              </a>

              <a
                href="/assets/Danu_Wijewardana_CV.pdf"
                download="Danu_Wijewardana_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-purple-300 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 hover:border-purple-400 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Showcase Card with Large Square Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer decorative gradient border */}
              <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-purple-500/40 via-indigo-500/20 to-cyan-500/30 shadow-2xl shadow-indigo-950/50 backdrop-blur-xl">
                <div className="rounded-[23px] bg-[#0c1022]/90 p-5 sm:p-6 backdrop-blur-xl border border-white/5 flex flex-col items-center text-center">
                  
                  {/* Square Profile Image Container - Large & Prominent */}
                  <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[360px] rounded-2xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl group mb-5">
                    <Image
                      src="/assets/social/profile.jpeg"
                      alt="D.A.N.U Wijewardana"
                      fill
                      priority
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1022] via-transparent to-transparent opacity-60"></div>
                    
                    {/* Floating Status Pill over image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs">
                      <span className="flex items-center gap-2 text-white font-semibold">
                        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        D.A.N.U Wijewardana
                      </span>
                      <span className="text-[11px] text-emerald-400 font-medium">
                        Active &amp; Available
                      </span>
                    </div>
                  </div>

                  {/* Profile Name & Subtitle */}
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    D.A.N.U Wijewardana
                  </h2>
                  <p className="text-sm font-medium text-purple-300 mt-1">
                    Digital Marketing • Web Design • Social Media Management
                  </p>
                  <p className="text-xs text-slate-300 mt-2 max-w-xs leading-relaxed">
                    Combining data-backed marketing strategies with high-converting web experiences.
                  </p>

                  {/* Direct Contact Links Under Profile */}
                  <div className="w-full mt-5 pt-4 border-t border-white/10 flex flex-col gap-2.5">
                    <a
                      href="https://wa.me/94716973217"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between px-4 py-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition"
                    >
                      <span className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-emerald-400" />
                        WhatsApp Chat
                      </span>
                      <span className="text-emerald-400 font-mono text-[11px] group-hover:translate-x-0.5 transition-transform">
                        +94 71 697 3217 →
                      </span>
                    </a>

                    <a
                      href="mailto:nimeshudeshawijewardana@gmail.com"
                      className="group flex items-center justify-between px-4 py-2.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-200 text-xs font-semibold transition"
                    >
                      <span className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-purple-400" />
                        Email Me
                      </span>
                      <span className="text-slate-300 text-[11px] truncate max-w-[150px]">
                        nimeshudeshawijewardana@...
                      </span>
                    </a>

                    <a
                      href="tel:+94716973217"
                      className="group flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 text-xs font-semibold transition"
                    >
                      <span className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-cyan-400" />
                        Call Directly
                      </span>
                      <span className="font-mono text-slate-300 text-[11px]">
                        +94 71 697 3217
                      </span>
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Metric Highlights Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-gradient-primary">34+</div>
            <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">Creative Ad &amp; Social Designs</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">5+</div>
            <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">Web &amp; UI Client Projects</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">Meta Ads</div>
            <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">Campaign Strategy &amp; Growth</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">Social Media</div>
            <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">Audience Growth &amp; Content Management</div>
          </div>
        </div>

      </div>
    </section>
  );
}
