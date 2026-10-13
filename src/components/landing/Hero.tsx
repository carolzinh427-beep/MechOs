import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeroProps {
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial }) => {
  return (
    <section className="relative pt-16 pb-8 sm:pt-20 sm:pb-12 md:pt-24 md:pb-16 bg-black text-white text-center">
      {/* Subtle Static Background Glow Effect (Sem animação pesada) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[200px] sm:h-[350px] bg-[#00E676]/10 blur-[120px] pointer-events-none rounded-full z-0" />

      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Content Area */}
        <div className="space-y-3 sm:space-y-4 md:space-y-5 max-w-4xl mx-auto">
          {/* Main Headline using STEEL Industrial Font com proteção contra corte no mobile */}
          <div className="overflow-visible px-1 py-1">
            <h1 className="font-steel steel-metallic-text text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight uppercase break-words max-w-full">
              Tenha o controle completo da sua operação automotiva
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-zinc-300 font-medium max-w-2xl mx-auto leading-relaxed px-1">
            OS, estoque, financeiro, CRM, faturamento, clientes, veículos e Inteligência Artificial reunidos em um único sistema de alta performance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 pt-2 sm:pt-3">
            <Button
              variant="electric"
              size="md"
              onClick={onOpenTrial}
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto text-xs sm:text-sm py-2.5 sm:py-3 px-5 sm:px-7"
            >
              Começar teste agora
            </Button>
            <a
              href="https://wa.me/5561985890417?text=Ol%C3%A1!%20Gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%20o%20MechOS."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="md"
                icon={<MessageCircle className="w-4 h-4 text-[#25D366]" />}
                className="w-full text-xs sm:text-sm py-2.5 sm:py-3 px-4 sm:px-6"
              >
                Tirar dúvidas no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
