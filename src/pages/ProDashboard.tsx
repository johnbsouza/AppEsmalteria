import { Link } from "react-router";
import { LogOut, Calendar, Clock, DollarSign, CheckCircle } from "lucide-react";

export function ProDashboard() {
  const appointments = [
    { id: 1, time: "09:00", client: "Mariana", service: "Manicure Tradicional", status: "completed" },
    { id: 2, time: "10:30", client: "Juliana", service: "Spa dos Pés", status: "completed" },
    { id: 3, time: "14:30", client: "Fernanda", service: "Alongamento em Fibra", status: "next" },
    { id: 4, time: "17:00", client: "Camila", service: "Manicure + Esmaltação em Gel", status: "pending" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground max-w-md mx-auto shadow-2xl pb-10">
      <header className="bg-card px-6 py-8 border-b border-border rounded-b-3xl shadow-sm">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-4">
             <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
               <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" alt="Pro" className="w-full h-full object-cover" />
             </div>
             <div>
               <h2 className="text-xl font-serif text-foreground">Ana Silva</h2>
               <p className="text-sm text-primary">Nail Designer Sênior</p>
             </div>
          </div>
          <Link to="/" className="text-muted-foreground hover:text-foreground p-2">
            <LogOut className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background rounded-xl p-4 border border-border shadow-sm">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <DollarSign className="w-4 h-4 text-primary" />
              <span className="text-xs">Comissão Hoje</span>
            </div>
            <p className="text-xl font-semibold text-foreground">R$ 145,00</p>
          </div>
          <div className="bg-background rounded-xl p-4 border border-border shadow-sm">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-xs">Atendimentos</span>
            </div>
            <p className="text-xl font-semibold text-foreground">2 / 8</p>
          </div>
        </div>
      </header>

      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-serif text-foreground">Agenda de Hoje</h3>
          <span className="text-xs text-primary font-medium">15 Out, Ter</span>
        </div>

        <div className="relative border-l-2 border-border ml-4 space-y-8 pb-4">
          {appointments.map((apt, i) => (
            <div key={i} className="relative pl-6">
              <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 bg-background ${apt.status === 'completed' ? 'border-green-400' : apt.status === 'next' ? 'border-primary shadow-[0_0_10px_rgba(200,142,167,0.4)]' : 'border-border'}`}></div>
              
              <div className={`bg-card border rounded-xl p-4 shadow-sm ${apt.status === 'next' ? 'border-primary' : 'border-border'}`}>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    {apt.time}
                  </div>
                  {apt.status === 'completed' && <CheckCircle className="w-4 h-4 text-green-400" />}
                  {apt.status === 'next' && <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded font-medium">Agora</span>}
                </div>
                <p className="font-medium text-sm mb-1 text-foreground">{apt.client}</p>
                <p className="text-xs text-muted-foreground">{apt.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
