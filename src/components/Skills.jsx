"use client";

import { useState } from "react";

const skills = [
  ["HTML5 & Modern CSS3", "Expert", "Web Development and Programming"],
  ["JavaScript (ES6+)", "Intermediate", "Web Development and Programming"],
  ["Next.js & React", "Intermediate", "Web Development and Programming"],
  ["Tailwind CSS", "Advanced", "Web Development and Programming"],
  ["WordPress & CMS", "Advanced", "Web Development and Programming"],
  ["Responsive UI/UX Layouts", "Advanced", "Web Development and Programming"],
  ["Landing Page Conversions", "Expert", "Web Development and Programming"],
  ["PageSpeed & SEO Structure", "Advanced", "Web Development and Programming"],
  ["Meta Ads Manager", "Advanced", "Digital Marketing"],
  ["Campaign Analytics & Insights", "Advanced", "Digital Marketing"],
  ["Search Engine Optimization (SEO)", "Intermediate", "Digital Marketing"],
  ["Email Marketing (Mailchimp)", "Intermediate", "Digital Marketing"],
  ["Funnel Optimization", "Advanced", "Digital Marketing"],
  ["Audience Retargeting", "Advanced", "Digital Marketing"],
  ["Social Media Strategy", "Advanced", "Social Media Management"],
  ["Content Planning & Calendars", "Expert", "Social Media Management"],
  ["Canva Pro Design", "Expert", "Graphic Design and Creative Tools"],
  ["Adobe Photoshop", "Advanced", "Graphic Design and Creative Tools"],
  ["Figma UI / Wireframing", "Intermediate", "Graphic Design and Creative Tools"],
  ["CapCut Video Editing", "Advanced", "Graphic Design and Creative Tools"],
  ["Adobe Premiere Pro", "Intermediate", "Graphic Design and Creative Tools"],
  ["Runway Event Graphics", "Expert", "Graphic Design and Creative Tools"],
  ["Brand Identity Design", "Advanced", "Graphic Design and Creative Tools"],
  ["Ad Creative Variations", "Expert", "Graphic Design and Creative Tools"],
];

const levelWidth = { Expert: "96%", Advanced: "84%", Intermediate: "68%" };

export default function Skills() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="skills" className="section skills-section" data-reveal>
      <div className="wrap">
        <div className="skills-heading">
          <div>
            <span className="kicker">My Skills</span>
            <h2 className="section-title">Skills &amp; Tools</h2>
            <p className="section-copy">
              Systematically structured expertise across performance marketing,
              modern web technologies, and multimedia creativity.
            </p>
          </div>
          <button
            type="button"
            className="btn-light"
            onClick={() => setShowAll((value) => !value)}
            aria-expanded={showAll}
            aria-controls="complete-skills-list"
          >
            {showAll ? "Show Featured" : "View All Skills"} →
          </button>
        </div>
        <div
          id="complete-skills-list"
          className={`skills-grid ${showAll ? "expanded" : ""}`}
        >
          {skills.map(([name, level, category], index) => (
            <article
              className="skill-card"
              key={name}
              style={{ "--skill-index": index }}
            >
              <span className="skill-mark">{String(index + 1).padStart(2, "0")}</span>
              <span className="skill-category">{category}</span>
              <h3>{name}</h3>
              <div className="skill-bar" aria-hidden="true">
                <i style={{ "--skill-width": levelWidth[level] }} />
              </div>
              <small>{level}</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
