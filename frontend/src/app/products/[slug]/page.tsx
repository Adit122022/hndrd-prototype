"use client";

import { use, useState } from "react";
import Image from "next/image";
import { mockProducts } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { notFound } from "next/navigation";
import { Truck, RotateCcw, ShieldCheck, MessageCircle, Star, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = mockProducts.find(p => p.slug === slug);
  const { addItem } = useCart();

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(0);

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: selectedColor,
      size: selectedSize,
      quantity
    });
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-wider font-semibold">
          <a href="/" className="hover:text-black transition-colors">Home</a>
          <ChevronRight className="w-3 h-3" />
          <a href="/collections/badminton" className="hover:text-black transition-colors">{product.category}</a>
          <ChevronRight className="w-3 h-3" />
          <span className="text-black">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-gray-50 rounded-3xl overflow-hidden border border-gray-100">
              {product.discount && (
                <Badge className="absolute top-4 left-4 z-10 bg-red-600 text-white hover:bg-red-700 font-bold uppercase text-xs px-3 py-1">
                  {product.discount}
                </Badge>
              )}
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-all duration-500 hover:scale-105"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(i)}
                  className={`relative aspect-square bg-gray-50 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    mainImage === i ? 'border-black scale-95' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <Image src={product.image} alt={`thumbnail ${i}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm text-gray-500">128 reviews</span>
            </div>

            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-red-600 mb-1">{product.category}</div>
                <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">{product.name}</h1>
              </div>
            </div>

            <div className="flex items-end gap-4 mt-4 mb-8 pb-8 border-b">
              <span className="text-4xl font-black text-black">₹{product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-xl text-gray-300 line-through mb-1">₹{product.originalPrice.toLocaleString()}</span>
                  <Badge className="mb-1 bg-green-100 text-green-700 hover:bg-green-100 font-bold">{product.discount}</Badge>
                </>
              )}
            </div>

            <div className="space-y-7 mb-8">
              {/* Color Selection */}
              {product.colors.length > 0 && (
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-sm uppercase tracking-wider">Color</span>
                  </div>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-9 h-9 rounded-full border-4 transition-all duration-200 ${
                          selectedColor === color ? 'border-black scale-110 shadow-md' : 'border-white ring-1 ring-gray-200 hover:scale-110'
                        }`}
                        style={{ backgroundColor: color }}
                        aria-label={`Select color ${color}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes.length > 0 && (
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-bold text-sm uppercase tracking-wider">Size</span>
                    <button className="text-xs underline text-gray-400 hover:text-black font-medium">Size Guide</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 px-5 text-sm font-bold rounded-xl border-2 transition-all duration-200 ${
                          selectedSize === size
                            ? 'border-black bg-black text-white scale-95'
                            : 'border-gray-100 bg-gray-50 hover:border-black hover:bg-white'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div>
                <span className="font-bold text-sm uppercase tracking-wider mb-3 block">Quantity</span>
                <div className="flex items-center bg-gray-50 rounded-xl w-36 border border-gray-100">
                  <button className="w-12 h-12 flex items-center justify-center text-lg font-bold hover:bg-gray-100 rounded-l-xl transition-colors" onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                  <div className="flex-1 h-12 flex items-center justify-center font-black text-lg">{quantity}</div>
                  <button className="w-12 h-12 flex items-center justify-center text-lg font-bold hover:bg-gray-100 rounded-r-xl transition-colors" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 mb-8">
              <Button
                className="w-full h-14 bg-black text-white hover:bg-gray-900 font-black uppercase tracking-widest text-sm rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                className="w-full h-14 bg-red-600 text-white hover:bg-red-700 font-black uppercase tracking-widest text-sm rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                Buy It Now
              </Button>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-2 gap-4 py-6 border-t border-b mb-8">
              {[
                { icon: Truck, text: "Free Shipping above ₹999" },
                { icon: RotateCcw, text: "7 Days Easy Returns" },
                { icon: ShieldCheck, text: "100% Original Products" },
                { icon: MessageCircle, text: "WhatsApp Support" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-gray-600">
                  <Icon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Details Accordion */}
            <Accordion className="w-full">
              <AccordionItem value="details">
                <AccordionTrigger>Product Details</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    {product.features.map((feature, i) => <li key={i}>{feature}</li>)}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">Orders are shipped within 24-48 hours. Returns accepted within 7 days of delivery in original packaging.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="emi">
                <AccordionTrigger>EMI & Pay Later</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">0% EMI available on orders above ₹3,000 via Snapmint. No-cost EMIs on all major credit cards.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
