import { Search, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminOrdersPage() {
  const orders = [
    { id: "ORD-8492", customer: "Rahul Sharma", date: "Today, 10:24 AM", items: 3, total: "₹4,500", status: "Processing", payment: "Paid" },
    { id: "ORD-8491", customer: "Priya Singh", date: "Today, 09:15 AM", items: 1, total: "₹12,200", status: "Shipped", payment: "Paid" },
    { id: "ORD-8490", customer: "Amit Patel", date: "Yesterday, 04:30 PM", items: 2, total: "₹2,100", status: "Delivered", payment: "Paid" },
    { id: "ORD-8489", customer: "Neha Gupta", date: "Yesterday, 11:20 AM", items: 5, total: "₹8,400", status: "Delivered", payment: "Paid" },
    { id: "ORD-8488", customer: "Suresh Kumar", date: "Oct 12, 2023", items: 1, total: "₹1,500", status: "Cancelled", payment: "Refunded" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold font-syne text-foreground">Orders</h1>
        <Button variant="outline" className="border-border text-foreground flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export CSV
        </Button>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search by Order ID or Customer..." 
              className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div className="flex gap-2">
            <select className="border border-border rounded-lg text-sm px-3 py-2 bg-background text-foreground outline-none">
              <option>All Status</option>
              <option>Processing</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
            <Button variant="outline" className="flex items-center gap-2 border-border text-foreground">
              <Filter className="w-4 h-4" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Order ID</th>
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Date</th>
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Customer</th>
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Items</th>
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Total</th>
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Payment</th>
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {orders.map((order, i) => (
                <tr key={i} className="hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-6 text-sm font-bold text-foreground">{order.id}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{order.date}</td>
                  <td className="py-4 px-6 text-sm font-medium text-foreground">{order.customer}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{order.items}</td>
                  <td className="py-4 px-6 text-sm font-semibold text-foreground">{order.total}</td>
                  <td className="py-4 px-6 text-sm">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      order.payment === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {order.payment}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                      order.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-right">
                    <button className="text-primary hover:underline font-medium text-xs">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
