import { Metadata } from "next";
import Link from "next/link";
import { LayoutDashboard, Package, ShoppingCart, Users, Settings, LogOut, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard - Koxtons",
  description: "Koxtons Commerce Admin Dashboard",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Products", href: "/admin/products", icon: Package },
    { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
    { name: "B2B Enquiries", href: "/admin/b2b-enquiries", icon: MessageSquare },
    { name: "Customers", href: "/admin/customers", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-card border-r border-border md:min-h-screen p-4 flex flex-col">
        <div className="mb-8 px-2">
          <h2 className="text-2xl font-black font-syne tracking-tighter uppercase text-foreground">KOXTONS</h2>
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mt-1">Admin Panel</p>
        </div>
        
        <nav className="flex-1 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="pt-4 border-t border-border mt-4">
          <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Top Header */}
        <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 lg:px-10">
          <h1 className="text-xl font-bold font-syne text-foreground">Overview</h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
              AD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6 lg:p-10 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
