import { Link } from "react-router";
import { ChevronLeft, Camera, Upload } from "lucide-react";
import { useState } from "react";

export function AdminAddPro() {
  const [saved, setSaved] = useState(false);

  if (saved) {
    return (
      <div className="min-h-screen bg-background text-foreground max-w-md mx-auto shadow-2xl flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h2 className="text-2xl font-serif text-foreground mb-2">Profissional Adicionado!</h2>
        <p className="text-muted-foreground mb-8">O novo membro da equipe foi cadastrado com sucesso e já está disponível para agendamentos.</p>
        <Link to="/admin" className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg shadow-md hover:bg-primary/90 transition-colors block">
          Voltar ao Painel
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground max-w-md mx-auto shadow-2xl pb-10">
      <header className="bg-card px-6 py-6 border-b border-border flex items-center gap-4 shadow-sm">
        <Link to="/admin" className="text-muted-foreground hover:text-foreground">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h2 className="text-xl font-serif text-foreground">Novo Profissional</h2>
      </header>

      <div className="p-6">
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-muted border border-border border-dashed flex items-center justify-center mb-3 relative overflow-hidden group cursor-pointer">
            <Camera className="w-6 h-6 text-muted-foreground" />
            <div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center transition-colors">
              <Upload className="w-6 h-6 text-white" />
            </div>
          </div>
          <span className="text-sm font-medium text-primary cursor-pointer hover:underline">Adicionar Foto</span>
        </div>

        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSaved(true); }}>
          <div className="space-y-1">
            <label className="text-xs font-medium text-foreground ml-1">Nome Completo</label>
            <input type="text" placeholder="Ex: Júlia Silva" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" required />
          </div>
          
          <div className="space-y-1">
            <label className="text-xs font-medium text-foreground ml-1">Especialidade / Cargo</label>
            <input type="text" placeholder="Ex: Nail Designer Sênior" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" required />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-foreground ml-1">Comissão Padrão (%)</label>
            <input type="number" placeholder="Ex: 40" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" required />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-foreground ml-1">E-mail (Acesso ao App)</label>
            <input type="email" placeholder="email@exemplo.com" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" required />
          </div>
          
          <div className="space-y-1">
            <label className="text-xs font-medium text-foreground ml-1">Telefone</label>
            <input type="tel" placeholder="(00) 00000-0000" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" required />
          </div>

          <button type="submit" className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-xl shadow-md hover:scale-[1.02] transition-transform mt-8">
            Salvar Profissional
          </button>
        </form>
      </div>
    </div>
  );
}
