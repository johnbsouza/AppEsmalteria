import { Link } from "react-router";
import { ChevronLeft, Bell } from "lucide-react";

export function ClientNotifications() {
  const notifications = [
    { id: 1, title: "Lembrete de Agendamento", message: "Seu horário com Ana Silva é amanhã às 14:30.", time: "Há 2 horas", unread: true },
    { id: 2, title: "Promoção Especial", message: "Ganhe 20% de desconto no Spa dos Pés esta semana!", time: "Há 1 dia", unread: false },
    { id: 3, title: "Avalie seu atendimento", message: "Como foi sua experiência com Beatriz Costa?", time: "Há 3 dias", unread: false },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col max-w-md mx-auto relative shadow-2xl">
      <header className="flex items-center gap-4 p-6 pt-10 border-b border-border bg-card">
        <Link to="/client" className="p-2 bg-background border border-border rounded-full text-foreground shadow-sm">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-serif text-foreground">Notificações</h1>
      </header>

      <div className="p-6 space-y-4 overflow-y-auto">
        {notifications.map((notif) => (
          <div key={notif.id} className={`p-4 rounded-xl border shadow-sm flex gap-4 ${notif.unread ? 'bg-primary/5 border-primary/30' : 'bg-card border-border'}`}>
            <div className={`mt-1 rounded-full p-2 h-fit ${notif.unread ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className={`text-sm font-medium ${notif.unread ? 'text-foreground' : 'text-muted-foreground'}`}>{notif.title}</h3>
              <p className="text-xs text-muted-foreground mt-1 mb-2">{notif.message}</p>
              <span className="text-[10px] text-muted-foreground font-medium">{notif.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
