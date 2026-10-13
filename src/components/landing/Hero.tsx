import React from 'react';
import { MechBrandLogo } from '../ui/MechBrandLogo';

interface HeroProps {
  onOpenTrial?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative pt-16 pb-7 sm:pt-22 sm:pb-11 md:pt-26 md:pb-14 bg-black text-white text-center overflow-hidden">
      {/* Subtle Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[550px] h-[180px] sm:h-[300px] bg-[#00E676]/10 blur-[120px] pointer-events-none rounded-full z-0" />

      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-3 sm:space-y-5 max-w-4xl mx-auto">
          {/* Logo oficial da MechOS centralizado acima da frase */}
          <div className="flex justify-center">
            <MechBrandLogo size="lg" className="h-10 xs:h-12 sm:h-16 md:h-20" />
          </div>

          {/* Frase Hero com Fonte STEEL metálica sem cortes no mobile */}
          <div className="overflow-visible px-1 py-0.5">
            <h1 className="font-steel steel-metallic-text text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight uppercase break-words max-w-full">
              Tenha o controle completo da sua operação automotiva
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
