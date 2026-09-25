import { Link } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ClientDateTime() {
  const days = [
    { day: "Seg", date: "14" },
    { day: "Ter", date: "15", active: true },
    { day: "Qua", date: "16" },
    { day: "Qui", date: "17" },
    { day: "Sex", date: "18" },
    { day: "Sáb", date: "19" },
  ];

  const times = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", 
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", 
    "16:00", "16:30", "17:00", "17:30", "18:00", "18:30"
  ];

  return (
    <div className="p-6">
      <header className="flex items-center gap-4 mb-8 pt-4">
        <Link to="/client/professionals" className="p-2 bg-card border border-border rounded-full text-foreground">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-serif text-white">Data e Horário</h1>
      </header>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-serif">Outubro 2023</h3>
          <div className="flex gap-2">
            <button className="p-1 rounded bg-card text-muted-foreground"><ChevronLeft className="w-4 h-4" /></button>
            <button className="p-1 rounded bg-card text-foreground"><ChevronRight className="w-4 h-4" /></button>
          </div>
        </div>
        
        <div className="flex justify-between">
          {days.map((d, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center p-3 rounded-xl border cursor-pointer transition-colors ${d.active ? 'bg-primary border-primary text-primary-foreground' : 'bg-card border-border text-muted-foreground hover:border-primary/50'}`}
            >
              <span className="text-xs mb-1">{d.day}</span>
              <span className={`text-lg font-semibold ${d.active ? 'text-primary-foreground' : 'text-foreground'}`}>{d.date}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-lg font-serif mb-4">Horários Disponíveis</h3>
        <div className="grid grid-cols-3 gap-3">
          {times.map((t, i) => (
            <button 
              key={i}
              className={`py-3 rounded-lg border text-sm font-medium transition-colors ${t === "14:30" ? 'bg-primary border-primary text-primary-foreground' : 'bg-card border-border text-foreground hover:border-primary/50'}`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <div className="mt-10">
        <Link 
          to="/client/checkout" 
          className="block w-full bg-primary text-primary-foreground text-center font-semibold py-4 rounded-xl shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:scale-[1.02] transition-transform"
        >
          Continuar
        </Link>
      </div>
    </div>
  );
}
