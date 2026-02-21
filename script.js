(() => {

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* Mobile menu */
  const menuBtn = $(".menu-btn");
  const mobile = $(".mobile");

  if (menuBtn && mobile) {
    mobile.hidden = true;
    menuBtn.setAttribute("aria-expanded", "false");

    menuBtn.addEventListener("click", () => {
      const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!isOpen));
      mobile.hidden = isOpen;
    });

    $$(".mobile a").forEach(a => {
      a.addEventListener("click", () => {
        menuBtn.setAttribute("aria-expanded", "false");
        mobile.hidden = true;
      });
    });
  }

  /* Reveal animation */
  const reveals = $$(".reveal");

  if (reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("show");
      });
    }, { threshold: 0.12 });

    reveals.forEach(el => io.observe(el));
  }

  /* Footer year */
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();

  /* ===== DESIGNS SLIDER ===== */

  const track = document.querySelector(".slider-grid");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  if(track){

    const slideAmount = track.clientWidth;

    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: slideAmount, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -slideAmount, behavior: "smooth" });
    });

    /* Auto slide */
    setInterval(() => {

      const nearEnd =
        track.scrollLeft + track.clientWidth >= track.scrollWidth - 10;

      if (nearEnd) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: slideAmount, behavior: "smooth" });
      }

    }, 4000);
  }

})();