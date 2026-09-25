import { User, LogOut, Settings, CreditCard, ChevronRight } from "lucide-react";
import { Link } from "react-router";

export function ClientProfile() {
  return (
    <div className="p-6">
      <header className="mb-8 pt-4 flex justify-between items-start">
        <h1 className="text-2xl font-serif text-foreground">Meu Perfil</h1>
        <Link to="/" className="text-muted-foreground hover:text-foreground">
          <LogOut className="w-5 h-5" />
        </Link>
      </header>

      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary mb-4 shadow-sm relative">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop" alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h2 className="text-xl font-medium text-foreground">Mariana Costa</h2>
        <p className="text-sm text-muted-foreground">mariana.costa@email.com</p>
        <p className="text-sm text-muted-foreground mt-1">(11) 98765-4321</p>
        
        <Link to="/client/settings" className="mt-4 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors inline-block">
          Editar Perfil
        </Link>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Configurações</h3>
        
        <Link to="/client/settings" className="flex items-center justify-between bg-card border border-border p-4 rounded-xl shadow-sm">
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">Dados Pessoais</span>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </Link>

        <Link to="/client/settings" className="flex items-center justify-between bg-card border border-border p-4 rounded-xl shadow-sm">
          <div className="flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">Formas de Pagamento</span>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </Link>

        <Link to="/client/settings" className="flex items-center justify-between bg-card border border-border p-4 rounded-xl shadow-sm">
          <div className="flex items-center gap-3">
            <Settings className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">Preferências do App</span>
          </div>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </Link>
      </div>
    </div>
  );
}
