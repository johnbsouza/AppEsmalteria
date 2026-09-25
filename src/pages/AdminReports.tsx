import { Link } from "react-router";
import { ChevronLeft, TrendingUp, DollarSign, FileText, CheckCircle } from "lucide-react";
import { useState } from "react";

export function AdminReports() {
  const [closed, setClosed] = useState(false);

  if (closed) {
    return (
      <div className="min-h-screen bg-background text-foreground max-w-md mx-auto shadow-2xl flex flex-col items-center justify-center p-6 text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-serif text-foreground mb-2">Caixa Fechado!</h2>
        <p className="text-muted-foreground mb-8">O relatório diário foi salvo e as comissões foram registradas com sucesso no sistema.</p>
        <Link to="/admin" className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-lg shadow-md hover:bg-primary/90 transition-colors block text-center">
          Voltar ao Painel
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground max-w-md mx-auto shadow-2xl pb-10">
      <header className="bg-card px-6 py-6 border-b border-border flex items-center gap-4 shadow-sm sticky top-0 z-10">
        <Link to="/admin" className="text-muted-foreground hover:text-foreground">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h2 className="text-xl font-serif text-foreground">Relatórios & Caixa</h2>
      </header>

      <div className="p-6">
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 mb-8">
          <h3 className="text-sm font-medium text-primary mb-1 uppercase tracking-wider">Faturamento Hoje</h3>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-3xl font-serif text-foreground">R$ 1.250,00</span>
            <span className="text-sm text-green-600 flex items-center gap-1 font-medium mb-1">
              <TrendingUp className="w-4 h-4" /> +12%
            </span>
          </div>
          <div className="flex gap-4 border-t border-primary/20 pt-4 text-sm">
            <div className="flex-1">
              <p className="text-muted-foreground text-xs mb-1">Cartão/PIX</p>
              <p className="font-medium text-foreground">R$ 1.050,00</p>
            </div>
            <div className="flex-1 border-l border-primary/20 pl-4">
              <p className="text-muted-foreground text-xs mb-1">Dinheiro</p>
              <p className="font-medium text-foreground">R$ 200,00</p>
            </div>
          </div>
        </div>

        <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Comissões Pendentes</h3>
        <div className="space-y-3 mb-8">
          <div className="bg-card border border-border p-4 rounded-xl shadow-sm flex justify-between items-center">
            <div>
              <p className="font-medium text-foreground">Ana Silva</p>
              <p className="text-xs text-muted-foreground">Nail Designer Sênior (40%)</p>
            </div>
            <span className="font-semibold text-primary">R$ 380,00</span>
          </div>
          <div className="bg-card border border-border p-4 rounded-xl shadow-sm flex justify-between items-center">
            <div>
              <p className="font-medium text-foreground">Beatriz Costa</p>
              <p className="text-xs text-muted-foreground">Manicure Clássica (35%)</p>
            </div>
            <span className="font-semibold text-primary">R$ 210,00</span>
          </div>
        </div>

        <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Ações</h3>
        <button 
          onClick={() => setClosed(true)}
          className="w-full flex items-center justify-center gap-2 bg-foreground text-background font-semibold py-4 rounded-xl shadow-md hover:bg-foreground/90 transition-colors mb-4"
        >
          <FileText className="w-5 h-5" />
          Fechar Caixa do Dia
        </button>
        <button className="w-full flex items-center justify-center gap-2 bg-card border border-border text-foreground font-semibold py-4 rounded-xl shadow-sm hover:border-primary/50 transition-colors">
          <DollarSign className="w-5 h-5 text-muted-foreground" />
          Exportar Relatório Mensal
        </button>
      </div>
    </div>
  );
}
