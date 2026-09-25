import { Link } from "react-router";
import logo from "../imports/shared_image.png";

export function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="mb-12 flex flex-col items-center">
        <div className="w-32 h-32 flex items-center justify-center mb-4">
          <img src={logo} alt="Lirium Esmalteria Logo" className="w-full h-full object-contain drop-shadow-sm" />
        </div>
        <h1 className="text-4xl font-serif text-primary uppercase tracking-widest mt-2">Lirium</h1>
        <p className="text-muted-foreground uppercase tracking-widest text-xs mt-2">Esmalteria & Spa</p>
      </div>

      <div className="w-full max-w-sm space-y-4">
        <div className="space-y-2">
          <input 
            type="email" 
            placeholder="E-mail" 
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm"
          />
        </div>
        <div className="space-y-2">
          <input 
            type="password" 
            placeholder="Senha" 
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm"
          />
        </div>
        
        <Link 
          to="/client" 
          className="block w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg mt-6 hover:bg-primary/90 transition-colors shadow-md"
        >
          Entrar
        </Link>
        
        <div className="flex justify-between text-sm mt-4 text-muted-foreground">
          <Link to="/forgot-password" className="hover:text-primary transition-colors">Esqueceu a senha?</Link>
          <Link to="/register" className="hover:text-primary transition-colors">Cadastre-se</Link>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex justify-center gap-4 text-xs text-muted-foreground">
          <Link to="/pro" className="hover:text-primary">Acesso Profissional</Link>
          <span>|</span>
          <Link to="/admin" className="hover:text-primary">Acesso Admin</Link>
        </div>
      </div>
    </div>
  );
}
