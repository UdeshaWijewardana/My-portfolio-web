"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Eye, Grid3X3 } from "lucide-react";

const allDesigns = [
  { id: 1, file: "Design 1.jpg", title: "Campaign Announcement", category: "Social Media Creatives", caption: "Official promotional campaign graphic designed for high reach and engagement." },
  { id: 2, file: "Design 2.jpeg", title: "Audition & Casting Call", category: "Social Media Creatives", caption: "Audition announcement creative targeted for social audience engagement." },
  { id: 3, file: "Design 3.jpg", title: "Academy Masterclass", category: "Social Media Creatives", caption: "Promotional flyer for intensive training and talent development." },
  { id: 4, file: "Design 4.jpg", title: "Brand Promotion Ad", category: "Promotions & Ads", caption: "High-CTR Meta Ad creative optimized for apparel and lifestyle engagement." },
  { id: 5, file: "Design 5.jpg", title: "Featured Spotlight", category: "Social Media Creatives", caption: "Special feature creative spotlighting campaign participants." },
  { id: 6, file: "Design 6.jpeg", title: "Program Registration", category: "Promotions & Ads", caption: "Dynamic social poster with registration CTA and details." },
  { id: 7, file: "Design 7.jpg", title: "Development Workshop", category: "Social Media Creatives", caption: "Talent development session advertisement for digital media channels." },
  { id: 8, file: "Design 8.jpeg", title: "Seasonal Announcement", category: "Social Media Creatives", caption: "High-contrast visual design announcing upcoming seasonal showcase." },
  { id: 9, file: "Design 9.jpeg", title: "Partner Recognition Post", category: "Social Media Creatives", caption: "Partner recognition poster with clean typography and branding." },
  { id: 10, file: "Design 10.jpeg", title: "Talent Showcase", category: "Social Media Creatives", caption: "Graduation showcase social card for audience engagement." },
  { id: 11, file: "Design 11.jpeg", title: "Digital Campaign Banner", category: "Promotions & Ads", caption: "Meta Ads story creative designed for mobile-first viewing." },
  { id: 12, file: "Design 12.jpg", title: "Editorial Feature", category: "Social Media Creatives", caption: "Magazine-style editorial post for social feed branding." },
  { id: 13, file: "Design 13.jpg", title: "Showcase Poster", category: "Social Media Creatives", caption: "Visual poster highlighting featured designer collections." },
  { id: 14, file: "Design 14.jpg", title: "Academy Registration", category: "Promotions & Ads", caption: "Limited enrollment campaign creative for new applicant batch." },
  { id: 15, file: "Design 15.jpeg", title: "Behind-The-Scenes Feature", category: "Social Media Creatives", caption: "Behind-the-scenes digital promo for social storytelling." },
  { id: 16, file: "Design 16.jpg", title: "Creative Branding Post", category: "Social Media Creatives", caption: "Modern graphic identity crafted for social digital channels." },
  { id: 17, file: "Design 17.jpeg", title: "Talent Spotlight", category: "Social Media Creatives", caption: "Individual talent spotlight banner for social audience growth." },
  { id: 18, file: "Design 18.jpg", title: "Event Countdown Graphic", category: "Promotions & Ads", caption: "Urgency-focused countdown story creative for ticket reservations." },
  { id: 19, file: "Design 19.jpg", title: "Product Promo Card", category: "Promotions & Ads", caption: "Special promotional discount visual with high visual hierarchy." },
  { id: 20, file: "Design 20.jpg", title: "Training Masterclass", category: "Social Media Creatives", caption: "Exclusive training session poster for social media distribution." },
  { id: 21, file: "Design 21.jpg", title: "Social Engagement Post", category: "Social Media Creatives", caption: "Interactive feed post designed to maximize comments and shares." },
  { id: 22, file: "Design 22.jpg", title: "Digital Media Header", category: "Social Media Creatives", caption: "Digital broadcasting header for YouTube and social video." },
  { id: 23, file: "Design 23.png", title: "Highlights Visual", category: "Social Media Creatives", caption: "Collage design summarizing key live showcase moments." },
  { id: 24, file: "Design 24.jpg", title: "Commercial Ad Creative", category: "Promotions & Ads", caption: "Optimized Instagram carousel cover image for direct conversions." },
  { id: 25, file: "Design 25.jpg", title: "Brand Identity Asset", category: "Social Media Creatives", caption: "Clean aesthetic poster featuring custom typography." },
  { id: 26, file: "Design 26.jpg", title: "Mentorship Flyer", category: "Social Media Creatives", caption: "Professional workshop flyer with guest speaker highlights." },
  { id: 27, file: "Design 27.jpg", title: "Seasonal Promotion Sale", category: "Promotions & Ads", caption: "Bold promotional ad banner designed for high conversion rates." },
  { id: 28, file: "Design 28.jpg", title: "VIP Guest Invitation", category: "Social Media Creatives", caption: "VIP digital invitation card crafted for industry leaders." },
  { id: 29, file: "Design 29.jpeg", title: "Casting Auditions v2", category: "Social Media Creatives", caption: "Clean typography poster for nation-wide talent scouting." },
  { id: 30, file: "Design 30.jpeg", title: "Live Streaming Promo", category: "Social Media Creatives", caption: "Broadcast announcement for real-time online event coverage." },
  { id: 31, file: "Design 31.jpg", title: "Partner Collaboration", category: "Social Media Creatives", caption: "Co-branding creative honoring campaign partners." },
  { id: 32, file: "Design 32.jpg", title: "Academy Open Day", category: "Promotions & Ads", caption: "Welcome flyer inviting new applicants to register." },
  { id: 33, file: "Design 33.jpg", title: "Designer Spotlight", category: "Social Media Creatives", caption: "Profile card highlighting featured creative collections." },
  { id: 34, file: "Design 34.jpg", title: "Grand Finale Poster", category: "Social Media Creatives", caption: "Celebration poster marking successful campaign completion." },
];

export default function SocialDesigns() {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = ["All", "Social Media Creatives", "Promotions & Ads"];

  const filteredDesigns =
    activeTab === "All"
      ? allDesigns
      : allDesigns.filter((d) => d.category === activeTab);

  const displayedDesigns = showAll ? filteredDesigns : filteredDesigns.slice(0, 12);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredDesigns.length - 1));
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev < filteredDesigns.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredDesigns.length]);

  return (
    <section id="designs" className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-semibold text-pink-300 uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Social Media Management
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Social Media &amp; Ad Creatives
            </h2>
            <p className="mt-3 text-slate-300 text-base max-w-2xl">
              A curated collection of promotional posters, Meta Ad designs, and high-impact social media creatives crafted for audience engagement.
            </p>
          </div>

          {/* Clean Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveTab(cat);
                  setShowAll(false);
                }}
                className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeTab === cat
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {displayedDesigns.map((design, idx) => (
            <div
              key={design.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900/70 border border-white/10 hover:border-purple-500/40 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-purple-950/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Aspect Box */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-950">
                <Image
                  src={`/assets/social/${design.file}`}
                  alt={design.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Hover overlay with zoom button */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <span className="p-3 rounded-full bg-purple-600/90 text-white shadow-xl shadow-purple-950/60 transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>

                {/* Category Pill on Image */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide uppercase bg-black/70 backdrop-blur-md text-purple-300 border border-white/10">
                    {design.category}
                  </span>
                </div>
              </div>

              {/* Caption & Title */}
              <div className="p-4 flex-1 flex flex-col justify-between bg-slate-900/60 border-t border-white/5">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
                    {design.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2 leading-relaxed">
                    {design.caption}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-purple-400 font-medium">
                  <span>View High-Res</span>
                  <Eye className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredDesigns.length > 12 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-slate-900/90 hover:bg-slate-800 border border-white/10 hover:border-purple-500/40 shadow-lg shadow-black/40 transition-all duration-200"
            >
              <Grid3X3 className="w-4 h-4 text-purple-400" />
              <span>
                {showAll
                  ? "Show Less (Curated 12)"
                  : `Show All ${filteredDesigns.length} Designs`}
              </span>
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredDesigns[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fadeIn"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with title & close */}
            <div className="w-full flex items-center justify-between pb-3 text-white">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-600/30 border border-purple-500/30 text-purple-200">
                  {filteredDesigns[lightboxIndex].category}
                </span>
                <h3 className="text-base sm:text-lg font-bold">
                  {filteredDesigns[lightboxIndex].title}
                </h3>
                <span className="text-xs text-slate-400">
                  ({lightboxIndex + 1} of {filteredDesigns.length})
                </span>
              </div>

              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Close modal"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Modal Image */}
            <div className="relative w-full h-[65vh] sm:h-[72vh] rounded-2xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center">
              <Image
                src={`/assets/social/${filteredDesigns[lightboxIndex].file}`}
                alt={filteredDesigns[lightboxIndex].title}
                fill
                priority
                className="object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev > 0 ? prev - 1 : filteredDesigns.length - 1
                  )
                }
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-purple-600/80 text-white backdrop-blur-md border border-white/10 transition"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={() =>
                  setLightboxIndex((prev) =>
                    prev < filteredDesigns.length - 1 ? prev + 1 : 0
                  )
                }
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-purple-600/80 text-white backdrop-blur-md border border-white/10 transition"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="w-full text-center mt-3 px-4">
              <p className="text-xs sm:text-sm text-slate-300">
                {filteredDesigns[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
