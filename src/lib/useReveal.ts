import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Observes every `.reveal` element on the page and adds `is-visible`
 * as it scrolls into view. Elements already within the initial viewport
 * are revealed immediately so above-the-fold content never stays hidden.
 * Re-scans on every route change.
 */
export function useReveal() {
  const location = useLocation();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    const pending: HTMLElement[] = [];

    // Reveal anything already on screen right away; observe the rest.
    for (const el of els) {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportH * 0.92) {
        el.classList.add("is-visible");
      } else {
        pending.push(el);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    pending.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);
}
