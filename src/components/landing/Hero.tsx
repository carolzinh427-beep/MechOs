import React from 'react';
import { MechBrandLogo } from '../ui/MechBrandLogo';

interface HeroProps {
  onOpenTrial?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative min-h-[45vh] sm:min-h-0 flex flex-col justify-center pt-28 pb-20 xs:pt-32 xs:pb-24 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16 bg-black text-white text-center overflow-hidden">
      {/* Subtle Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[550px] h-[220px] sm:h-[300px] bg-[#00E676]/10 blur-[120px] pointer-events-none rounded-full z-0" />

      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center space-y-5 xs:space-y-6 sm:space-y-6 md:space-y-7 max-w-4xl mx-auto">
          {/* Logo oficial da MechOS centralizado acima da frase */}
          <div className="flex justify-center">
            <MechBrandLogo size="lg" className="h-13 xs:h-16 sm:h-18 md:h-20" />
          </div>

          {/* Frase Hero com Fonte STEEL metálica sem cortes no mobile */}
          <div className="overflow-visible px-1 py-1">
            <h1 className="font-steel steel-metallic-text text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight uppercase break-words max-w-full">
              Tenha o controle completo da sua operação automotiva
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
