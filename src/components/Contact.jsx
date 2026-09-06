"use client";

import { useState } from "react";
import { MessageCircle, Mail, Phone, Send, CheckCircle2, Sparkles, Copy, Check } from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Digital Marketing & Meta Ads",
    message: "",
  });

  const emailAddress = "nimeshudeshawijewardana@gmail.com";
  const phoneNumber = "+94 71 697 3217";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name} [${formData.service}]`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService Interested In: ${formData.service}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="ambient-glow w-[500px] h-[500px] bottom-0 right-10 bg-purple-600/15" />
      <div className="ambient-glow w-[400px] h-[400px] top-10 left-10 bg-indigo-600/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Direct Communication
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Something Impactful
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Have an upcoming brand marketing campaign, social media strategy, or website project? Get in touch directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Quick Connect Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Status Card */}
            <div className="rounded-3xl p-6 bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Current Status: Available
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mt-3">
                Open to Freelance &amp; Full-Time Roles
              </h3>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                Available for digital marketing campaign leadership, web design, and social media management.
              </p>
            </div>

            {/* Direct WhatsApp Card (High Priority) */}
            <a
              href="https://wa.me/94716973217?text=Hi%20Danu,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between p-5 rounded-2xl bg-emerald-950/30 hover:bg-emerald-900/40 border border-emerald-500/30 hover:border-emerald-400 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-slate-950 shadow-md group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-emerald-400">
                    Fastest Response
                  </div>
                  <div className="text-base font-bold text-white">
                    Chat on WhatsApp
                  </div>
                  <div className="text-xs font-mono text-slate-300 mt-0.5">
                    +94 71 697 3217
                  </div>
                </div>
              </div>
              <span className="text-emerald-400 font-bold text-sm group-hover:translate-x-1 transition-transform">
                Chat Now →
              </span>
            </a>

            {/* Direct Email Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-purple-500/30 backdrop-blur-xl transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-purple-300">
                      Email Directly
                    </div>
                    <div className="text-sm font-bold text-white truncate max-w-[200px] sm:max-w-none">
                      {emailAddress}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition"
                  title="Copy Email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Direct Phone Card */}
            <a
              href="tel:+94716973217"
              className="flex items-center justify-between p-5 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-cyan-500/30 backdrop-blur-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase text-cyan-300">
                    Direct Call
                  </div>
                  <div className="text-base font-bold text-white font-mono">
                    {phoneNumber}
                  </div>
                </div>
              </div>
              <span className="text-cyan-400 text-xs font-semibold">
                Call →
              </span>
            </a>

          </div>

          {/* Right: Quick Contact Message Form */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 bg-slate-900/70 border border-white/10 backdrop-blur-xl shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill in your project scope below. It will prepare an instant email directly to my inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ruwan Silva"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ruwan@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Service Needed
                </label>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#0c1022] border border-white/10 text-white text-sm focus:outline-none focus:border-purple-500 transition"
                >
                  <option value="Digital Marketing & Meta Ads">
                    Digital Marketing &amp; Meta Ads Campaign
                  </option>
                  <option value="Modern Web Design & Dev">
                    Modern Website Design &amp; Development
                  </option>
                  <option value="Social Media Management">
                    Social Media Management &amp; Content Strategy
                  </option>
                  <option value="Creative Social Media Branding">
                    Creative Social Media Graphics &amp; Video Editing
                  </option>
                  <option value="General Consultation / Other">
                    General Inquiry / Collaboration
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Your Message *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Danu, I'd like to discuss an upcoming project with you..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-purple-500 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Danu</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Opening your email client to complete transmission. Thank you!</span>
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
