import { Link } from "react-router";
import { ChevronLeft, CheckCircle } from "lucide-react";
import { useState } from "react";

export function ClientCheckout() {
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 shadow-inner">
          <CheckCircle className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-3xl font-serif text-foreground mb-2">Confirmado!</h1>
        <p className="text-muted-foreground mb-8">Seu agendamento foi realizado com sucesso. Te esperamos lá!</p>
        
        <div className="bg-card border border-border rounded-xl p-6 w-full max-w-sm mb-8 text-left shadow-sm">
          <p className="text-sm text-muted-foreground mb-1">Data e Horário</p>
          <p className="font-semibold text-foreground mb-4">15 Out, Ter às 14:30</p>
          
          <p className="text-sm text-muted-foreground mb-1">Serviço</p>
          <p className="font-semibold text-foreground mb-4">Manicure + Esmaltação em Gel</p>
          
          <p className="text-sm text-muted-foreground mb-1">Profissional</p>
          <p className="font-semibold text-foreground">Ana Silva</p>
        </div>

        <Link 
          to="/client" 
          className="w-full max-w-sm bg-primary text-primary-foreground font-semibold py-4 rounded-xl shadow-md hover:scale-[1.02] transition-transform block"
        >
          Voltar ao Início
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <header className="flex items-center gap-4 mb-8 pt-4">
        <Link to="/client/datetime" className="p-2 bg-card border border-border rounded-full text-foreground shadow-sm">
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-xl font-serif text-foreground">Revisão e Pagamento</h1>
      </header>

      <section className="bg-card border border-border rounded-xl p-5 mb-6 shadow-sm">
        <h3 className="font-serif text-lg mb-4 border-b border-border pb-2 text-foreground">Resumo do Pedido</h3>
        
        <div className="flex justify-between items-center mb-3">
          <div>
            <p className="font-medium text-foreground">Manicure + Gel</p>
            <p className="text-xs text-muted-foreground">Ana Silva</p>
          </div>
          <span className="font-medium text-foreground">R$ 80,00</span>
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-medium text-foreground">Spa dos Pés</p>
            <p className="text-xs text-muted-foreground">Ana Silva</p>
          </div>
          <span className="font-medium text-foreground">R$ 55,00</span>
        </div>

        <div className="border-t border-border pt-4 flex justify-between items-center">
          <span className="font-serif text-lg text-foreground">Total</span>
          <span className="font-serif text-xl text-primary">R$ 135,00</span>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-lg font-serif mb-4 text-foreground">Forma de Pagamento</h3>
        <div className="space-y-3">
          {["Cartão de Crédito", "PIX", "Pagar no Local"].map((method, i) => (
            <label key={i} className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors shadow-sm ${i === 1 ? 'border-primary bg-primary/5' : 'border-border bg-card'}`}>
              <span className="font-medium text-sm text-foreground">{method}</span>
              <input type="radio" name="payment" className="w-4 h-4 accent-primary" defaultChecked={i === 1} />
            </label>
          ))}
        </div>
      </section>

      <button 
        onClick={() => setConfirmed(true)}
        className="block w-full bg-primary text-primary-foreground text-center font-semibold py-4 rounded-xl shadow-md hover:scale-[1.02] transition-transform"
      >
        Confirmar Agendamento
      </button>
    </div>
  );
}
