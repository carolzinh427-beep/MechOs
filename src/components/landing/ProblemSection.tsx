import React from 'react';
import { ArrowDown } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white border-y border-zinc-200 relative">
      <div className="max-w-3xl mx-auto px-[1.5cm] sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
        <div className="max-w-xl mx-auto space-y-2 text-center">
          <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight font-steel uppercase leading-tight text-center">
            Sua empresa ainda depende de papel planilhas e WhatsApp
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 font-medium leading-relaxed text-center">
            Trabalhar sem um sistema integrado gera desperdício de tempo e perda direta de faturamento na sua oficina
          </p>
        </div>

        {/* Transition callout */}
        <div className="pt-2 sm:pt-4 space-y-2 text-center max-w-xl mx-auto">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#00E676]/10 border border-[#00E676] flex items-center justify-center mx-auto text-[#00E676] animate-bounce shadow-sm">
            <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <p className="text-sm xs:text-base sm:text-2xl md:text-3xl font-black text-zinc-950 tracking-tight font-steel uppercase text-center">
            Existe uma forma <span className="text-[#00E676]">mais simples e lucrativa</span>
          </p>
        </div>
      </div>
    </section>
  );
};
