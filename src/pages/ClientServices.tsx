import { Link } from "react-router";
import { Search, SlidersHorizontal } from "lucide-react";

export function ClientServices() {
  const categories = ["Todos", "Mãos", "Pés", "Alongamento", "Spa", "Nail Art"];
  const services = [
    { id: 1, name: "Manicure Tradicional", duration: "40 min", price: "R$ 35,00", category: "Mãos" },
    { id: 2, name: "Pedicure Tradicional", duration: "45 min", price: "R$ 40,00", category: "Pés" },
    { id: 3, name: "Manicure + Esmaltação em Gel", duration: "1h 15min", price: "R$ 80,00", category: "Mãos" },
    { id: 4, name: "Alongamento em Fibra", duration: "2h 30min", price: "R$ 180,00", category: "Alongamento" },
    { id: 5, name: "Spa dos Pés", duration: "40 min", price: "R$ 55,00", category: "Spa" },
  ];

  return (
    <div className="p-6">
      <header className="mb-6 pt-4">
        <h1 className="text-2xl font-serif text-foreground mb-2">Serviços</h1>
        <p className="text-muted-foreground text-sm">Escolha o serviço desejado.</p>
      </header>

      <div className="flex gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Buscar serviços..." 
            className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
          />
        </div>
        <button className="bg-card border border-border p-2 rounded-lg text-primary shadow-sm">
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-4 mb-2 no-scrollbar">
        {categories.map((cat, i) => (
          <button 
            key={i} 
            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-primary text-primary-foreground shadow-sm' : 'bg-card border border-border text-muted-foreground shadow-sm'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {services.map(s => (
          <div key={s.id} className="bg-card border border-border p-4 rounded-xl flex justify-between items-center shadow-sm hover:border-primary/30 transition-colors">
            <div>
              <h3 className="font-medium text-foreground mb-1">{s.name}</h3>
              <p className="text-xs text-muted-foreground">{s.duration}</p>
            </div>
            <div className="text-right flex flex-col items-end">
              <span className="text-primary font-semibold block mb-2">{s.price}</span>
              <Link 
                to="/client/professionals" 
                className="bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-lg text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Agendar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
