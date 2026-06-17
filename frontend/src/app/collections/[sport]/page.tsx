import { ProductCard } from "@/components/ProductCard";
import { mockProducts } from "@/lib/mock-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal, ArrowRight } from "lucide-react";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ sport: string }>;
}) {
  const { sport } = await params;
  const products = mockProducts;

  const filters = [
    { id: "range",  name: "Product Range", options: ["Court Star Pro", "Raze Pro II", "Atomic X", "Predator"] },
    { id: "price",  name: "Price",          options: ["Under ₹1,000", "₹1,000–₹2,000", "₹2,000–₹5,000", "₹5,000+"] },
    { id: "size",   name: "Size",           options: ["7 UK", "8 UK", "9 UK", "10 UK", "11 UK", "M", "L"] },
  ];

  return (
    <div className="bg-[#F9F8F6] min-h-screen">
      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="relative bg-[#0D0D0D] py-12 md:py-20 px-5 md:px-10 overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 20% 60%, #E8272A 0%, transparent 55%), radial-gradient(circle at 80% 40%, #2A6FE8 0%, transparent 55%)" }}
        />
        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-widest font-semibold mb-4">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>/</span>
            <a href="#" className="hover:text-white transition-colors">Collections</a>
            <span>/</span>
            <span className="text-white capitalize">{sport}</span>
          </div>
          <h1 className="font-syne text-4xl sm:text-5xl md:text-7xl font-extrabold text-white capitalize tracking-tight mb-3">
            {sport}
          </h1>
          <p className="text-white/40 text-sm">{products.length} products available</p>
        </div>
      </div>

      {/* ── BODY ─────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10">

          {/* ── SIDEBAR ───────────────────────────────────── */}
          <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-24 bg-white border border-black/6 rounded-3xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <SlidersHorizontal className="w-4 h-4 text-[#8A8784]" />
                <h2 className="font-syne font-extrabold text-base uppercase tracking-tight">Filters</h2>
              </div>

              <Accordion className="w-full space-y-0.5">
                {filters.map((f) => (
                  <AccordionItem value={f.id} key={f.id} className="border-b border-black/5 last:border-b-0">
                    <AccordionTrigger className="text-xs font-bold uppercase tracking-wider text-[#3A3A3A] py-3 hover:no-underline">
                      {f.name}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2.5 pb-2">
                        {f.options.map((opt) => (
                          <div key={opt} className="flex items-center gap-3">
                            <Checkbox id={`${f.id}-${opt}`} />
                            <Label htmlFor={`${f.id}-${opt}`} className="text-sm text-[#6B6965] cursor-pointer font-normal hover:text-[#0D0D0D] transition-colors leading-none">
                              {opt}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </aside>

          {/* ── PRODUCT GRID ──────────────────────────────── */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 md:mb-8">
              <p className="text-sm text-[#8A8784] font-medium">{products.length} products</p>
              <div className="flex items-center gap-3">
                <select className="text-xs md:text-sm border border-black/10 rounded-xl py-2 px-3 md:px-4 outline-none focus:border-[#0D0D0D]/30 cursor-pointer bg-white font-medium text-[#3A3A3A] transition-colors">
                  <option>Featured</option>
                  <option>Price: Low → High</option>
                  <option>Price: High → Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5">
              {products.map((p, i) => (
                <div
                  key={p.id}
                  className="reveal"
                  style={{ animationDelay: `${(i % 6) * 80}ms` }}
                >
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
