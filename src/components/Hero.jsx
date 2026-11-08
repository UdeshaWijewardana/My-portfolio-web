import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";

const statistics = [
  ["34+", "Creative Ad & Social Designs"],
  ["5+", "Web & UI Client Projects"],
  ["Meta Ads", "Campaign Strategy & Growth"],
  ["Social Media", "Audience Growth & Content Management"],
];

export default function Hero() {
  return (
    <section id="top" className="hero custom-hero" aria-labelledby="hero-heading">
      <div className="hero-stage">
        <div className="hero-artwork">
          <Image
            src="/images/hero-background.png"
            alt="D.A.N.U Wijewardana standing beside a chair"
            fill
            priority
            fetchPriority="high"
            quality={92}
            sizes="100vw"
            className="hero-background-image"
          />

          <div className="hero-signature" aria-label="Danu, Creative Professional">
            <span>Danu</span>
            <small>Creative Professional</small>
          </div>

          <div className="hero-availability">
            <span aria-hidden="true" />
            Available for work
          </div>
        </div>

        <div className="wrap hero-main-content">
          <div className="hero-copy">
            <span className="kicker hero-kicker">
              D.A.N.U Wijewardana · Creative Professional
            </span>
            <h1 id="hero-heading" className="hero-heading">
              <span>Digital Marketing.</span>
              <br />
              <em>Web Design.</em>
              <br />
              <span>Social Media.</span>
            </h1>
            <p className="hero-intro">
              Final-year BSc (Hons) IT student with experience in social media
              management and web development. Working as a freelance web &amp;
              graphic designer, I help brands and fashion events build their
              online presence with clean websites, engaging content, and digital
              support.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-dark">
                <span>View Projects</span>
                <ArrowRight size={15} aria-hidden="true" />
              </a>
              <a href="#contact" className="btn-light">
                <span>Contact Me</span>
                <ArrowRight size={15} aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/94750739897?text=Hi%20Danu,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!"
                className="btn-light hero-whatsapp"
                target="_blank"
                rel="noreferrer"
                aria-label="Contact Danu via WhatsApp"
              >
                <MessageCircle size={15} aria-hidden="true" />
                <span>WhatsApp Me</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stat-strip" aria-label="Portfolio statistics">
        <div className="wrap metrics" role="list">
          {statistics.map(([value, label], index) => (
            <div
              className="metric"
              role="listitem"
              style={{ "--metric-index": index }}
              key={value}
            >
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
