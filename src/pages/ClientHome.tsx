import { Bell, Calendar as CalendarIcon } from "lucide-react";
import { Link } from "react-router";

export function ClientHome() {
  return (
    <div className="p-6">
      <header className="flex justify-between items-center mb-8 pt-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-muted border-2 border-primary overflow-hidden shadow-sm">
             <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&auto=format" alt="User profile" className="w-fit h-fit object-cover" />
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Bem-vinda,</p>
            <h2 className="text-xl font-serif text-foreground">Mariana</h2>
          </div>
        </div>
        <Link to="/client/notifications" className="p-2 relative bg-card rounded-full border border-border shadow-sm block">
          <Bell className="w-5 h-5 text-primary" />
          <span className="absolute top-1 right-2 w-2 h-2 bg-red-400 rounded-full"></span>
        </Link>
      </header>

      <div className="mb-8">
        <Link 
          to="/client/services" 
          className="flex items-center justify-center gap-3 w-full bg-primary text-primary-foreground font-semibold py-4 rounded-xl shadow-md hover:scale-[1.02] transition-transform"
        >
          <CalendarIcon className="w-5 h-5" />
          Agendar Horário
        </Link>
      </div>

      <section className="mb-8">
        <div className="flex justify-between items-end mb-4">
          <h3 className="text-lg font-serif">Próximo Agendamento</h3>
        </div>
        
        <div className="bg-card border border-border rounded-xl p-4 flex flex-col gap-4 shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
               <div className="bg-muted w-12 h-12 rounded-full overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format" alt="Professional" className="w-full h-full object-cover" />
               </div>
               <div>
                 <p className="font-medium text-foreground">Ana Silva</p>
                 <p className="text-xs text-muted-foreground">Nail Designer Sênior</p>
               </div>
            </div>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">
              Confirmado
            </span>
          </div>
          
          <div className="border-t border-border pt-4 flex gap-4 text-sm">
            <div className="flex-1 bg-background rounded-lg p-3 text-center border border-border/50">
              <p className="text-muted-foreground text-xs mb-1">Data</p>
              <p className="font-semibold text-primary">15 Out, Ter</p>
            </div>
            <div className="flex-1 bg-background rounded-lg p-3 text-center border border-border/50">
              <p className="text-muted-foreground text-xs mb-1">Horário</p>
              <p className="font-semibold text-primary">14:30</p>
            </div>
          </div>
          
          <div className="flex justify-between items-center mt-2">
            <div>
              <p className="text-sm font-medium">Manicure + Esmaltação em Gel</p>
              <p className="text-xs text-muted-foreground">1h 15min</p>
            </div>
            <Link to="/client/appointment-details" className="text-sm text-primary font-medium hover:underline">
              Detalhes
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-serif mb-4">Serviços Populares</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x no-scrollbar">
          {[
            { name: "Esmaltação em Gel", price: "R$ 80", img: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&h=200&fit=crop&auto=format" },
            { name: "Spa dos Pés", price: "R$ 55", img: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=200&h=200&fit=crop&auto=format" },
            { name: "Nail Art (por unha)", price: "R$ 15", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=200&h=200&fit=crop&auto=format" }
          ].map((s, i) => (
            <div key={i} className="min-w-[140px] bg-card border border-border rounded-xl overflow-hidden snap-start shrink-0 shadow-sm">
              <img src={s.img} alt={s.name} className="w-full h-24 object-cover" />
              <div className="p-3">
                <p className="text-sm font-medium mb-1 truncate text-foreground">{s.name}</p>
                <p className="text-primary font-semibold text-sm">{s.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
