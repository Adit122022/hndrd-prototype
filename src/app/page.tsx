"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { mockProducts } from "@/lib/mock-data";
import {
  fadeUpReveal,
  staggerCards,
  heroEntrance,
  slideIn,
  scaleReveal,
  cleanupScrollTriggers,
} from "@/lib/animations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/* ── DATA ─────────────────────────────────────────────── */
const BANNERS = [
  {
    id: 1,
    eyebrow: "Season's Best",
    title: "PREDATOR\nSERIES",
    cta: "Shop Rackets",
    href: "/collections/badminton",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=1800",
    accent: "#E8272A",
  },
  {
    id: 2,
    eyebrow: "Performance Footwear",
    title: "COURT\nSTAR PRO",
    cta: "Shop Shoes",
    href: "/collections/badminton",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1800",
    accent: "#C9A84C",
  },
  {
    id: 3,
    eyebrow: "Cricket Collection",
    title: "BEAST\nMAX",
    cta: "Shop Cricket",
    href: "/collections/cricket",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1800",
    accent: "#2A6FE8",
  },
];

const SPORTS = [
  { name: "Badminton",   count: "141+", href: "/collections/badminton",   image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=700" },
  { name: "Cricket",     count: "13+",  href: "/collections/cricket",     image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=700" },
  { name: "Pickleball",  count: "39+",  href: "/collections/pickleball",  image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=700" },
  { name: "Accessories", count: "60+",  href: "/collections/accessories", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=700" },
];

const FEATURES = [
  { icon: "🚀", label: "Free Delivery",   sub: "Orders above ₹999" },
  { icon: "🔄", label: "Easy Returns",    sub: "7-day hassle-free" },
  { icon: "🛡️", label: "100% Authentic",  sub: "Guaranteed genuine" },
  { icon: "💬", label: "Live Support",    sub: "WhatsApp & email" },
];

/* ── PAGE ─────────────────────────────────────────────── */
export default function Home() {
  const bestSellers = mockProducts.filter((p) => p.isBestSeller);

  /* ─── refs for GSAP targets ──────────────────────────── */
  const heroEyebrowRef  = useRef<HTMLDivElement>(null);
  const heroTitleRef    = useRef<HTMLHeadingElement>(null);
  const heroCtaRef      = useRef<HTMLAnchorElement>(null);
  const featuresRef     = useRef<HTMLDivElement>(null);
  const sportsRef       = useRef<HTMLDivElement>(null);
  const dealSectionRef  = useRef<HTMLDivElement>(null);
  const dealImgRef      = useRef<HTMLDivElement>(null);
  const bestSellerRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* 1. Hero entrance (runs immediately, no ScrollTrigger) */
    heroEntrance([
      heroEyebrowRef.current,
      heroTitleRef.current,
      heroCtaRef.current,
    ]);

    /* 2. Features bar — scale reveal */
    if (featuresRef.current) {
      scaleReveal(Array.from(featuresRef.current.querySelectorAll(".feature-item")));
    }

    /* 3. Sport cards — stagger up */
    if (sportsRef.current) {
      staggerCards(
        Array.from(sportsRef.current.querySelectorAll(".sport-card")),
        sportsRef.current
      );
    }

    /* 4. Deal section — slide in from sides */
    if (dealSectionRef.current) {
      fadeUpReveal(Array.from(dealSectionRef.current.querySelectorAll(".deal-text > *")));
      if (dealImgRef.current) slideIn(dealImgRef.current, "right");
    }

    /* 5. Best sellers grid — stagger */
    if (bestSellerRef.current) {
      staggerCards(
        Array.from(bestSellerRef.current.querySelectorAll(".product-card-wrap")),
        bestSellerRef.current
      );
    }

    return () => cleanupScrollTriggers();
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden">

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section>
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {BANNERS.map((b, idx) => (
              <CarouselItem key={b.id}>
                <div className="relative h-[60vh] sm:h-[75vh] md:h-[92vh] overflow-hidden bg-[#0D0D0D]">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    priority={idx === 0}
                    className="object-cover opacity-45"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/80 via-[#0D0D0D]/30 to-transparent" />
                  {/* Left accent stripe */}
                  <div className="absolute left-0 inset-y-0 w-1" style={{ background: b.accent }} />

                  {/* Copy */}
                  <div className="absolute inset-0 flex flex-col justify-end pb-10 sm:pb-14 md:pb-20 px-6 sm:px-10 md:px-20">
                    <div ref={idx === 0 ? heroEyebrowRef : undefined} className="flex items-center gap-3 mb-4 md:mb-6">
                      <div className="w-6 h-px" style={{ background: b.accent }} />
                      <span className="text-white/60 text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
                        {b.eyebrow}
                      </span>
                    </div>
                    <h1
                      ref={idx === 0 ? heroTitleRef : undefined}
                      className="font-syne text-[clamp(44px,8vw,110px)] font-extrabold leading-none text-white whitespace-pre-line tracking-tight mb-6 md:mb-10"
                    >
                      {b.title}
                    </h1>
                    <Link
                      href={b.href}
                      ref={idx === 0 ? heroCtaRef : undefined}
                      className="group self-start inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm text-[#0D0D0D] bg-white hover:bg-[#F9F8F6] transition-all duration-300 hover:gap-5 hover:shadow-lg"
                    >
                      {b.cta}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Nav arrows – only desktop */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-10 hidden sm:flex gap-2">
            <CarouselPrevious className="relative static translate-none top-0 left-0 w-10 h-10 rounded-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-[#0D0D0D] backdrop-blur-md transition-all duration-200" />
            <CarouselNext    className="relative static translate-none top-0 left-0 w-10 h-10 rounded-full bg-white/10 border-white/20 text-white hover:bg-white hover:text-[#0D0D0D] backdrop-blur-md transition-all duration-200" />
          </div>
        </Carousel>
      </section>

      {/* ══ FEATURE BAR ═══════════════════════════════════ */}
      <section className="bg-[#0D0D0D]" ref={featuresRef}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-5 md:py-6 grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-0 md:divide-x md:divide-white/10">
          {FEATURES.map((f) => (
            <div key={f.label} className="feature-item flex items-center gap-3 md:gap-4 md:px-8 first:pl-0 last:pr-0">
              <span className="text-xl md:text-2xl">{f.icon}</span>
              <div>
                <div className="text-white font-syne font-bold text-xs md:text-sm">{f.label}</div>
                <div className="text-white/40 text-[10px] md:text-xs mt-0.5">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SHOP BY SPORT ═════════════════════════════════ */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-10 py-16 md:py-28 w-full">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <div className="text-[10px] md:text-xs text-[#E8272A] font-bold uppercase tracking-widest mb-2">Categories</div>
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D0D0D] leading-tight">
              Shop By Sport
            </h2>
          </div>
          <Link href="/collections/badminton" className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#6B6965] hover:text-[#0D0D0D] transition-colors group">
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid: col-0 is 2x on md+ */}
        <div
          ref={sportsRef}
          className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] grid-rows-auto gap-3 md:gap-4"
        >
          {SPORTS.map((s, i) => (
            <Link
              key={s.name}
              href={s.href}
              className={`sport-card group relative overflow-hidden rounded-2xl md:rounded-3xl bg-[#0D0D0D] ${i === 0 ? "row-span-2 col-span-2 md:col-span-1" : ""}`}
              style={{ minHeight: i === 0 ? "300px" : "160px" }}
            >
              <Image
                src={s.image}
                alt={s.name}
                fill
                sizes="(max-width:768px) 50vw, 33vw"
                className="object-cover opacity-55 transition-all duration-700 group-hover:opacity-75 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 md:p-6 lg:p-8">
                <div className="text-white/50 text-[9px] md:text-xs uppercase tracking-widest font-semibold mb-0.5">{s.count} products</div>
                <h3 className="font-syne text-white text-lg md:text-2xl lg:text-3xl font-extrabold">{s.name}</h3>
                <div className="flex items-center gap-2 mt-2 text-white/50 text-[10px] md:text-xs font-semibold group-hover:text-white transition-colors">
                  Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══ DEAL OF THE DAY ═══════════════════════════════ */}
      <section className="bg-[#0D0D0D] overflow-hidden" ref={dealSectionRef}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="deal-text space-y-0">
            <div className="inline-flex items-center gap-2 bg-[#E8272A]/15 border border-[#E8272A]/30 text-[#E8272A] rounded-full px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8">
              ⚡ Deal of the Day
            </div>
            <h2 className="font-syne text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-none pb-4">
              RAZE<br />PRO II
            </h2>
            <p className="text-white/50 max-w-sm text-sm leading-relaxed pb-6 md:pb-8">
              Precision-engineered carbon graphite shaft. Head-heavy balance for championship smashes.
            </p>
            <div className="flex flex-wrap items-baseline gap-4 pb-8 md:pb-10">
              <span className="font-syne text-4xl md:text-5xl font-extrabold text-white">₹2,499</span>
              <span className="text-white/30 text-xl line-through">₹3,299</span>
              <span className="bg-[#E8272A] text-white text-xs font-black px-3 py-1.5 rounded-full">Save ₹800</span>
            </div>
            <Link
              href="/products/raze-pro-ii"
              className="group inline-flex items-center gap-3 bg-white text-[#0D0D0D] font-bold text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-[#F9F8F6] transition-all duration-300 hover:gap-5"
            >
              Grab the Deal <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image */}
          <div ref={dealImgRef} className="relative flex items-center justify-center py-8 md:py-0">
            <div className="absolute w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-[#E8272A]/8 animate-glow" />
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 animate-float">
              <Image
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=600"
                alt="Raze Pro II"
                fill
                className="object-contain drop-shadow-[0_32px_64px_rgba(232,39,42,0.3)]"
                sizes="(max-width:768px) 200px, 400px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ BEST SELLERS ══════════════════════════════════ */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-10 py-16 md:py-28 w-full">
        <div className="flex items-end justify-between mb-8 md:mb-12">
          <div>
            <div className="text-[10px] md:text-xs text-[#E8272A] font-bold uppercase tracking-widest mb-2">Top Picks</div>
            <h2 className="font-syne text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0D0D0D]">Best Sellers</h2>
          </div>
          <Link href="/collections/badminton" className="hidden md:flex items-center gap-2 text-sm font-semibold text-[#6B6965] hover:text-[#0D0D0D] transition-colors group">
            View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div
          ref={bestSellerRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
        >
          {bestSellers.map((p) => (
            <div key={p.id} className="product-card-wrap">
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 flex md:hidden justify-center">
          <Link href="/collections/badminton" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-[#0D0D0D] text-sm font-bold hover:bg-[#0D0D0D] hover:text-white transition-all duration-200">
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ══ MARQUEE ═══════════════════════════════════════ */}
      <div className="py-4 md:py-5 bg-[#E8272A] overflow-hidden">
        <div className="flex gap-0 animate-marquee whitespace-nowrap">
          {[...Array(8)].fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-10 md:gap-14 shrink-0 text-white font-syne font-extrabold text-xs md:text-sm uppercase tracking-widest px-5 md:px-7">
              <span>Free Shipping ₹999+</span>
              <span className="text-white/40">✦</span>
              <span>100% Authentic</span>
              <span className="text-white/40">✦</span>
              <span>7-Day Returns</span>
              <span className="text-white/40">✦</span>
              <span>WhatsApp Support</span>
              <span className="text-white/40">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
