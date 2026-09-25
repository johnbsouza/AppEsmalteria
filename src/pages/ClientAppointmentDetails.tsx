import { Link } from "react-router";
import { ChevronLeft, Calendar as CalendarIcon, Clock, MapPin, Scissors, XCircle } from "lucide-react";

export function ClientAppointmentDetails() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col max-w-md mx-auto relative shadow-2xl">
      <header className="flex items-center gap-4 p-6 pt-10 border-b border-border bg-card">
        <Link to="/client" className="p-2 bg-background border border-border rounded-full text-foreground shadow-sm">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-serif text-foreground">Detalhes do Agendamento</h1>
      </header>

      <div className="p-6">
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm mb-6">
          <div className="flex justify-between items-start mb-6 border-b border-border pb-4">
            <div>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">Confirmado</span>
              <h2 className="text-lg font-serif text-foreground mt-3">Manicure + Esmaltação em Gel</h2>
              <p className="text-sm text-primary font-medium mt-1">R$ 80,00</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CalendarIcon className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Data</p>
                <p className="text-sm font-medium text-foreground">Terça-feira, 15 de Outubro</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Horário</p>
                <p className="text-sm font-medium text-foreground">14:30 - 15:45 (1h 15min)</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Scissors className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Profissional</p>
                <p className="text-sm font-medium text-foreground">Ana Silva</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Local</p>
                <p className="text-sm font-medium text-foreground">Lirium Esmalteria & Spa</p>
                <p className="text-xs text-muted-foreground">Av. Paulista, 1000 - Bela Vista</p>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 border border-red-200 font-semibold py-4 rounded-xl shadow-sm hover:bg-red-100 transition-colors">
          <XCircle className="w-5 h-5" />
          Cancelar Agendamento
        </button>
      </div>
    </div>
  );
}
