import React from 'react';
import SplitText from '../ui/SplitText';
import AccordionGallery from '../ui/AccordionGallery';

export const SolutionBento: React.FC = () => {
  const solutionPanels = [
    {
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80',
      label: 'Ordens de Serviço',
      description: 'Checklist digital fotos da vistoria e status em tempo real'
    },
    {
      image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=80',
      label: 'Estoque de Peças',
      description: 'Baixa automática ao fechar a OS e alerta de estoque mínimo'
    },
    {
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80',
      label: 'CRM e WhatsApp',
      description: 'Envio rápido de orçamentos e aprovação online com 1 clique'
    },
    {
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
      label: 'Financeiro e DRE',
      description: 'Fluxo de caixa margens de lucro e relatórios de faturamento'
    },
    {
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1200&q=80',
      label: 'Histórico por Placa',
      description: 'Linha do tempo de todas as manutenções e peças por veículo'
    },
    {
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80',
      label: 'Agenda de Boxes',
      description: 'Distribuição ágil entre mecânicos e elevadores sem fila no pátio'
    }
  ];

  return (
    <section id="recursos" className="py-8 sm:py-12 md:py-16 bg-white border-y border-zinc-200 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Header Centralizado com SplitText e subtítulo contido na margem do título */}
        <div className="max-w-xl mx-auto space-y-2 text-center">
          <SplitText
            tag="h2"
            text="Tudo o que sua empresa precisa em um só lugar"
            className="text-xl xs:text-2xl sm:text-4xl font-black text-zinc-950 tracking-tight font-steel uppercase text-center"
          />
          <p className="text-xs sm:text-sm text-zinc-600 font-medium text-center">
            A plataforma MechOS conecta a recepção ao financeiro com máxima agilidade
          </p>
        </div>

        {/* Galeria AccordionGallery 100% Horizontal do React Bits */}
        <div className="w-full text-left shadow-lg rounded-2xl overflow-hidden">
          <AccordionGallery
            items={solutionPanels}
            defaultIndex={0}
            expandRatio={0.5}
            height={440}
            accentColor="#00E676"
            overlayColor="#07080C"
            radius={18}
            orientation="horizontal"
            trigger="hover"
          />
        </div>

      </div>
    </section>
  );
};

export default SolutionBento;
