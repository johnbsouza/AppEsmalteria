import { Link } from "react-router";
import { ChevronLeft, Mail } from "lucide-react";
import { useState } from "react";

export function ForgotPassword() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen flex flex-col p-6">
      <header className="mb-8 pt-4">
        <Link to="/" className="p-2 inline-flex bg-card border border-border rounded-full text-foreground shadow-sm mb-6">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-3xl font-serif text-foreground">Recuperar Senha</h1>
        <p className="text-muted-foreground mt-2">Enviaremos as instruções para o seu e-mail.</p>
      </header>

      {sent ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 shadow-inner">
            <Mail className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-serif text-foreground mb-2">E-mail Enviado!</h2>
          <p className="text-muted-foreground mb-8">Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.</p>
          <Link to="/" className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg shadow-md hover:bg-primary/90 transition-colors block text-center">
            Voltar ao Login
          </Link>
        </div>
      ) : (
        <div className="w-full space-y-4 flex-1">
          <div className="space-y-2">
            <input 
              type="email" 
              placeholder="Digite seu e-mail" 
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm"
            />
          </div>
          
          <button 
            onClick={() => setSent(true)}
            className="block w-full bg-primary text-primary-foreground text-center font-semibold py-3 rounded-lg mt-8 shadow-md hover:scale-[1.02] transition-transform"
          >
            Enviar Instruções
          </button>
        </div>
      )}
    </div>
  );
}
