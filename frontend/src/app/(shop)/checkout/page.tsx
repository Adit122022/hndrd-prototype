"use client"

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

export default function CheckoutPage() {
  const { items, total } = useCart();
  const [shippingCost, setShippingCost] = useState(total > 999 ? 0 : 50);

  return (
    <div className="bg-background min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold font-syne text-foreground mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16">
          {/* Checkout Form */}
          <div className="lg:col-span-7">
            <form className="space-y-8">
              {/* Contact Info */}
              <div className="bg-card border border-border p-6 rounded-2xl">
                <h2 className="text-lg font-bold text-foreground mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full rounded-md border border-border bg-background py-2 px-4 text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="offers" className="rounded border-border text-primary focus:ring-primary" />
                    <label htmlFor="offers" className="text-sm text-muted-foreground">Email me with news and offers</label>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-card border border-border p-6 rounded-2xl">
                <h2 className="text-lg font-bold text-foreground mb-4">Shipping Address</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select className="col-span-full rounded-md border border-border bg-background py-2 px-4 text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                    <option>India</option>
                  </select>
                  <input
                    type="text"
                    placeholder="First name"
                    className="rounded-md border border-border bg-background py-2 px-4 text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="rounded-md border border-border bg-background py-2 px-4 text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    className="col-span-full rounded-md border border-border bg-background py-2 px-4 text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Apartment, suite, etc. (optional)"
                    className="col-span-full rounded-md border border-border bg-background py-2 px-4 text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="rounded-md border border-border bg-background py-2 px-4 text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                  <select className="rounded-md border border-border bg-background py-2 px-4 text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                    <option>State</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                    <option>Karnataka</option>
                  </select>
                  <input
                    type="text"
                    placeholder="PIN code"
                    className="rounded-md border border-border bg-background py-2 px-4 text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="rounded-md border border-border bg-background py-2 px-4 text-foreground shadow-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                  />
                </div>
              </div>

              {/* Payment Info */}
              <div className="bg-card border border-border p-6 rounded-2xl">
                <h2 className="text-lg font-bold text-foreground mb-4">Payment</h2>
                <p className="text-sm text-muted-foreground mb-4">All transactions are secure and encrypted.</p>
                <div className="border border-primary bg-primary/5 p-4 rounded-xl flex items-center justify-between cursor-pointer">
                  <div className="flex items-center gap-3">
                    <input type="radio" checked readOnly className="text-primary focus:ring-primary h-4 w-4" />
                    <span className="font-semibold text-foreground">Razorpay Secure</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="bg-white border rounded px-1 text-xs font-bold text-blue-800">UPI</span>
                    <span className="bg-white border rounded px-1 text-xs font-bold text-orange-600">Cards</span>
                  </div>
                </div>
                <div className="mt-4 p-4 text-sm text-center text-muted-foreground bg-muted rounded-xl">
                  After clicking "Pay Now", you will be redirected to Razorpay to complete your purchase securely.
                </div>
              </div>

              <Button type="button" className="w-full py-6 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl">
                Pay Now (₹{(total + shippingCost).toLocaleString()})
              </Button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-24 bg-card border border-border p-6 rounded-2xl">
              <h2 className="text-lg font-bold text-foreground mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {items.length === 0 ? (
                  <p className="text-muted-foreground text-sm">Your cart is empty.</p>
                ) : (
                  items.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex gap-4 items-center">
                      <div className="w-16 h-16 bg-muted rounded-md relative flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-md" />
                        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-foreground line-clamp-1">{item.name}</h3>
                        <p className="text-xs text-muted-foreground">{item.size} / {item.color}</p>
                      </div>
                      <div className="font-semibold text-sm">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="space-y-3 pt-6 border-t border-border text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold text-foreground">₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-foreground">
                    {shippingCost === 0 ? 'Free' : `₹${shippingCost}`}
                  </span>
                </div>
                <div className="flex justify-between pt-3 border-t border-border text-lg font-bold">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">₹{(total + shippingCost).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
