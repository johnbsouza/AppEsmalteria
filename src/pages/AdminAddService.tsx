import { Link } from "react-router";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export function AdminAddService() {
  const [saved, setSaved] = useState(false);

  if (saved) {
    return (
      <div className="min-h-screen bg-background text-foreground max-w-md mx-auto shadow-2xl flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h2 className="text-2xl font-serif text-foreground mb-2">Serviço Cadastrado!</h2>
        <p className="text-muted-foreground mb-8">O novo serviço já está disponível para agendamento dos clientes.</p>
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
        <h2 className="text-xl font-serif text-foreground">Novo Serviço</h2>
      </header>

      <div className="p-6">
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSaved(true); }}>
          <div className="space-y-1">
            <label className="text-xs font-medium text-foreground ml-1">Nome do Serviço</label>
            <input type="text" placeholder="Ex: Alongamento Acrílico" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" required />
          </div>
          
          <div className="space-y-1">
            <label className="text-xs font-medium text-foreground ml-1">Categoria</label>
            <select className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" required>
              <option value="">Selecione...</option>
              <option value="maos">Mãos</option>
              <option value="pes">Pés</option>
              <option value="alongamento">Alongamento</option>
              <option value="spa">Spa</option>
              <option value="nail-art">Nail Art</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-foreground ml-1">Preço (R$)</label>
              <input type="number" placeholder="0,00" step="0.01" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" required />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-foreground ml-1">Duração (Min)</label>
              <input type="number" placeholder="Ex: 60" className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary shadow-sm" required />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-medium text-foreground ml-1">Descrição Breve (Opcional)</label>
            <textarea placeholder="Detalhes do serviço..." rows={3} className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"></textarea>
          </div>

          <button type="submit" className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-xl shadow-md hover:scale-[1.02] transition-transform mt-8">
            Salvar Serviço
          </button>
        </form>
      </div>
    </div>
  );
}
