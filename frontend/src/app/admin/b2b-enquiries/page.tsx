import { Search } from "lucide-react";

export default function AdminB2BEnquiriesPage() {
  const enquiries = [
    { id: "B2B-101", company: "Delhi Public School", contact: "Rajesh Kumar", email: "rajesh@dps.edu", date: "Today", status: "Pending" },
    { id: "B2B-100", company: "Smash Sports Academy", contact: "Vikram Singh", email: "info@smashacademy.in", date: "Yesterday", status: "Reviewed" },
    { id: "B2B-099", company: "Government College", contact: "Prof. Anil", email: "sports@govtcollege.ac.in", date: "Oct 10, 2023", status: "Quoted" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold font-syne text-foreground">B2B Enquiries</h1>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search enquiries..." 
              className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50">
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Enquiry ID</th>
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Company/Institution</th>
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Contact Person</th>
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Date</th>
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="py-3 px-6 text-xs font-bold text-muted-foreground uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {enquiries.map((enq, i) => (
                <tr key={i} className="hover:bg-muted/50 transition-colors">
                  <td className="py-4 px-6 text-sm font-bold text-foreground">{enq.id}</td>
                  <td className="py-4 px-6 text-sm font-medium text-foreground">{enq.company}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">
                    {enq.contact}<br/>
                    <span className="text-xs">{enq.email}</span>
                  </td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{enq.date}</td>
                  <td className="py-4 px-6 text-sm">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      enq.status === 'Quoted' ? 'bg-green-100 text-green-700' :
                      enq.status === 'Reviewed' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {enq.status}
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
