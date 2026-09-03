import React from 'react';
import { Check, X } from 'lucide-react';
import { Card } from '../ui/Card';

export const Comparison: React.FC = () => {
  const comparisonItems = [
    { feature: 'Agilidade na emissão de OS', manual: false, mechos: true },
    { feature: 'Histórico completo por placa', manual: false, mechos: true },
    { feature: 'Envio de orçamento por WhatsApp', manual: false, mechos: true },
    { feature: 'Controle de estoque mínimo automático', manual: false, mechos: true },
    { feature: 'Inteligência Artificial de apoio', manual: false, mechos: true },
    { feature: 'Painel financeiro e DRE automático', manual: false, mechos: true }
  ];

  return (
    <section className="py-10 md:py-28 bg-[#0A0C14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight">
            Por que migrar do papel para o <span className="text-[#00E676]">MechOS?</span>
          </h2>
          <p className="text-xs sm:text-base text-zinc-400">
            Compare a gestão tradicional em papel com a eficiência digital da nossa plataforma.
          </p>
        </div>

        {/* Comparison Table / Box */}
        <div className="max-w-4xl mx-auto bg-[#141722] border border-[#242838] rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-12 pb-4 border-b border-[#242838] text-xs font-bold uppercase tracking-wider">
            <div className="col-span-6 text-zinc-400">Funcionalidade</div>
            <div className="col-span-3 text-center text-rose-400">Manual</div>
            <div className="col-span-3 text-center text-[#00E676]">MechOS</div>
          </div>

          <div className="divide-y divide-[#242838]/60">
            {comparisonItems.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 py-3 text-xs sm:text-sm items-center">
                <div className="col-span-6 font-semibold text-zinc-200">{item.feature}</div>
                <div className="col-span-3 flex justify-center text-rose-500">
                  {item.manual ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                </div>
                <div className="col-span-3 flex justify-center text-[#00E676]">
                  {item.mechos ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
