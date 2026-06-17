import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10 py-14 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-xs text-red-500 font-black uppercase tracking-widest mb-2">Newsletter</div>
            <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">Get Exclusive Deals</h3>
            <p className="text-gray-400 mt-2 text-sm">Subscribe for 10% off your first order.</p>
          </div>
          <div className="flex gap-2 w-full md:w-auto max-w-sm">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm outline-none focus:border-white/30 transition-colors placeholder:text-gray-500"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white font-black px-6 py-3 rounded-2xl transition-colors flex items-center gap-2 text-sm uppercase tracking-wide whitespace-nowrap">
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14 grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
        {/* Brand */}
        <div className="col-span-2 space-y-5">
          <Link href="/" className="text-3xl font-black uppercase tracking-tighter">
            HND<span className="text-red-600">RD</span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Elite sports equipment for peak performance. Trusted by champions across India.
          </p>
          <div className="flex gap-3">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="w-9 h-9 bg-white/5 rounded-xl flex items-center justify-center hover:bg-white/10 hover:text-red-400 transition-all duration-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            {/* X / Twitter */}
            <a href="#" aria-label="Twitter / X" className="w-9 h-9 bg-white/5 rounded-xl flex items-center justify-center hover:bg-white/10 hover:text-red-400 transition-all duration-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.74-8.862L1.64 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube" className="w-9 h-9 bg-white/5 rounded-xl flex items-center justify-center hover:bg-white/10 hover:text-red-400 transition-all duration-200">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        {/* Shop */}
        <div className="space-y-4">
          <h4 className="font-black uppercase text-xs tracking-widest text-gray-400">Shop</h4>
          <ul className="space-y-2.5">
            {["Badminton", "Cricket", "Pickleball", "Accessories", "Clothing"].map(name => (
              <li key={name}>
                <Link href={`/collections/${name.toLowerCase()}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="space-y-4">
          <h4 className="font-black uppercase text-xs tracking-widest text-gray-400">Support</h4>
          <ul className="space-y-2.5">
            {["Contact Us", "FAQs", "Returns & Exchanges", "Track Order", "Size Guide"].map(name => (
              <li key={name}>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h4 className="font-black uppercase text-xs tracking-widest text-gray-400">Company</h4>
          <ul className="space-y-2.5">
            {["About Us", "Blog", "Careers", "Terms of Service", "Privacy Policy"].map(name => (
              <li key={name}>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hundred India. All rights reserved.</p>
          <p>Made with ❤️ for Indian Sports Enthusiasts</p>
        </div>
      </div>
    </footer>
  );
}
