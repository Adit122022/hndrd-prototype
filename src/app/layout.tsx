import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HNDRD — Elite Sports Equipment India",
  description:
    "Elite Sports Equipment for Peak Performance by Hundred. Shop Badminton, Cricket, Pickleball and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} h-full antialiased`}>
      <body cz-shortcut-listen="true" className="min-h-full flex flex-col bg-[#F9F8F6] text-[#0D0D0D] font-inter overflow-x-hidden">
        <SmoothScrollProvider>
          <CartProvider>
            <Navbar />
            <CartDrawer />
            <main className="flex-1">{children}</main>
            <Footer />
          </CartProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
