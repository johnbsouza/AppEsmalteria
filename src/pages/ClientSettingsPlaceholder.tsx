import { Link } from "react-router";
import { ChevronLeft, Wrench } from "lucide-react";

export function ClientSettingsPlaceholder() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col max-w-md mx-auto relative shadow-2xl">
      <header className="flex items-center gap-4 p-6 pt-10 border-b border-border bg-card">
        <Link to="/client/profile" className="p-2 bg-background border border-border rounded-full text-foreground shadow-sm">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-serif text-foreground">Configurações</h1>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-muted text-muted-foreground rounded-full flex items-center justify-center mb-6 shadow-inner">
          <Wrench className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-serif text-foreground mb-2">Em Construção</h2>
        <p className="text-muted-foreground mb-8">Esta área do aplicativo está sendo desenvolvida. Em breve você poderá gerenciar estes dados.</p>
        
        <Link to="/client/profile" className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg shadow-md hover:bg-primary/90 transition-colors block text-center">
          Voltar ao Perfil
        </Link>
      </div>
    </div>
  );
}
