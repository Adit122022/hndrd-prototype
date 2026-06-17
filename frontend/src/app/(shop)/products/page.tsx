import { ProductCard } from "@/components/ProductCard";
import { mockProducts } from "@/lib/mock-data";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SlidersHorizontal, Search } from "lucide-react";

export default function ProductsPage() {
  const products = mockProducts;

  const filters = [
    { id: "category", name: "Category", options: ["Badminton", "Cricket", "Pickleball", "Football"] },
    { id: "price",    name: "Price",    options: ["Under ₹1,000", "₹1,000–₹2,000", "₹2,000–₹5,000", "₹5,000+"] },
    { id: "brand",    name: "Brand",    options: ["Koxtons", "Elite", "Pro Series"] },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* ── HERO / SEARCH ─────────────────────────────────────────── */}
      <div className="relative bg-card border-b border-border py-12 px-5 md:px-10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center">
          <h1 className="font-syne text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-6 text-center">
            Shop All Products
          </h1>
          <div className="w-full max-w-2xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-12 pr-4 py-4 rounded-full border border-border bg-background text-foreground shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
            />
          </div>
        </div>
      </div>

      {/* ── BODY ─────────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-10 md:py-14">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10">

          {/* ── SIDEBAR ───────────────────────────────────── */}
          <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0">
            <div className="lg:sticky lg:top-24 bg-card border border-border rounded-3xl p-5 md:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
                <h2 className="font-syne font-extrabold text-base uppercase tracking-tight text-foreground">Filters</h2>
              </div>

              <Accordion className="w-full space-y-0.5">
                {filters.map((f) => (
                  <AccordionItem value={f.id} key={f.id} className="border-b border-border last:border-b-0">
                    <AccordionTrigger className="text-xs font-bold uppercase tracking-wider text-foreground py-3 hover:no-underline">
                      {f.name}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2.5 pb-2">
                        {f.options.map((opt) => (
                          <div key={opt} className="flex items-center gap-3">
                            <Checkbox id={`${f.id}-${opt}`} className="border-border text-primary" />
                            <Label htmlFor={`${f.id}-${opt}`} className="text-sm text-muted-foreground cursor-pointer font-normal hover:text-foreground transition-colors leading-none">
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
              <p className="text-sm text-muted-foreground font-medium">{products.length} products</p>
              <div className="flex items-center gap-3">
                <select className="text-xs md:text-sm border border-border rounded-xl py-2 px-3 md:px-4 outline-none focus:border-primary/50 cursor-pointer bg-card font-medium text-foreground transition-colors">
                  <option>Featured</option>
                  <option>Price: Low → High</option>
                  <option>Price: High → Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
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
