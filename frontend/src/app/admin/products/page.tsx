import { Plus, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminProductsPage() {
  const products = [
    { id: "PROD-1", name: "Koxtons Court Star Pro", category: "Badminton", price: "₹4,500", stock: 45, status: "Active" },
    { id: "PROD-2", name: "Koxtons Elite Cricket Bat", category: "Cricket", price: "₹8,200", stock: 12, status: "Low Stock" },
    { id: "PROD-3", name: "Pro Pickleball Paddle", category: "Pickleball", price: "₹2,100", stock: 120, status: "Active" },
    { id: "PROD-4", name: "Team Football Jersey", category: "Apparel", price: "₹1,400", stock: 0, status: "Out of Stock" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold font-syne text-foreground">Products</h1>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-4 flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Product
        </Button>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2 border-border text-foreground">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Product Name</th>
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Category</th>
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Price</th>
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Stock</th>
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {products.map((product, i) => (
                <tr key={i} className="hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-6 text-sm font-semibold text-foreground flex items-center gap-3">
                    <div className="w-10 h-10 bg-muted rounded border border-border flex-shrink-0"></div>
                    {product.name}
                  </td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{product.category}</td>
                  <td className="py-4 px-6 text-sm font-semibold text-foreground">{product.price}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{product.stock}</td>
                  <td className="py-4 px-6 text-sm">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      product.status === 'Active' ? 'bg-green-100 text-green-700' :
                      product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-right">
                    <button className="text-primary hover:underline font-medium text-xs mr-3">Edit</button>
                    <button className="text-destructive hover:underline font-medium text-xs">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-border flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Showing 1 to 4 of 1,200 products</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>Previous</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
