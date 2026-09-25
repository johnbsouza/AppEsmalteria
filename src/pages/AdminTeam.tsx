import { Link } from "react-router";
import { ChevronLeft, Plus, Edit, Trash2 } from "lucide-react";

export function AdminTeam() {
  const professionals = [
    { id: 1, name: "Ana Silva", role: "Nail Designer Sênior", commission: "40%", status: "Ativa", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" },
    { id: 2, name: "Beatriz Costa", role: "Manicure Clássica", commission: "35%", status: "Ativa", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop" },
    { id: 3, name: "Carla Mendes", role: "Especialista em Gel", commission: "45%", status: "Férias", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground max-w-md mx-auto shadow-2xl pb-10">
      <header className="bg-card px-6 py-6 border-b border-border flex items-center justify-between shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link to="/admin" className="text-muted-foreground hover:text-foreground">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h2 className="text-xl font-serif text-foreground">Equipe</h2>
        </div>
        <Link to="/admin/add-pro" className="bg-primary/10 text-primary p-2 rounded-lg hover:bg-primary/20 transition-colors">
          <Plus className="w-5 h-5" />
        </Link>
      </header>

      <div className="p-6 space-y-4">
        {professionals.map(pro => (
          <div key={pro.id} className="bg-card border border-border p-4 rounded-xl shadow-sm flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-border">
                <img src={pro.img} alt={pro.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-foreground">{pro.name}</h3>
                  <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-1 rounded-full ${pro.status === 'Ativa' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                    {pro.status}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-1">{pro.role}</p>
                <p className="text-xs font-medium text-primary">Comissão: {pro.commission}</p>
              </div>
            </div>
            
            <div className="flex justify-end gap-2 border-t border-border pt-3">
              <button className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-primary px-3 py-1.5 bg-background rounded-lg border border-border">
                <Edit className="w-3 h-3" /> Editar
              </button>
              <button className="flex items-center gap-1 text-xs font-medium text-red-500 hover:bg-red-50 px-3 py-1.5 bg-background rounded-lg border border-red-100">
                <Trash2 className="w-3 h-3" /> Remover
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
