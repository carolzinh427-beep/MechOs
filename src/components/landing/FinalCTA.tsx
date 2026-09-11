import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '../ui/Button';

interface FinalCTAProps {
  onOpenTrial: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenTrial }) => {
  return (
    <section className="py-2 sm:py-6 bg-[#07080C] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[150px] sm:h-[200px] bg-[#00E676]/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-3xl mx-auto px-3 sm:px-6 relative z-10">
        <div className="bg-[#141722] border border-[#00E676]/40 rounded-xl sm:rounded-2xl p-3 sm:p-5 text-center space-y-2 sm:space-y-3 glow-electric shadow-lg">
          <h2 className="text-base sm:text-2xl font-black text-white tracking-tight leading-tight">
            Pare de administrar sua empresa <span className="text-gradient-electric">no improviso.</span>
          </h2>

          <p className="text-[11px] sm:text-xs text-zinc-300 font-medium max-w-lg mx-auto leading-relaxed">
            Centralize sua operação, tenha mais controle e transforme seus dados em decisões melhores com a plataforma feita para o setor automotivo.
          </p>

          <div className="pt-0.5 flex flex-col sm:flex-row items-center justify-center gap-2">
            <Button
              variant="electric"
              size="sm"
              onClick={onOpenTrial}
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto text-xs px-4 py-2"
            >
              Começar teste agora
            </Button>
          </div>

          <p className="text-[10px] sm:text-xs text-zinc-400 font-medium flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00E676]" /> Teste grátis.
          </p>
        </div>
      </div>
    </section>
  );
};
