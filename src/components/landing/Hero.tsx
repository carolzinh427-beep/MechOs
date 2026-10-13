import React from 'react';
import { MechBrandLogo } from '../ui/MechBrandLogo';

interface HeroProps {
  onOpenTrial?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative min-h-[45vh] sm:min-h-0 flex flex-col justify-center pt-24 pb-16 xs:pt-28 xs:pb-20 sm:pt-24 sm:pb-16 md:pt-32 md:pb-20 bg-black text-white text-center overflow-hidden">
      {/* Subtle Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[550px] h-[220px] sm:h-[300px] bg-[#00E676]/10 blur-[120px] pointer-events-none rounded-full z-0" />

      <div className="max-w-5xl mx-auto px-[1.5cm] sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 max-w-3xl mx-auto">
          {/* Logo oficial da MechOS sem fundo e maior que a frase */}
          <div className="flex justify-center w-full">
            <MechBrandLogo className="h-24 xs:h-28 sm:h-36 md:h-44 w-auto" />
          </div>

          {/* Frase Hero com Fonte STEEL metálica sem cortes e sem ponto final */}
          <div className="overflow-visible w-full">
            <h1 className="font-steel steel-metallic-text text-lg xs:text-xl sm:text-3xl md:text-4xl tracking-tight leading-tight uppercase break-words max-w-2xl mx-auto">
              Tenha o controle completo da sua operação automotiva
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
