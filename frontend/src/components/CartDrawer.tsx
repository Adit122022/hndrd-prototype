"use client";

import { useCart } from "@/context/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import Image from "next/image";

export function CartDrawer() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeItem, cartTotal } = useCart();

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l border-gray-100 bg-white">
        {/* Header */}
        <SheetHeader className="px-6 py-5 border-b bg-black text-white">
          <SheetTitle className="text-lg font-black uppercase tracking-widest text-white flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            Cart
            {items.length > 0 && (
              <span className="bg-red-600 text-white text-xs font-black rounded-full w-5 h-5 flex items-center justify-center ml-auto">
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {/* Items */}
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full w-full">
            <div className="p-6 space-y-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center space-y-4 py-16 text-gray-400">
                  <div className="w-20 h-20 rounded-3xl bg-gray-50 flex items-center justify-center">
                    <ShoppingBag className="h-8 w-8 text-gray-300" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-700 mb-1">Your cart is empty</p>
                    <p className="text-sm text-gray-400">Add some products to get started.</p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="inline-flex items-center gap-2 bg-black text-white font-bold uppercase text-xs tracking-widest px-6 py-3 rounded-2xl hover:bg-gray-900 transition-colors"
                  >
                    Continue Shopping <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.color}-${item.size}`} className="flex gap-4 group">
                    <div className="relative h-24 w-24 bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0 border border-gray-100">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col gap-1">
                      <div className="flex justify-between">
                        <h4 className="font-black text-sm leading-tight">{item.name}</h4>
                        <button
                          onClick={() => removeItem(item.id, item.color, item.size)}
                          className="opacity-0 group-hover:opacity-100 p-1 hover:text-red-500 transition-all"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span
                          className="w-3 h-3 rounded-full border border-gray-200"
                          style={{ backgroundColor: item.color }}
                        />
                        {item.size}
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center bg-gray-50 rounded-xl border border-gray-100">
                          <button
                            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-l-xl transition-colors"
                            onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-7 text-center text-sm font-black">{item.quantity}</span>
                          <button
                            className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-r-xl transition-colors"
                            onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-black text-sm">₹{(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t bg-gray-50 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Subtotal</span>
              <span className="text-2xl font-black">₹{cartTotal.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-400">Shipping & taxes calculated at checkout.</p>
            <div className="space-y-2.5">
              <button
                className="w-full font-black uppercase tracking-widest text-sm h-13 py-3.5 bg-black text-white rounded-2xl hover:bg-gray-900 transition-all hover:scale-[1.01] active:scale-[0.99]"
                onClick={() => alert("Proceeding to Kwik Checkout!")}
              >
                ⚡ Kwik Checkout
              </button>
              <button
                className="w-full font-black uppercase tracking-widest text-sm h-13 py-3.5 bg-white text-black border-2 border-black rounded-2xl hover:bg-gray-50 transition-all"
                onClick={() => alert("Proceeding to standard checkout")}
              >
                Check Out
              </button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
