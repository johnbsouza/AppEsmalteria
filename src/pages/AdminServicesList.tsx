import { Link } from "react-router";
import { ChevronLeft, Plus, Edit2, Trash } from "lucide-react";

export function AdminServicesList() {
  const categories = [
    {
      name: "Mãos",
      services: [
        { id: 1, name: "Manicure Tradicional", duration: "40 min", price: "R$ 35,00" },
        { id: 2, name: "Manicure + Esmaltação em Gel", duration: "1h 15min", price: "R$ 80,00" },
      ]
    },
    {
      name: "Pés & Spa",
      services: [
        { id: 3, name: "Pedicure Tradicional", duration: "45 min", price: "R$ 40,00" },
        { id: 4, name: "Spa dos Pés", duration: "40 min", price: "R$ 55,00" },
      ]
    },
    {
      name: "Alongamentos",
      services: [
        { id: 5, name: "Alongamento em Fibra", duration: "2h 30min", price: "R$ 180,00" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground max-w-md mx-auto shadow-2xl pb-10">
      <header className="bg-card px-6 py-6 border-b border-border flex items-center justify-between shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link to="/admin" className="text-muted-foreground hover:text-foreground">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h2 className="text-xl font-serif text-foreground">Serviços</h2>
        </div>
        <Link to="/admin/add-service" className="bg-primary/10 text-primary p-2 rounded-lg hover:bg-primary/20 transition-colors">
          <Plus className="w-5 h-5" />
        </Link>
      </header>

      <div className="p-6 space-y-6">
        {categories.map((cat, index) => (
          <div key={index}>
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3 pl-1">{cat.name}</h3>
            <div className="space-y-3">
              {cat.services.map(s => (
                <div key={s.id} className="bg-card border border-border p-4 rounded-xl shadow-sm flex justify-between items-center group">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{s.name}</h4>
                    <p className="text-xs text-muted-foreground">{s.duration} • <span className="font-medium text-primary">{s.price}</span></p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="text-muted-foreground hover:text-primary transition-colors p-1 bg-background rounded border border-border">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="text-muted-foreground hover:text-red-500 transition-colors p-1 bg-background rounded border border-border">
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
