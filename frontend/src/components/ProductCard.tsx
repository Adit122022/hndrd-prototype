"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Eye } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

type ProductCardProps = {
  product: {
    id: string; name: string; slug: string; category: string;
    price: number; originalPrice: number; discount?: string;
    colors: string[]; sizes: string[]; image: string;
  };
};

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const pct = product.originalPrice > product.price
    ? Math.round(100 - (product.price / product.originalPrice) * 100) : 0;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({ id: product.id, name: product.name, price: product.price, image: product.image, color: product.colors[0], size: product.sizes[0], quantity: 1 });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block relative bg-white rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-black/8 transition-all duration-400 hover:-translate-y-1.5 border border-black/5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      {pct > 0 && (
        <div className="absolute top-3 left-3 z-10 bg-[#E8272A] text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wide">
          −{pct}%
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-[3/4] bg-[#F0EDE8] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-108"
        />
        {/* Overlay */}
        <div className={`absolute inset-0 bg-[#0D0D0D]/0 transition-all duration-300 ${hovered ? "bg-[#0D0D0D]/12" : ""}`} />

        {/* Action buttons */}
        <div className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-300 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
          <button
            onClick={handleQuickAdd}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${added ? "bg-emerald-500 text-white" : "bg-white text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white"}`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            {added ? "Added!" : "Quick Add"}
          </button>
          <div className="w-10 h-10 flex items-center justify-center bg-white rounded-2xl hover:bg-[#0D0D0D] hover:text-white transition-colors duration-200 flex-shrink-0">
            <Eye className="w-4 h-4" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="text-[10px] text-[#8A8784] uppercase font-bold tracking-widest mb-1">{product.category}</div>
        <h3 className="font-syne font-bold text-[#0D0D0D] group-hover:text-[#E8272A] transition-colors text-[15px] leading-snug mb-2">{product.name}</h3>
        <div className="flex items-center gap-2.5">
          <span className="font-syne font-extrabold text-[#0D0D0D] text-base">₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-[#B0ADA8] line-through">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        {/* Swatches */}
        {product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 mt-3">
            {product.colors.map((c, i) => (
              <div key={i} className="w-3.5 h-3.5 rounded-full ring-1 ring-black/10 shadow-sm" style={{ background: c }} />
            ))}
            <span className="text-[10px] text-[#B0ADA8] font-semibold">{product.colors.length} colors</span>
          </div>
        )}
      </div>
    </Link>
  );
}
