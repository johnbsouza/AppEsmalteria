import { Link } from "react-router";
import { ChevronLeft, Star } from "lucide-react";

export function ClientProfessionals() {
  const professionals = [
    { id: 1, name: "Ana Silva", role: "Nail Designer Sênior", rating: 4.9, reviews: 124, img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
    { id: 2, name: "Beatriz Costa", role: "Manicure Clássica", rating: 4.8, reviews: 89, img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop" },
    { id: 3, name: "Carla Mendes", role: "Especialista em Gel", rating: 4.9, reviews: 56, img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop" },
  ];

  return (
    <div className="p-6">
      <header className="flex items-center gap-4 mb-8 pt-4">
        <Link to="/client/services" className="p-2 bg-card border border-border rounded-full text-foreground shadow-sm">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-serif text-foreground">Escolha a Profissional</h1>
      </header>

      <div className="grid grid-cols-2 gap-4">
        {professionals.map(p => (
          <Link key={p.id} to="/client/datetime" className="bg-card border border-border rounded-xl p-4 flex flex-col items-center text-center hover:border-primary/50 transition-colors shadow-sm">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-transparent hover:border-primary transition-all">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-medium text-foreground text-sm mb-1">{p.name}</h3>
            <p className="text-xs text-muted-foreground mb-2">{p.role}</p>
            <div className="flex items-center gap-1 text-xs text-primary font-medium">
              <Star className="w-3 h-3 fill-primary" />
              <span>{p.rating}</span>
              <span className="text-muted-foreground">({p.reviews})</span>
            </div>
          </Link>
        ))}
        
        <Link to="/client/datetime" className="bg-background border border-dashed border-border rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors h-full min-h-[160px]">
          <div className="w-12 h-12 rounded-full bg-card shadow-sm flex items-center justify-center mb-3">
            <span className="text-xl">🤔</span>
          </div>
          <h3 className="font-medium text-foreground text-sm mb-1">Qualquer uma</h3>
          <p className="text-xs text-muted-foreground">A primeira disponível</p>
        </Link>
      </div>
    </div>
  );
}
