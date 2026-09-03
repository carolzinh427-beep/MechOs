import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';

interface FinalCTAProps {
  onOpenTrial: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenTrial }) => {
  return (
    <section className="py-10 md:py-28 bg-[#07080C] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00E676]/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#141722] border border-[#00E676]/40 rounded-2xl sm:rounded-3xl p-6 sm:p-14 text-center space-y-4 sm:space-y-6 glow-electric shadow-2xl">
          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Pare de administrar sua empresa <span className="text-gradient-electric">no improviso.</span>
          </h2>

          <p className="text-xs sm:text-lg text-zinc-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Centralize sua operação, tenha mais controle e transforme seus dados em decisões melhores com a plataforma feita para o setor automotivo.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="electric"
              size="lg"
              onClick={onOpenTrial}
              icon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              Começar agora
            </Button>
          </div>

          <p className="text-[11px] sm:text-xs text-zinc-400 font-medium flex items-center justify-center gap-1.5 pt-1">
            <ShieldCheck className="w-4 h-4 text-[#00E676]" /> Leve sua gestão para o próximo nível. Teste grátis sem cartão.
          </p>
        </div>
      </div>
    </section>
  );
};
