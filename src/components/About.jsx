import { Share2, Globe, Calendar, Palette, Sparkles, CheckCircle2 } from "lucide-react";

export default function About() {
  const whatICanHelpWith = [
    {
      icon: Share2,
      title: "Social Media Management",
      description:
        "Creating engaging social media content, planning schedules, and managing daily page operations to grow audiences naturally.",
      accent: "from-purple-500 to-indigo-500",
    },
    {
      icon: Globe,
      title: "Website Building & Maintenance",
      description:
        "Building, updating, and maintaining clean, responsive websites using WordPress and basic frontend (HTML, CSS, JS).",
      accent: "from-indigo-500 to-cyan-500",
    },
    {
      icon: Calendar,
      title: "Fashion Show Digital Support",
      description:
        "Supporting fashion events with social media marketing plans, backstage digital coordination, and overall event planning.",
      accent: "from-cyan-500 to-emerald-500",
    },
    {
      icon: Palette,
      title: "Graphic & Ad Design",
      description:
        "Designing promotional banners, flyers, social media creatives, and visual assets that clearly present your brand.",
      accent: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A Bit About My Background
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            IT student with practical experience in social media, web development, and digital support for fashion events.
          </p>
        </div>

        {/* Shorter & More Natural Narrative */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 bg-slate-900/60 border border-white/10 backdrop-blur-xl shadow-xl mb-16">
          <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base font-normal">
            <p>
              I am a final-year <strong className="text-white">BSc (Hons) IT student</strong> with a strong interest in digital marketing, web design, and creative work. Over the past few years, I have gained hands-on experience in managing social media pages, creating content, and building responsive websites.
            </p>
            <p>
              Much of my work has been with <strong className="text-white">Fashion Model UNI Academy</strong> and <strong className="text-white">Fashion Model Hub TV</strong>, where I look after social media channels, design promotional posts, and help maintain official web pages. I also build and update websites using <strong className="text-white">WordPress and basic frontend technologies</strong> (HTML, CSS, JavaScript) to ensure brands have a clean and working online home.
            </p>
            <p>
              Along with online work, I regularly support fashion shows and runway events. Working with choreographer <strong className="text-white">Gihan Dassanayake</strong>, I help handle social media plans, backstage media, and event planning. This has given me great practical exposure working with events and brands like <strong className="text-white">Hayleys Fabric</strong>, <strong className="text-white">MAS Accessories</strong>, and the <strong className="text-white">CCWE Women Fashion Week</strong>.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-purple-400" /> Fashion Model UNI Academy
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" /> WordPress &amp; Frontend
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Event &amp; Backstage Media
            </span>
          </div>
        </div>

        {/* Short "What I can help with" List */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              What I Can Help With
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-2">
              Practical digital services for brands, individuals, and upcoming events.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatICanHelpWith.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-slate-900/50 hover:bg-slate-900/80 border border-white/10 hover:border-purple-500/30 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-lg group flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.accent} flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
