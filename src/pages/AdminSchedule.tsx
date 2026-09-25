import { Link } from "react-router";
import { ChevronLeft, Calendar as CalendarIcon, Clock, User, Filter } from "lucide-react";

export function AdminSchedule() {
  const schedule = [
    { time: "09:00", client: "Mariana Costa", service: "Manicure + Gel", pro: "Ana Silva", status: "completed" },
    { time: "10:30", client: "Juliana Mendes", service: "Spa dos Pés", pro: "Ana Silva", status: "completed" },
    { time: "11:00", client: "Carla Dias", service: "Manicure Tradicional", pro: "Beatriz Costa", status: "completed" },
    { time: "14:30", client: "Fernanda Lima", service: "Alongamento em Fibra", pro: "Ana Silva", status: "next" },
    { time: "15:00", client: "Roberta Alves", service: "Pedicure", pro: "Beatriz Costa", status: "pending" },
    { time: "17:00", client: "Camila Rocha", service: "Manicure + Gel", pro: "Ana Silva", status: "pending" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground max-w-md mx-auto shadow-2xl pb-10">
      <header className="bg-card px-6 py-6 border-b border-border flex items-center justify-between shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <Link to="/admin" className="text-muted-foreground hover:text-foreground">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h2 className="text-xl font-serif text-foreground">Agenda Geral</h2>
        </div>
        <button className="text-muted-foreground hover:text-primary p-2">
          <Filter className="w-5 h-5" />
        </button>
      </header>

      <div className="p-6">
        <div className="flex items-center justify-between bg-card border border-border p-3 rounded-xl shadow-sm mb-6">
          <button className="p-1 rounded hover:bg-muted text-muted-foreground"><ChevronLeft className="w-4 h-4" /></button>
          <div className="flex items-center gap-2 font-medium text-foreground text-sm">
            <CalendarIcon className="w-4 h-4 text-primary" />
            Terça, 15 de Outubro
          </div>
          <button className="p-1 rounded hover:bg-muted text-muted-foreground"><ChevronLeft className="w-4 h-4 rotate-180" /></button>
        </div>

        <div className="relative border-l-2 border-border ml-4 space-y-6 pb-4">
          {schedule.map((apt, i) => (
            <div key={i} className="relative pl-6">
              <div className={`absolute -left-[9px] top-4 w-4 h-4 rounded-full border-2 bg-background ${apt.status === 'completed' ? 'border-green-400' : apt.status === 'next' ? 'border-primary shadow-[0_0_8px_rgba(200,142,167,0.5)]' : 'border-border'}`}></div>
              
              <div className={`bg-card border rounded-xl p-4 shadow-sm ${apt.status === 'next' ? 'border-primary' : 'border-border'}`}>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2 font-semibold text-foreground text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    {apt.time}
                  </div>
                  {apt.status === 'next' && <span className="text-[10px] uppercase font-bold bg-primary/10 text-primary px-2 py-1 rounded">Agora</span>}
                </div>
                
                <p className="font-medium text-foreground mb-1">{apt.client}</p>
                <p className="text-xs text-muted-foreground mb-3">{apt.service}</p>
                
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground border-t border-border pt-3">
                  <User className="w-3 h-3 text-primary" />
                  {apt.pro}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
