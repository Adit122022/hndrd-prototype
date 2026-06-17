"use client";

import Link from "next/link";
import { Search, ShoppingBag, Menu, X, User, ChevronDown, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState, useEffect, useRef } from "react";

const NAV = [
  {
    label: "Badminton",
    href: "/collections/badminton",
    featured: { label: "NEW: Raze Pro II", href: "/products/raze-pro-ii", badge: "Just Dropped" },
    cols: [
      { heading: "Equipment", links: [{ name: "Rackets", tag: "141 items" }, { name: "Strings" }, { name: "Shuttlecocks" }] },
      { heading: "Footwear", links: [{ name: "Shoes", tag: "Top Rated" }, { name: "Socks" }] },
      { heading: "Gear", links: [{ name: "Kit Bags" }, { name: "Grips" }, { name: "Accessories" }] },
    ],
  },
  {
    label: "Cricket",
    href: "/collections/cricket",
    featured: { label: "Beast Max Bat", href: "/products/beast-max", badge: "Best Seller" },
    cols: [
      { heading: "Batting", links: [{ name: "Bats", tag: "13 items" }, { name: "Gloves" }, { name: "Pads" }] },
      { heading: "Protection", links: [{ name: "Helmets" }, { name: "Guards" }] },
    ],
  },
  {
    label: "Pickleball",
    href: "/collections/pickleball",
    featured: { label: "Court Step PBX", href: "/products/court-step-pbx", badge: "New" },
    cols: [
      { heading: "Play", links: [{ name: "Paddles", tag: "39 items" }, { name: "Balls" }] },
      { heading: "Carry", links: [{ name: "Bags" }, { name: "Accessories" }] },
    ],
  },
  { label: "Clothing", href: "/collections/clothing", cols: [], featured: null },
  { label: "Accessories", href: "/collections/accessories", cols: [], featured: null },
];

export function Navbar() {
  const { items, setIsCartOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveNav(label);
  };
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveNav(null), 120);
  };

  return (
    <>
      {/* ── TOP TICKER ─────────────────────────────────────── */}
      <div className="h-9 bg-[#0D0D0D] text-white text-[11px] font-medium overflow-hidden flex items-center">
        <div className="flex gap-20 animate-marquee whitespace-nowrap">
          {[...Array(4)].fill(null).map((_, i) => (
            <span key={i} className="flex items-center gap-16 shrink-0 tracking-wide">
              <span>✦ FREE SHIPPING ON ₹999+</span>
              <span>✦ USE CODE <strong className="text-[#C9A84C]">HNDRD10</strong> FOR 10% OFF</span>
              <span>✦ 7-DAY EASY RETURNS</span>
              <span>✦ 100% AUTHENTIC PRODUCTS</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── MAIN HEADER ────────────────────────────────────── */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled ? "bg-[#F9F8F6]/95 backdrop-blur-xl shadow-sm shadow-black/5 border-b border-black/5" : "bg-[#F9F8F6] border-b border-black/8"}`}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 h-[68px] flex items-center gap-6">

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2 -ml-1 rounded-xl hover:bg-black/5 transition-colors" onClick={() => setMobileOpen(true)}>
            <Menu className="w-5 h-5" />
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 font-syne text-[22px] font-extrabold tracking-tight text-[#0D0D0D] hover:text-[#E8272A] transition-colors duration-300">
            HND<span className="text-[#E8272A]">RD</span>
            <span className="hidden md:inline text-[10px] font-semibold text-[#8A8784] tracking-widest ml-2 uppercase align-middle">India</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 flex-1">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => openDropdown(item.label)}
                onMouseLeave={closeDropdown}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    activeNav === item.label
                      ? "bg-[#0D0D0D] text-white"
                      : "text-[#3A3A3A] hover:bg-black/6 hover:text-[#0D0D0D]"
                  }`}
                >
                  {item.label}
                  {item.cols.length > 0 && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${activeNav === item.label ? "rotate-180" : ""}`} />
                  )}
                </Link>

                {/* Mega Dropdown */}
                {activeNav === item.label && item.cols.length > 0 && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50 animate-in fade-in slide-in-from-top-3 duration-200"
                    onMouseEnter={() => openDropdown(item.label)}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="bg-white border border-black/8 rounded-3xl shadow-2xl shadow-black/12 overflow-hidden min-w-[540px]">
                      {/* Featured strip */}
                      {item.featured && (
                        <div className="bg-[#0D0D0D] px-6 py-3 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="bg-[#E8272A] text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase">{item.featured.badge}</span>
                            <span className="text-white text-sm font-semibold">{item.featured.label}</span>
                          </div>
                          <Link href={item.featured.href} className="text-[#C9A84C] text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                            Shop <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      )}
                      {/* Column grid */}
                      <div className="grid p-5 gap-6" style={{ gridTemplateColumns: `repeat(${item.cols.length}, 1fr)` }}>
                        {item.cols.map((col) => (
                          <div key={col.heading}>
                            <div className="text-[10px] font-black uppercase tracking-widest text-[#8A8784] mb-3 pb-2 border-b border-black/6">{col.heading}</div>
                            <ul className="space-y-0.5">
                              {col.links.map((link) => (
                                <li key={link.name}>
                                  <Link
                                    href={`${item.href}/${link.name.toLowerCase()}`}
                                    className="flex items-center justify-between px-3 py-2 text-sm font-medium text-[#3A3A3A] rounded-xl hover:bg-[#F9F8F6] hover:text-[#E8272A] transition-all duration-150 group"
                                  >
                                    <span>{link.name}</span>
                                    {"tag" in link && link.tag && (
                                      <span className="text-[9px] font-black uppercase tracking-wide bg-[#F0EDE8] text-[#6B6965] px-2 py-0.5 rounded-full">{link.tag}</span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      {/* Footer CTA */}
                      <div className="border-t border-black/6 px-5 py-3 flex items-center justify-between bg-[#F9F8F6]">
                        <span className="text-xs text-[#8A8784]">Explore full {item.label} range</span>
                        <Link href={item.href} className="text-xs font-bold text-[#0D0D0D] flex items-center gap-1 hover:text-[#E8272A] transition-colors">
                          View all <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Deal CTA */}
            <Link href="#" className="ml-3 flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-xl bg-[#E8272A] text-white hover:bg-[#C41F22] transition-all duration-200 hover:shadow-lg hover:shadow-[#E8272A]/30 hover:-translate-y-0.5">
              <span className="text-base">⚡</span> Deal of the Day
            </Link>
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1 ml-auto">
            <button onClick={() => setSearchOpen(v => !v)} className="p-2.5 rounded-xl hover:bg-black/6 transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:flex p-2.5 rounded-xl hover:bg-black/6 transition-colors" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
            <button onClick={() => setIsCartOpen(true)} className="relative p-2.5 rounded-xl hover:bg-black/6 transition-colors" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute top-1.5 right-1.5 bg-[#E8272A] text-white text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full animate-in zoom-in-50 duration-200">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-black/6 px-5 py-3 animate-in slide-in-from-top-2 duration-200 bg-[#F9F8F6]">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A8784]" />
              <input
                autoFocus
                type="text"
                placeholder="Search rackets, shoes, bags…"
                className="w-full pl-11 pr-4 py-3 bg-white border border-black/8 rounded-2xl text-sm outline-none focus:ring-2 focus:ring-[#0D0D0D]/10 transition-all placeholder:text-[#B0ADA8] font-medium"
              />
            </div>
          </div>
        )}
      </header>

      {/* ── MOBILE DRAWER ──────────────────────────────────── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[320px] max-w-[90vw] bg-[#F9F8F6] shadow-2xl animate-in slide-in-from-left duration-300 flex flex-col">
            <div className="flex items-center justify-between px-6 py-5 border-b border-black/8">
              <Link href="/" className="font-syne text-xl font-extrabold" onClick={() => setMobileOpen(false)}>
                HND<span className="text-[#E8272A]">RD</span>
              </Link>
              <button className="p-2 rounded-xl hover:bg-black/6" onClick={() => setMobileOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3.5 rounded-2xl font-semibold text-sm hover:bg-black/5 hover:text-[#E8272A] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                  <ChevronDown className="-rotate-90 w-4 h-4 text-[#B0ADA8]" />
                </Link>
              ))}
              <Link
                href="#"
                className="flex items-center justify-center gap-2 mt-4 px-4 py-3.5 rounded-2xl font-bold text-sm bg-[#E8272A] text-white"
                onClick={() => setMobileOpen(false)}
              >
                ⚡ Deal of the Day
              </Link>
            </nav>
            <div className="p-4 border-t border-black/8">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold text-sm hover:bg-black/5">
                <User className="w-5 h-5 text-[#8A8784]" /> My Account
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
