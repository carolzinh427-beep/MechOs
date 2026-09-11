import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';

interface FinalCTAProps {
  onOpenTrial: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenTrial }) => {
  return (
    <section className="py-4 sm:py-16 bg-[#07080C] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[250px] sm:h-[350px] bg-[#00E676]/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#141722] border border-[#00E676]/40 rounded-xl sm:rounded-3xl p-4 sm:p-10 text-center space-y-3 sm:space-y-5 glow-electric shadow-xl">
          <h2 className="text-lg sm:text-4xl font-black text-white tracking-tight leading-tight">
            Pare de administrar sua empresa <span className="text-gradient-electric">no improviso.</span>
          </h2>

          <p className="text-xs sm:text-base text-zinc-300 font-medium max-w-xl mx-auto leading-relaxed">
            Centralize sua operação, tenha mais controle e transforme seus dados em decisões melhores com a plataforma feita para o setor automotivo.
          </p>

          <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <Button
              variant="electric"
              size="md"
              onClick={onOpenTrial}
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto text-xs sm:text-sm px-4 py-2 sm:px-6 sm:py-2.5"
            >
              Começar teste agora
            </Button>
          </div>

          <p className="text-[10px] sm:text-xs text-zinc-400 font-medium flex items-center justify-center gap-1 pt-0.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00E676]" /> Teste grátis sem cartão de crédito.
          </p>
        </div>
      </div>
    </section>
  );
};
