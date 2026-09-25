import { Link } from "react-router";

export function Register() {
  return (
    <div className="min-h-screen flex flex-col p-6">
      <div className="mt-8 mb-8">
        <h1 className="text-3xl font-serif text-primary">Criar Conta</h1>
        <p className="text-muted-foreground mt-2">Preencha seus dados para começar.</p>
      </div>

      <div className="w-full space-y-4 flex-1">
        <div className="space-y-2">
          <input 
            type="text" 
            placeholder="Nome completo" 
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div className="space-y-2">
          <input 
            type="email" 
            placeholder="E-mail" 
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div className="space-y-2">
          <input 
            type="tel" 
            placeholder="Celular" 
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div className="space-y-2">
          <input 
            type="password" 
            placeholder="Senha" 
            className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        
        <Link 
          to="/client" 
          className="block w-full bg-primary text-primary-foreground text-center font-semibold py-3 rounded-lg mt-8 hover:bg-primary/90 transition-colors"
        >
          Cadastrar
        </Link>
      </div>
      
      <div className="text-center pb-8 text-muted-foreground text-sm">
        Já tem uma conta? <Link to="/" className="text-primary hover:underline">Faça login</Link>
      </div>
    </div>
  );
}
