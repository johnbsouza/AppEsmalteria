import { Link } from "react-router";
import { LogOut, Users, FileText, Settings, DollarSign, Calendar as CalendarIcon, TrendingUp, Plus } from "lucide-react";

export function AdminDashboard() {
  const stats = [
    { label: "Receita Hoje", value: "R$ 1.250", icon: DollarSign },
    { label: "Agendamentos", value: "32", icon: CalendarIcon },
    { label: "Ticket Médio", value: "R$ 65", icon: TrendingUp },
    { label: "Profissionais", value: "5 ativas", icon: Users },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground max-w-md mx-auto shadow-2xl pb-10">
      <header className="bg-card px-6 py-6 border-b border-border flex justify-between items-center shadow-sm">
        <div>
          <h2 className="text-xl font-serif text-foreground">Painel Admin</h2>
          <p className="text-sm text-primary">Lirium Esmalteria</p>
        </div>
        <Link to="/" className="text-muted-foreground hover:text-foreground p-2">
          <LogOut className="w-5 h-5" />
        </Link>
      </header>

      <div className="p-6">
        <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Visão Geral (Hoje)</h3>
        <div className="grid grid-cols-2 gap-4 mb-8">
          {stats.map((stat, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-4 shadow-sm">
              <stat.icon className="w-5 h-5 text-primary mb-3" />
              <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-lg font-semibold text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Ações Rápidas</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link to="/admin/add-pro" className="bg-primary/10 border border-primary/20 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-primary/20 transition-colors text-center shadow-sm">
            <div className="bg-primary text-primary-foreground rounded-full p-1">
              <Plus className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium text-primary">Novo<br/>Profissional</span>
          </Link>
          <Link to="/admin/add-service" className="bg-primary/10 border border-primary/20 p-4 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-primary/20 transition-colors text-center shadow-sm">
            <div className="bg-primary text-primary-foreground rounded-full p-1">
              <Plus className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium text-primary">Novo<br/>Serviço</span>
          </Link>
        </div>

        <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">Gestão</h3>
        <div className="space-y-3">
          <Link to="/admin/team" className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl hover:border-primary/50 transition-colors shadow-sm">
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">Equipe e Profissionais</p>
              <p className="text-xs text-muted-foreground">Gerenciar manicures e nail designers</p>
            </div>
          </Link>
          
          <Link to="/admin/schedule" className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl hover:border-primary/50 transition-colors shadow-sm">
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">Agenda Geral</p>
              <p className="text-xs text-muted-foreground">Agendamentos manuais e cancelamentos</p>
            </div>
          </Link>

          <Link to="/admin/reports" className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl hover:border-primary/50 transition-colors shadow-sm">
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">Relatórios e Fechamento</p>
              <p className="text-xs text-muted-foreground">Comandas, fluxo de caixa e relatórios</p>
            </div>
          </Link>
          
          <Link to="/admin/services-list" className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl hover:border-primary/50 transition-colors shadow-sm">
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">Cadastro de Serviços</p>
              <p className="text-xs text-muted-foreground">Valores, duração e categorias</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
