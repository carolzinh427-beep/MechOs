import React from 'react';
import { MechBrandLogo } from '../ui/MechBrandLogo';
import SplitText from '../ui/SplitText';
import { TiltedGridHero, type TiltedGridImage } from '../ui/tilted-grid-hero';

const WORKSHOP_IMAGES: TiltedGridImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Oficina mecânica desorganizada com peças e OS manuais'
  },
  {
    src: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=1200&q=80',
    alt: 'Bancada de ferramentas desorganizadas'
  },
  {
    src: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Diagnóstico automotivo e mecânica'
  },
  {
    src: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
    alt: 'Pátio automotivo e manutenção'
  },
  {
    src: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=80',
    alt: 'Estoque de peças acumulado'
  },
  {
    src: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
    alt: 'Ordens de serviço em oficina tradicional'
  },
  {
    src: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80',
    alt: 'Motor e inspeção mecânica de precisão'
  },
  {
    src: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1200&q=80',
    alt: 'Centro automotivo e fluxo de serviços'
  }
];

interface HeroProps {
  onOpenTrial?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative w-full bg-black text-white text-center overflow-hidden">
      <TiltedGridHero
        images={WORKSHOP_IMAGES}
        tileHeight={22}
        aspectRatio={16 / 9}
        speed={4.5}
        curve={78}
        axis={68}
        fade={14}
        className="w-full min-h-[520px] xs:min-h-[560px] sm:min-h-[600px] md:min-h-[640px] flex items-center justify-center border-b border-[#242838]/60"
      >
        {/* Glow neon de fundo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[560px] h-[220px] sm:h-[320px] bg-[#00E676]/12 blur-[130px] pointer-events-none rounded-full z-0" />

        {/* Overlay escuro suave no centro para realce máximo da Logo oficial, título e subtítulo */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none z-[1]" />

        {/* Conteúdo da Hero centralizado com logo oficial mantida, título e subtítulo nítido */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full flex flex-col items-center justify-center space-y-4 sm:space-y-6">
          {/* Logo oficial da MechOS sem fundo e destacada */}
          <div className="flex justify-center w-full transition-transform duration-300 hover:scale-[1.02]">
            <MechBrandLogo className="h-24 xs:h-28 sm:h-36 md:h-44 w-auto drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]" />
          </div>

          {/* Título Principal com SplitText e Fonte STEEL metálica */}
          <div className="overflow-visible w-full">
            <SplitText
              tag="h1"
              text="Tenha o controle completo da sua operação automotiva"
              className="font-steel steel-metallic-text text-xl xs:text-2xl sm:text-3xl md:text-5xl tracking-tight leading-tight uppercase break-words max-w-3xl mx-auto text-center drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
            />
          </div>

          {/* Subtítulo da Hero aparecendo de forma 100% nítida e visível */}
          <p className="text-zinc-200 text-xs xs:text-sm sm:text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            OS, estoque, financeiro, CRM, faturamento, clientes e Inteligência Artificial reunidos em um único sistema de alta performance
          </p>
        </div>
      </TiltedGridHero>
    </section>
  );
};

export default Hero;
