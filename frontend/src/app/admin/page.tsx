import { IndianRupee, ShoppingBag, Users, TrendingUp } from "lucide-react";

export default function AdminDashboardPage() {
  const stats = [
    { title: "Total Revenue", value: "₹2,45,000", change: "+12.5%", icon: IndianRupee },
    { title: "Total Orders", value: "1,245", change: "+8.2%", icon: ShoppingBag },
    { title: "Active Customers", value: "8,432", change: "+5.1%", icon: Users },
    { title: "Conversion Rate", value: "3.2%", change: "+1.2%", icon: TrendingUp },
  ];

  const recentOrders = [
    { id: "ORD-8492", customer: "Rahul Sharma", date: "Today, 10:24 AM", amount: "₹4,500", status: "Processing" },
    { id: "ORD-8491", customer: "Priya Singh", date: "Today, 09:15 AM", amount: "₹12,200", status: "Shipped" },
    { id: "ORD-8490", customer: "Amit Patel", date: "Yesterday", amount: "₹2,100", status: "Delivered" },
    { id: "ORD-8489", customer: "Neha Gupta", date: "Yesterday", amount: "₹8,400", status: "Delivered" },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="bg-card border border-border p-6 rounded-2xl shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                {stat.change}
              </span>
            </div>
            <h3 className="text-muted-foreground text-sm font-medium mb-1">{stat.title}</h3>
            <p className="text-3xl font-bold font-syne text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-border flex justify-between items-center">
            <h2 className="text-lg font-bold font-syne text-foreground">Recent Orders</h2>
            <button className="text-sm text-primary hover:underline font-medium">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Order ID</th>
                  <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Customer</th>
                  <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Date</th>
                  <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Amount</th>
                  <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recentOrders.map((order, i) => (
                  <tr key={i} className="hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-6 text-sm font-medium text-foreground">{order.id}</td>
                    <td className="py-4 px-6 text-sm text-muted-foreground">{order.customer}</td>
                    <td className="py-4 px-6 text-sm text-muted-foreground">{order.date}</td>
                    <td className="py-4 px-6 text-sm font-semibold text-foreground">{order.amount}</td>
                    <td className="py-4 px-6 text-sm">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                        order.status === 'Processing' ? 'bg-blue-100 text-blue-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-card border border-border rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-bold font-syne text-foreground mb-6">Top Selling Products</h2>
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted rounded-lg flex-shrink-0 border border-border"></div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-foreground truncate">Koxtons Premium Cricket Bat</h4>
                  <p className="text-xs text-muted-foreground">₹4,500</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-foreground">124</p>
                  <p className="text-xs text-muted-foreground">Sales</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
