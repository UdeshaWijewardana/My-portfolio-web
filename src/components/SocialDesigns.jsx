"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Eye, Grid3X3 } from "lucide-react";

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
  const [lightboxId, setLightboxId] = useState(null);
  const [carouselBoundaries, setCarouselBoundaries] = useState({ previous: false, next: false });
  const carouselRef = useRef(null);
  const closeButtonRef = useRef(null);
  const lastTriggerRef = useRef(null);
  const lightboxTouchStartX = useRef(null);

  const categories = ["All", "Social Media Creatives", "Promotions & Ads"];
  const curatedDesigns = useMemo(() => allDesigns.slice(0, 12), []);
  const sourceDesigns = showAll ? allDesigns : curatedDesigns;
  const displayedDesigns = useMemo(
    () =>
      activeTab === "All"
        ? sourceDesigns
        : sourceDesigns.filter((design) => design.category === activeTab),
    [activeTab, sourceDesigns]
  );
  const lightboxIndex = displayedDesigns.findIndex((design) => design.id === lightboxId);
  const activeDesign = lightboxIndex >= 0 ? displayedDesigns[lightboxIndex] : null;

  const closeLightbox = useCallback(() => setLightboxId(null), []);

  const moveLightbox = useCallback(
    (direction) => {
      if (!displayedDesigns.length || lightboxIndex < 0) return;
      const nextIndex =
        (lightboxIndex + direction + displayedDesigns.length) % displayedDesigns.length;
      setLightboxId(displayedDesigns[nextIndex].id);
    },
    [displayedDesigns, lightboxIndex]
  );

  const updateCarouselBoundaries = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const maximumScroll = Math.max(0, carousel.scrollWidth - carousel.clientWidth);
    const previous = carousel.scrollLeft > 2;
    const next = carousel.scrollLeft < maximumScroll - 2;
    setCarouselBoundaries((current) =>
      current.previous === previous && current.next === next
        ? current
        : { previous, next }
    );
  }, []);

  const moveCarousel = useCallback((direction) => {
    const carousel = carouselRef.current;
    const firstCard = carousel?.firstElementChild;
    if (!carousel || !firstCard) return;
    const styles = window.getComputedStyle(carousel);
    const gap = Number.parseFloat(styles.columnGap || styles.gap) || 0;
    carousel.scrollBy({ left: direction * (firstCard.getBoundingClientRect().width + gap), behavior: "smooth" });
  }, []);

  useEffect(() => {
    setLightboxId(null);
    if (carouselRef.current) carouselRef.current.scrollLeft = 0;
    const frame = window.requestAnimationFrame(updateCarouselBoundaries);
    return () => window.cancelAnimationFrame(frame);
  }, [activeTab, showAll, updateCarouselBoundaries]);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || showAll) return undefined;
    const observer = new ResizeObserver(updateCarouselBoundaries);
    observer.observe(carousel);
    updateCarouselBoundaries();
    return () => observer.disconnect();
  }, [displayedDesigns.length, showAll, updateCarouselBoundaries]);

  useEffect(() => {
    if (!activeDesign) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") moveLightbox(-1);
      if (event.key === "ArrowRight") moveLightbox(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      lastTriggerRef.current?.focus();
    };
  }, [activeDesign, closeLightbox, moveLightbox]);

  const openLightbox = (designId, trigger) => {
    lastTriggerRef.current = trigger;
    setLightboxId(designId);
  };

  const renderCard = (design) => (
    <button
      key={design.id}
      type="button"
      onClick={(event) => openLightbox(design.id, event.currentTarget)}
      aria-label={`Open ${design.title} in full-size image viewer`}
      className="design-card"
    >
      <span className="design-image">
        <Image
          src={`/assets/social/${design.file}`}
          alt={design.title}
          fill
          sizes={showAll
            ? "(max-width: 560px) 50vw, (max-width: 900px) 33vw, 25vw"
            : "(max-width: 560px) 78vw, (max-width: 900px) 42vw, 25vw"}
          loading="lazy"
        />
        <span className="design-category">{design.category}</span>
      </span>
      <span className="design-caption">
        <span>
          <strong>{design.title}</strong>
          <small>{design.caption}</small>
        </span>
        <span className="design-view-label" aria-hidden="true">
          View <Eye size={15} />
        </span>
      </span>
    </button>
  );

  return (
    <section id="designs" className="section design-section" data-reveal>
      <div className="wrap">
        
        {/* Section Header */}
        <div className="design-head">
          <div>
            <span className="kicker">Social Media Management</span>
            <h2 className="section-title">
              Social Media &amp; Ad Creatives
            </h2>
            <p className="section-copy">
              A curated collection of promotional posters, Meta Ad designs, and high-impact social media creatives crafted for audience engagement.
            </p>
          </div>

          <div className="design-filters" role="group" aria-label="Filter designs by category">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={activeTab === cat ? "active" : ""}
                aria-pressed={activeTab === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {displayedDesigns.length ? (
          showAll ? (
            <div className="design-grid design-grid-expanded" key={`grid-${activeTab}`}>
              {displayedDesigns.map(renderCard)}
            </div>
          ) : (
            <div className="design-carousel" aria-label={`${activeTab} curated design carousel`}>
              <div className="design-carousel-toolbar">
                <p aria-live="polite">
                  <strong>{displayedDesigns.length}</strong> curated design{displayedDesigns.length === 1 ? "" : "s"}
                </p>
                <div className="design-carousel-controls">
                  <button
                    type="button"
                    onClick={() => moveCarousel(-1)}
                    disabled={!carouselBoundaries.previous}
                    aria-label="View previous design"
                  >
                    <ChevronLeft aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => moveCarousel(1)}
                    disabled={!carouselBoundaries.next}
                    aria-label="View next design"
                  >
                    <ChevronRight aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div
                ref={carouselRef}
                className="design-carousel-track"
                onScroll={updateCarouselBoundaries}
                onKeyDown={(event) => {
                  if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    moveCarousel(-1);
                  }
                  if (event.key === "ArrowRight") {
                    event.preventDefault();
                    moveCarousel(1);
                  }
                }}
                tabIndex={0}
                aria-label="Designs. Use left and right arrow keys to navigate."
              >
                {displayedDesigns.map(renderCard)}
              </div>
            </div>
          )
        ) : (
          <p className="design-empty">No designs are available in this category.</p>
        )}

        <div className="design-view-toggle">
          <button type="button" onClick={() => setShowAll((current) => !current)}>
            <Grid3X3 size={18} aria-hidden="true" />
            <span>{showAll ? "Show Less (Curated 12)" : "View All Designs"}</span>
          </button>
          {showAll && (
            <span aria-live="polite">
              Showing {displayedDesigns.length} of {allDesigns.length} designs
            </span>
          )}
        </div>
      </div>

      {activeDesign && (
        <div className="design-lightbox" onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeLightbox();
        }}>
          <div
            className="design-lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="design-lightbox-title"
            onTouchStart={(event) => {
              lightboxTouchStartX.current = event.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(event) => {
              if (lightboxTouchStartX.current === null) return;
              const distance = (event.changedTouches[0]?.clientX ?? lightboxTouchStartX.current) - lightboxTouchStartX.current;
              lightboxTouchStartX.current = null;
              if (Math.abs(distance) >= 45) moveLightbox(distance > 0 ? -1 : 1);
            }}
          >
            <div className="design-lightbox-header">
              <div>
                <span>{activeDesign.category}</span>
                <h3 id="design-lightbox-title">{activeDesign.title}</h3>
                <small>{lightboxIndex + 1} of {displayedDesigns.length}</small>
              </div>
              <button ref={closeButtonRef} type="button" onClick={closeLightbox} aria-label="Close image preview">
                <X aria-hidden="true" />
              </button>
            </div>

            <div className="design-lightbox-media">
              <Image
                src={`/assets/social/${activeDesign.file}`}
                alt={activeDesign.title}
                fill
                priority
                sizes="100vw"
              />
              {displayedDesigns.length > 1 && (
                <>
                  <button type="button" className="design-lightbox-prev" onClick={() => moveLightbox(-1)} aria-label="View previous image">
                    <ChevronLeft aria-hidden="true" />
                  </button>
                  <button type="button" className="design-lightbox-next" onClick={() => moveLightbox(1)} aria-label="View next image">
                    <ChevronRight aria-hidden="true" />
                  </button>
                </>
              )}
            </div>
            <p>{activeDesign.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
