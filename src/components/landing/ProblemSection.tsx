import React from 'react';
import { ArrowDown } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white border-y border-zinc-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight font-steel uppercase leading-tight">
            Sua empresa ainda depende de papel, planilhas e WhatsApp?
          </h2>
          <p className="text-xs sm:text-base md:text-lg text-zinc-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Trabalhar sem um sistema integrado gera desperdício de tempo e perda direta de faturamento na sua oficina.
          </p>
        </div>

        {/* Transition callout */}
        <div className="pt-2 sm:pt-4 space-y-2 sm:space-y-3">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#00E676]/10 border border-[#00E676] flex items-center justify-center mx-auto text-[#00E676] animate-bounce shadow-sm">
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <p className="text-sm xs:text-base sm:text-2xl md:text-3xl font-black text-zinc-950 tracking-tight font-steel uppercase">
            Existe uma forma <span className="text-[#00E676]">mais simples e lucrativa</span>
          </p>
        </div>
      </div>
    </section>
  );
};
