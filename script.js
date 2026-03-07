/* ==========================================================================
   GSV MUN - Premium Interactions
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Elegant Navbar Shadow on Scroll
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // 2. Premium Scroll Reveal Animation
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply reveal to all cards and major sections
  const elementsToReveal = document.querySelectorAll(
    ".card, .section-title, .reveal-element",
  );
  elementsToReveal.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    observer.observe(el);
  });

  // 3. FAQ Accordion Logic (Prepared for faq.html)
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isActive = item.classList.contains("active");

      // Close all
      document.querySelectorAll(".accordion-item").forEach((i) => {
        i.classList.remove("active");
        const icon = i.querySelector("i");
        if (icon) icon.style.transform = "rotate(0deg)";
      });

      // Open clicked if it wasn't already open
      if (!isActive) {
        item.classList.add("active");
        const icon = header.querySelector("i");
        if (icon) icon.style.transform = "rotate(180deg)";
      }
    });
  });
  // 4. Mobile Hamburger Menu Toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }
});
