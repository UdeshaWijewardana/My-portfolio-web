"use client";

import Image from "next/image";

const services = [
  {
    title: "Web Development & Maintenance",
    description:
      "Building, updating, maintaining, and improving clean, responsive websites using WordPress and basic frontend technologies (HTML, CSS, JS).",
    inquiry: "Website Development",
  },
  {
    title: "IT Projects & Technical Solutions",
    description:
      "I work on web-based and IT-related projects, helping turn ideas into practical digital solutions through development, technical implementation, and problem-solving.",
    inquiry: "IT Project / Technical Solution",
  },
  {
    title: "Social Media Management",
    description:
      "Creating engaging social media content, planning schedules, and managing daily page operations to grow audiences naturally.",
    inquiry: "Social Media Management",
  },
  {
    title: "Graphic Design & Digital Marketing",
    description:
      "Designing promotional banners, flyers, social media creatives, and visual assets while supporting practical digital marketing and Meta Ads needs.",
    inquiry: "Graphic Design",
  },
];

export default function About() {
  const chooseService = (service) => {
    window.dispatchEvent(
      new CustomEvent("portfolio:service", { detail: { service } })
    );
  };

  return (
    <section id="about" className="section" data-reveal>
      <div className="wrap">
        <div className="about-grid">
          <div className="about-copy">
            <span className="kicker">About Me</span>
            <h2 className="section-title">A Bit About My Background</h2>
            <p className="section-copy">
              IT student with practical experience in social media, web development,
              and digital support for fashion events.
            </p>
            <details className="about-details">
              <summary>More About Me →</summary>
              <p>
                I am a final-year <strong>BSc (Hons) IT student</strong> with a strong
                interest in digital marketing, web design, and creative work. Over the
                past few years, I have gained hands-on experience in managing social
                media pages, creating content, and building responsive websites.
              </p>
              <p>
                Much of my work has been with <strong>Fashion Model UNI Academy</strong>
                {" "}and <strong>Fashion Model Hub TV</strong>, where I look after social
                media channels, design promotional posts, and help maintain official web
                pages. I also build and update websites using <strong>WordPress and basic
                frontend technologies</strong> (HTML, CSS, JavaScript) to ensure brands
                have a clean and working online home.
              </p>
              <p>
                Along with online work, I regularly support fashion shows and runway
                events. Working with choreographer <strong>Gihan Dassanayake</strong>, I
                help handle social media plans, backstage media, and event planning. This
                has given me great practical exposure working with events and brands like
                <strong> Hayleys Fabric</strong>, <strong>MAS Accessories</strong>, and the
                <strong> CCWE Women Fashion Week</strong>.
              </p>
            </details>
          </div>
          <div className="about-images">
            <div>
              <Image
                src="/assets/social/profile.jpeg"
                alt="D.A.N.U Wijewardana"
                fill
                sizes="(max-width: 480px) 50vw, (max-width: 800px) 33vw, 20vw"
              />
            </div>
            <div>
              <Image
                src="/assets/fb.jpg?v=2026-10-19"
                alt="D.A.N.U Wijewardana seated portrait"
                fill
                sizes="(max-width: 480px) 50vw, (max-width: 800px) 33vw, 20vw"
              />
            </div>
            <div>
              <Image
                src="/assets/fb2.jpg?v=2026-10-19"
                alt="D.A.N.U Wijewardana studio portrait"
                fill
                sizes="(max-width: 800px) 33vw, 20vw"
              />
            </div>
          </div>
        </div>
        <div className="services" data-reveal>
          <div className="services-head">
            <div>
              <span className="kicker">My Services</span>
              <h3 className="section-title" style={{ fontSize: 27 }}>What I Can Help With</h3>
            </div>
          </div>
          {services.map((service, index) => (
            <a
              className="service-row"
              href="#contact"
              key={service.title}
              onClick={() => chooseService(service.inquiry)}
              style={{ "--service-index": index }}
            >
              <span className="service-no">0{index + 1}</span>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
              <span className="service-arrow" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
