import React from 'react';
import { Check, X } from 'lucide-react';

export const Comparison: React.FC = () => {
  const comparisonItems = [
    { feature: 'Agilidade na emissão de OS em menos de 3 minutos', manual: false, mechos: true },
    { feature: 'Histórico completo por placa do veículo', manual: false, mechos: true },
    { feature: 'Envio de orçamento profissional em PDF no WhatsApp', manual: false, mechos: true },
    { feature: 'Controle de estoque com alertas automáticos', manual: false, mechos: true },
    { feature: 'Inteligência Artificial de apoio ao gestor', manual: false, mechos: true },
    { feature: 'Painel financeiro fluxo de caixa e DRE em tempo real', manual: false, mechos: true }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white border-y border-zinc-200 relative">
      <div className="max-w-5xl mx-auto px-[1.5cm] sm:px-6 lg:px-8 text-center">
        
        {/* Header Centralizado com subtítulo na margem do título */}
        <div className="max-w-xl mx-auto space-y-2 mb-6 sm:mb-8 text-center">
          <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight font-steel uppercase text-center">
            Por que migrar do papel para o <span className="text-[#00E676]">MechOS</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 font-medium text-center">
            Compare a gestão tradicional com a eficiência e velocidade da nossa plataforma
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-zinc-200/90 rounded-2xl sm:rounded-3xl p-3 sm:p-6 overflow-hidden shadow-lg text-left">
          <div className="grid grid-cols-12 pb-3 border-b border-zinc-200 text-xs font-bold uppercase tracking-wider font-steel">
            <div className="col-span-6 text-zinc-500">Funcionalidade</div>
            <div className="col-span-3 text-center text-rose-500">Manual Papel</div>
            <div className="col-span-3 text-center text-[#00E676]">MechOS</div>
          </div>

          <div className="divide-y divide-zinc-200/80">
            {comparisonItems.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 py-3 text-xs sm:text-sm items-center hover:bg-white/80 transition-colors px-1 rounded-lg">
                <div className="col-span-6 font-semibold text-zinc-800">{item.feature}</div>
                <div className="col-span-3 flex justify-center text-rose-500">
                  {item.manual ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center">
                      <X className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
                <div className="col-span-3 flex justify-center text-[#00E676]">
                  {item.mechos ? (
                    <div className="w-5 h-5 rounded-full bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 font-bold" />
                    </div>
                  ) : (
                    <X className="w-4 h-4 text-zinc-300" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Comparison;
