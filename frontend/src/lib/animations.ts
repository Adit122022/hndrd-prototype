/**
 * animations.ts
 * ─────────────────────────────────────────────────────────
 * All GSAP animation helpers live here.
 * Import and call these from your components/pages.
 * ─────────────────────────────────────────────────────────
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Register plugins once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

/* ─── DEFAULTS ──────────────────────────────────────────── */
const EASE_OUT  = "power3.out";
const EASE_EXPO = "expo.out";
const DURATION  = 0.9;

/* ─────────────────────────────────────────────────────────
   1.  FADE-UP REVEAL
   Animates elements up from below when they enter viewport.
   Usage: fadeUpReveal(".my-section h2, .my-section p");
──────────────────────────────────────────────────────────*/
export function fadeUpReveal(
  targets: string | Element | Element[],
  opts: { stagger?: number; delay?: number; distance?: number } = {}
) {
  const { stagger = 0.12, delay = 0, distance = 48 } = opts;

  return gsap.fromTo(
    targets,
    { y: distance, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: DURATION,
      ease: EASE_OUT,
      stagger,
      delay,
      scrollTrigger: {
        trigger: typeof targets === "string" ? targets : (targets as Element[])[0],
        start: "top 88%",
        once: true,
      },
    }
  );
}

/* ─────────────────────────────────────────────────────────
   2.  STAGGER CARDS
   Animates a grid of cards in from the bottom, staggered.
   Usage: staggerCards(".product-card")
──────────────────────────────────────────────────────────*/
export function staggerCards(
  targets: string | Element[],
  trigger?: string | Element
) {
  return gsap.fromTo(
    targets,
    { y: 60, opacity: 0, scale: 0.96 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: DURATION,
      ease: EASE_OUT,
      stagger: 0.1,
      scrollTrigger: {
        trigger: trigger ?? (typeof targets === "string" ? targets : undefined),
        start: "top 85%",
        once: true,
      },
    }
  );
}

/* ─────────────────────────────────────────────────────────
   3.  HERO ENTRANCE
   Staggers hero copy elements from below on page load.
   Usage: heroEntrance([eyebrow, h1, cta])
──────────────────────────────────────────────────────────*/
export function heroEntrance(elements: (Element | null)[]) {
  const valid = elements.filter(Boolean) as Element[];
  if (!valid.length) return;

  return gsap.fromTo(
    valid,
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.1,
      ease: EASE_EXPO,
      stagger: 0.14,
      delay: 0.2,
    }
  );
}

/* ─────────────────────────────────────────────────────────
   4.  PARALLAX IMAGE
   Subtle vertical parallax for a hero background.
   Usage: parallaxImage(".hero-img", 0.25)
──────────────────────────────────────────────────────────*/
export function parallaxImage(
  target: string | Element,
  strength = 0.2
) {
  return gsap.to(target, {
    yPercent: -(strength * 100),
    ease: "none",
    scrollTrigger: {
      trigger: target,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

/* ─────────────────────────────────────────────────────────
   5.  SECTION SLIDE-IN (left / right)
   Slides a section from the left or right.
   Usage: slideIn(".about-img", "left")
──────────────────────────────────────────────────────────*/
export function slideIn(
  target: string | Element,
  direction: "left" | "right" = "left"
) {
  const x = direction === "left" ? -80 : 80;

  return gsap.fromTo(
    target,
    { x, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: DURATION,
      ease: EASE_OUT,
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
        once: true,
      },
    }
  );
}

/* ─────────────────────────────────────────────────────────
   6.  COUNTER / NUMBER TWEEN
   Animates a number from 0 to a target.
   Usage: countUp(el, 141)
──────────────────────────────────────────────────────────*/
export function countUp(target: Element, end: number, suffix = "") {
  const obj = { val: 0 };
  return gsap.to(obj, {
    val: end,
    duration: 1.6,
    ease: EASE_OUT,
    scrollTrigger: { trigger: target, start: "top 85%", once: true },
    onUpdate() {
      target.textContent = Math.round(obj.val) + suffix;
    },
  });
}

/* ─────────────────────────────────────────────────────────
   7.  SCALE REVEAL (for badges, icons, etc.)
   Usage: scaleReveal(".badge")
──────────────────────────────────────────────────────────*/
export function scaleReveal(
  targets: string | Element | Element[],
  delay = 0
) {
  return gsap.fromTo(
    targets,
    { scale: 0.75, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
      stagger: 0.08,
      delay,
      scrollTrigger: {
        trigger: typeof targets === "string" ? targets : undefined,
        start: "top 88%",
        once: true,
      },
    }
  );
}

/* ─────────────────────────────────────────────────────────
   8.  HORIZONTAL MARQUEE (pure GSAP, no CSS)
   Self-contained infinite horizontal scroll.
   Usage: marqueeGSAP(".ticker-inner", -1) // direction: 1 or -1
──────────────────────────────────────────────────────────*/
export function marqueeGSAP(target: string | Element, speed = 1) {
  return gsap.to(target, {
    xPercent: -50 * speed,
    repeat: -1,
    duration: 28,
    ease: "none",
  });
}

/* ─────────────────────────────────────────────────────────
   9.  CLEANUP
   Call on component unmount to kill ScrollTrigger instances.
──────────────────────────────────────────────────────────*/
export function cleanupScrollTriggers() {
  ScrollTrigger.getAll().forEach(st => st.kill());
}

export { gsap, ScrollTrigger };
