import React from 'react';
import { ArrowDown } from 'lucide-react';
import AccordionGallery from '../ui/AccordionGallery';
import SplitText from '../ui/SplitText';

export const ProblemSection: React.FC = () => {
  const problemPanels = [
    {
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=80',
      label: 'Orçamentos perdidos',
      description: 'Cotações enviadas por texto no WhatsApp que caem no esquecimento e viram vendas perdidas'
    },
    {
      image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=900&q=80',
      label: 'OS desorganizadas',
      description: 'Blocos de papel e pranchas rasgadas que dificultam saber o status exato de cada serviço'
    },
    {
      image: 'https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?auto=format&fit=crop&w=900&q=80',
      label: 'Estoque sem controle',
      description: 'Peças faltando na hora do serviço ou acumuladas gerando prejuízo no caixa'
    },
    {
      image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=900&q=80',
      label: 'Clientes esquecidos',
      description: 'Sem lembretes automáticos para revisões preventivas trocas de óleo e retornos'
    },
    {
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=900&q=80',
      label: 'Contas espalhadas',
      description: 'Despesas anotadas em cadernos e falta de clareza sobre o lucro real do mês'
    },
    {
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=900&q=80',
      label: 'Falta de histórico',
      description: 'Não saber quais peças foram trocadas anteriormente no veículo do cliente'
    }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white border-y border-zinc-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-[1.5cm] sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Header Centralizado com SplitText */}
        <div className="max-w-xl mx-auto space-y-2 text-center">
          <SplitText
            tag="h2"
            text="Sua empresa ainda depende de papel planilhas e WhatsApp"
            className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight font-steel uppercase leading-tight text-center"
          />
          <p className="text-xs sm:text-base text-zinc-600 font-medium leading-relaxed text-center">
            Trabalhar sem um sistema integrado gera desperdício de tempo e perda direta de faturamento na sua oficina
          </p>
        </div>

        {/* Galeria AccordionGallery interativa com os 6 problemas */}
        <div className="w-full text-left">
          <AccordionGallery
            items={problemPanels}
            defaultIndex={0}
            expandRatio={0.46}
            height={430}
            accentColor="#00E676"
            overlayColor="#07080C"
            radius={18}
            trigger="hover"
          />
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

export default ProblemSection;
