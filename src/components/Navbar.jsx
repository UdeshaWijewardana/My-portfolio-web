"use client";

import { useEffect, useState } from "react";
import { ArrowDownToLine, ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Designs", "#designs"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

const cvDownloadPath = "/assets/Danu_Wijewardana_CV.pdf?v=2026-10-17";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    let frame;
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 28);
        if (window.scrollY < 120) setActive("");
        frame = undefined;
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const sections = links
      .map(([, href]) => document.querySelector(href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-24% 0px -62% 0px", threshold: [0, 0.15, 0.4] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`nav-header ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <div className="wrap nav-shell">
        <a className="brand" href="#top" aria-label="Danu, back to top" onClick={closeMenu}>
          <span className="brand-word">DANU<i>.</i></span>
          <span className="brand-caption">
            <strong>Danu Wijewardana</strong>
            <small>Digital creative portfolio</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className={active === href ? "active" : ""}
              aria-current={active === href ? "location" : undefined}
            >
              <span className="nav-link-label">{name}</span>
            </a>
          ))}
        </nav>

        <a
          className="nav-cta"
          href={cvDownloadPath}
          download="Danu_Wijewardana_CV.pdf"
        >
          <span className="nav-cta-copy">
            <strong>Download CV</strong>
            <small>PDF</small>
          </span>
          <ArrowDownToLine size={14} aria-hidden="true" />
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span>{open ? "Close" : "Menu"}</span>
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      <button
        type="button"
        className="mobile-nav-backdrop"
        aria-label="Close navigation"
        tabIndex={open ? 0 : -1}
        onClick={closeMenu}
      />

      <nav
        id="mobile-navigation"
        className={`mobile-menu ${open ? "open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!open}
      >
        <div className="mobile-menu-meta" aria-hidden="true">
          <span>Navigation</span>
          <span>Creative portfolio · 2026</span>
        </div>
        {links.map(([name, href], index) => (
          <a
            key={name}
            href={href}
            className={active === href ? "active" : ""}
            onClick={closeMenu}
            tabIndex={open ? 0 : -1}
          >
            <span className="mobile-link-index">{String(index + 1).padStart(2, "0")}</span>
            <span>{name}</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        ))}
        <a
          className="mobile-cv"
          href={cvDownloadPath}
          download="Danu_Wijewardana_CV.pdf"
          onClick={closeMenu}
          tabIndex={open ? 0 : -1}
        >
          Download CV <ArrowDownToLine size={16} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
