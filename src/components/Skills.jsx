import { Megaphone, Globe, Palette, Sparkles, Check } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      category: "Digital Marketing",
      icon: Megaphone,
      accent: "from-purple-500 to-indigo-600",
      borderGlow: "group-hover:border-purple-500/40",
      description: "Targeted campaigns, conversion optimization, and strategic audience growth.",
      skills: [
        { name: "Meta Ads Manager", level: "Advanced" },
        { name: "Social Media Strategy", level: "Advanced" },
        { name: "Content Planning & Calendars", level: "Expert" },
        { name: "Campaign Analytics & Insights", level: "Advanced" },
        { name: "Search Engine Optimization (SEO)", level: "Intermediate" },
        { name: "Email Marketing (Mailchimp)", level: "Intermediate" },
        { name: "Funnel Optimization", level: "Advanced" },
        { name: "Audience Retargeting", level: "Advanced" },
      ],
    },
    {
      category: "Web Development",
      icon: Globe,
      accent: "from-indigo-500 to-cyan-500",
      borderGlow: "group-hover:border-cyan-500/40",
      description: "Fast, responsive web interfaces built with modern technologies.",
      skills: [
        { name: "Next.js & React", level: "Intermediate" },
        { name: "HTML5 & Modern CSS3", level: "Expert" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "WordPress & CMS", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Intermediate" },
        { name: "Responsive UI/UX Layouts", level: "Advanced" },
        { name: "Landing Page Conversions", level: "Expert" },
        { name: "PageSpeed & SEO Structure", level: "Advanced" },
      ],
    },
    {
      category: "Creative & Media",
      icon: Palette,
      accent: "from-pink-500 to-purple-600",
      borderGlow: "group-hover:border-pink-500/40",
      description: "Striking visuals, motion editing, and runway brand assets.",
      skills: [
        { name: "Canva Pro Design", level: "Expert" },
        { name: "Adobe Photoshop", level: "Advanced" },
        { name: "Figma UI / Wireframing", level: "Intermediate" },
        { name: "CapCut Video Editing", level: "Advanced" },
        { name: "Adobe Premiere Pro", level: "Intermediate" },
        { name: "Runway Event Graphics", level: "Expert" },
        { name: "Brand Identity Design", level: "Advanced" },
        { name: "Ad Creative Variations", level: "Expert" },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-20 md:py-28 bg-[#0a0e1c]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Capabilities &amp; Tech Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Tools &amp; Strengths I Use Daily
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            Systematically structured expertise across performance marketing, modern web technologies, and multimedia creativity.
          </p>
        </div>

        {/* 3 Grouped Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div
                key={idx}
                className={`group rounded-3xl p-6 sm:p-8 bg-slate-900/60 border border-white/10 ${group.borderGlow} backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${group.accent} flex items-center justify-center text-white shadow-md shadow-black/30 group-hover:scale-105 transition-transform`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                        {group.category}
                      </h3>
                      <span className="text-xs text-slate-400 font-medium">
                        {group.skills.length} core competencies
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Pills with Levels */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group/pill inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 hover:border-purple-500/30 transition-all duration-200"
                      >
                        <Check className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span className="text-xs font-medium text-slate-200">
                          {skill.name}
                        </span>
                        <span className="ml-1 text-[10px] text-slate-300 font-mono">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-300">
                  <span>Continuous learning</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
