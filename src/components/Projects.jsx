import Image from "next/image";
import { ExternalLink, Github, Sparkles, CheckCircle2, Clock, Code2 } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "fashion-model-uni",
      title: "Fashion Model UNI Academy",
      subtitle: "Leading Fashion Academy Web Presence",
      status: "Completed",
      statusColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      statusIcon: CheckCircle2,
      isVideo: true,
      videoSrc: "/assets/web/vd1.mp4",
      whatItIs:
        "The official digital platform and educational landing site for Fashion Model UNI Academy, Sri Lanka's foremost fashion modeling and grooming academy.",
      whatIDid:
        "Orchestrated comprehensive UI/UX wireframing, designed a sleek high-fashion landing layout, integrated high-definition runway video media, and ensured mobile responsiveness.",
      tags: ["UI/UX Design", "Landing Page", "Video Showcase", "Fashion Branding"],
      liveLink: null,
      githubLink: null,
    },
    {
      id: "fashionmodel-v1",
      title: "FashionModel v1 (Booking Platform)",
      subtitle: "Model Casting & Agency Booking Engine",
      status: "Under Development",
      statusColor: "bg-amber-500/15 text-amber-300 border-amber-500/40 animate-pulse",
      statusIcon: Clock,
      isVideo: false,
      imageSrc: "/assets/web/f2.png",
      whatItIs:
        "A multi-sided talent booking and model casting web platform designed to streamline auditions, agency scoutings, and client booking requests.",
      whatIDid:
        "Designed the full platform UX architecture, model profile layouts, audition submission flows, and interactive UI prototypes currently in development.",
      tags: ["Platform Architecture", "Talent Booking", "UI/UX Prototype", "Active Build"],
      liveLink: "https://fashionmodelhub.com/",
      githubLink: null,
    },
    {
      id: "bright-path",
      title: "Bright Path Consultants",
      subtitle: "Corporate Advisory & Education Consultancy",
      status: "Completed",
      statusColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      statusIcon: CheckCircle2,
      isVideo: false,
      imageSrc: "/assets/web/p2.png",
      whatItIs:
        "A credible, conversion-focused corporate web presence built for an international education and career advisory consultancy.",
      whatIDid:
        "Engineered a fully responsive corporate website with structured service offerings, consultation booking CTAs, client testimonials, and fast loading performance.",
      tags: ["Corporate Web", "Responsive Layout", "Lead Generation", "SEO Optimized"],
      liveLink: "https://slbrightpathconsultants.com/",
      githubLink: null,
    },
    {
      id: "lake-resort-bolgoda",
      title: "Lake Resort Bolgoda",
      subtitle: "Boutique Waterfront Hospitality Portal",
      status: "Completed",
      statusColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      statusIcon: CheckCircle2,
      isVideo: false,
      imageSrc: "/assets/web/f3.png",
      whatItIs:
        "A premium luxury resort landing page crafted to capture the tranquil atmosphere and upscale amenities of a boutique lakeside retreat.",
      whatIDid:
        "Built a cinematic hero presentation, modern room amenity showcase, responsive booking interface, interactive lightbox gallery, and streamlined booking pathways.",
      tags: ["Hospitality UI", "Cinematic Hero", "Netlify Deployment", "Animation"],
      liveLink: "https://699989a98c460f113d5a9128--prismatic-marzipan-85e505.netlify.app/",
      githubLink: "https://github.com/UdeshaWijewardana/Ocean-Breeze-Resort-Landing-Page",
    },
    {
      id: "ocean-breeze-resort",
      title: "Ocean Breeze Resort",
      subtitle: "Coastal Luxury Travel & Stay Booking",
      status: "Completed",
      statusColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      statusIcon: CheckCircle2,
      isVideo: false,
      imageSrc: "/assets/web/p3.png",
      whatItIs:
        "A full-featured hotel and travel booking portal created for luxury travelers seeking coastal vacations.",
      whatIDid:
        "Implemented dynamic room filtering, date and guest selection components, gallery lightbox, smooth scroll transitions, and cross-browser responsiveness.",
      tags: ["Travel & Hotel", "Interactive Filter", "Gallery Lightbox", "GitHub Pages"],
      liveLink: "https://udeshawijewardana.github.io/Hotel-Travel-Booking-Website/",
      githubLink: null,
    },
  ];

  return (
    <section id="projects" className="relative py-20 md:py-28 bg-[#080c1a]/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Web &amp; UI Client Projects
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            Real client deployments and platforms showcasing conversion UI, responsive performance, and high-standard design execution.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((item) => {
            const StatusIcon = item.statusIcon;
            return (
              <div
                key={item.id}
                className="group rounded-3xl overflow-hidden bg-slate-900/65 border border-white/10 hover:border-indigo-500/40 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-indigo-950/50 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Media Container (Video or Image) */}
                <div className="relative w-full aspect-video bg-black/80 overflow-hidden border-b border-white/10">
                  {item.isVideo ? (
                    <video
                      controls
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={item.videoSrc} type="video/mp4" />
                      Your browser does not support HTML5 video.
                    </video>
                  ) : (
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  {/* Status Badge Over Media */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${item.statusColor}`}
                    >
                      <StatusIcon className="w-3.5 h-3.5" />
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col gap-1 mb-4">
                      <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                        {item.subtitle}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-200 transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* What it is & What I did */}
                    <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                      <div className="rounded-xl p-3.5 bg-white/[0.02] border border-white/5">
                        <span className="font-semibold text-cyan-300 block mb-1">
                          What It Is:
                        </span>
                        <p className="leading-relaxed">{item.whatItIs}</p>
                      </div>

                      <div className="rounded-xl p-3.5 bg-purple-950/20 border border-purple-800/20">
                        <span className="font-semibold text-purple-300 block mb-1">
                          What I Did:
                        </span>
                        <p className="leading-relaxed">{item.whatIDid}</p>
                      </div>
                    </div>

                    {/* Tag Pills */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/5 text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center gap-3">
                    {item.liveLink && (
                      <a
                        href={item.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-105 active:scale-95 transition-all"
                      >
                        <span>View Live</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {item.githubLink && (
                      <a
                        href={item.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-purple-500/30 transition-all"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}

                    {!item.liveLink && !item.githubLink && (
                      <span className="text-xs text-slate-400 italic">
                        Client Proprietary Platform Demo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
