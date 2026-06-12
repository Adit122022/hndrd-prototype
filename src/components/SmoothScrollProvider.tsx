"use client";

/**
 * SmoothScrollProvider.tsx
 * ─────────────────────────────────────────────────────────
 * Wraps the entire app with:
 *   • Lenis  — butter-smooth inertia scrolling
 *   • GSAP ScrollTrigger — synced to Lenis raf
 * ─────────────────────────────────────────────────────────
 */

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // ── 1. Create Lenis instance ─────────────────────────
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // ── 2. Wire Lenis into GSAP ticker ───────────────────
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0); // prevent GSAP from compensating for tab-switch

    // ── 3. Sync ScrollTrigger to Lenis ───────────────────
    lenis.on("scroll", ScrollTrigger.update);

    // ── 4. Cleanup on unmount ─────────────────────────────
    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
