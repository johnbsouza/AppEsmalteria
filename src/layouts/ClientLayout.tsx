import { Outlet, Link, useLocation } from "react-router";
import { Home, Calendar, User, Search } from "lucide-react";

export function ClientLayout() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col max-w-md mx-auto relative shadow-2xl">
      <main className="flex-1 overflow-y-auto pb-20">
        <Outlet />
      </main>
      
      <nav className="fixed bottom-0 w-full max-w-md bg-card/90 backdrop-blur-md border-t border-border flex justify-around py-3 px-2 z-50">
        <Link to="/client" className={`flex flex-col items-center p-2 rounded-lg transition-colors ${isActive('/client') ? 'text-primary' : 'text-muted-foreground hover:text-primary/70'}`}>
          <Home className="w-6 h-6 mb-1" />
          <span className="text-[10px] uppercase tracking-wider">Início</span>
        </Link>
        <Link to="/client/services" className={`flex flex-col items-center p-2 rounded-lg transition-colors ${isActive('/client/services') ? 'text-primary' : 'text-muted-foreground hover:text-primary/70'}`}>
          <Search className="w-6 h-6 mb-1" />
          <span className="text-[10px] uppercase tracking-wider">Explorar</span>
        </Link>
        <Link to="/client/datetime" className={`flex flex-col items-center p-2 rounded-lg transition-colors ${isActive('/client/datetime') ? 'text-primary' : 'text-muted-foreground hover:text-primary/70'}`}>
          <Calendar className="w-6 h-6 mb-1" />
          <span className="text-[10px] uppercase tracking-wider">Agenda</span>
        </Link>
        <Link to="/client/profile" className={`flex flex-col items-center p-2 rounded-lg transition-colors ${isActive('/client/profile') ? 'text-primary' : 'text-muted-foreground hover:text-primary/70'}`}>
          <User className="w-6 h-6 mb-1" />
          <span className="text-[10px] uppercase tracking-wider">Perfil</span>
        </Link>
      </nav>
    </div>
  );
}
