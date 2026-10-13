import React, { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import SpotlightCard from '../ui/SpotlightCard';
import SplitText from '../ui/SplitText';

interface PricingSectionProps {
  onOpenTrial: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenTrial }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const plans = [
    {
      name: 'Essencial',
      price: '197',
      period: '/mês',
      description: 'Ideal para oficinas menores e autônomos em fase de estruturação',
      features: [
        'Até 2 usuários',
        'Ordens de Serviço Ilimitadas',
        'Cadastro de Clientes e Veículos',
        'Estoque Básico de Peças',
        'Financeiro Simplificado',
        'Suporte por E-mail'
      ],
      popular: false,
      ctaText: 'Testar 3 Dias Grátis'
    },
    {
      name: 'Profissional',
      price: '297',
      period: '/mês',
      description: 'Perfeito para centros automotivos em crescimento acelerado',
      features: [
        'Até 5 usuários',
        'Tudo do Essencial',
        'CRM de Vendas Kanban',
        'Assistente IA MechOS',
        'Alertas de Estoque Mínimo',
        'Relatórios de Faturamento Avançados',
        'Envio de Orçamentos via WhatsApp',
        'Suporte Prioritário no WhatsApp'
      ],
      popular: false,
      ctaText: 'Testar 3 Dias Grátis'
    },
    {
      name: 'Premium',
      price: '397',
      period: '/mês',
      description: 'Para grandes empresas automotivas e operações multi técnicos',
      features: [
        'Usuários Ilimitados',
        'Tudo do Profissional',
        'Inteligência Artificial Total e Insights DRE',
        'Emissão de NF-e e NFS-e Integrada',
        'Multilojas e Gestão Integrada',
        'Histórico Completo por Placa Ilimitado',
        'Gerente de Conta Dedicado'
      ],
      popular: true,
      badgeText: 'MAIS VOTADO',
      ctaText: 'Testar 3 Dias Grátis'
    }
  ];

  return (
    <section id="planos" className="py-8 sm:py-12 md:py-16 bg-[#07080C] relative overflow-hidden">
      {/* Margem específica de 1cm nesta sessão no mobile */}
      <div className="max-w-6xl mx-auto px-[1cm] sm:px-6 lg:px-8 text-center">
        
        {/* Header Centralizado com SplitText */}
        <div className="max-w-xl mx-auto space-y-2 mb-6 sm:mb-8 text-center">
          <SplitText
            tag="h2"
            text="Comece com o plano certo para sua empresa"
            className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-steel uppercase text-center"
          />
          <p className="text-xs sm:text-sm text-zinc-400 font-medium text-center">
            Todos os planos possuem <strong className="text-[#00E676]">3 dias de teste grátis</strong> com acesso imediato
          </p>
        </div>

        {/* Indicador de rolagem horizontal para mobile */}
        <div className="flex lg:hidden items-center justify-center gap-1.5 text-[10px] font-bold text-[#00E676] mb-3 animate-pulse">
          <span>Deslize para ver os planos</span>
        </div>

        {/* Pricing Cards Compactos para caber perfeitamente sem cortes com margem de 1cm */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-2.5 sm:gap-5 pb-3 sm:pb-5 px-0.5 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 items-stretch [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pt-1 text-left"
        >
          {plans.map((p, idx) => (
            <div key={idx} className="shrink-0 snap-center w-[calc(100vw-2cm-1.2rem)] max-w-[270px] sm:w-[310px] lg:w-auto flex">
              <SpotlightCard
                spotlightColor={p.popular ? 'rgba(0, 230, 118, 0.25)' : 'rgba(0, 230, 118, 0.15)'}
                className={`w-full relative rounded-xl sm:rounded-2xl p-3.5 sm:p-5 flex flex-col justify-between transition-all duration-300 ${
                  p.popular
                    ? 'bg-[#141722] border-2 border-[#00E676] glow-electric lg:-translate-y-2'
                    : 'bg-[#0F111A] border border-[#242838]'
                }`}
              >
                <div className="space-y-2.5 z-10">
                  {p.popular && (
                    <div className="flex justify-start">
                      <span className="px-2 py-0.5 rounded-full bg-[#00E676] text-zinc-950 font-black text-[9px] tracking-wider uppercase shadow-md font-steel">
                        {p.badgeText}
                      </span>
                    </div>
                  )}

                  <div>
                    <h3 className="text-base sm:text-xl font-black text-white font-steel">{p.name}</h3>
                    <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">{p.description}</p>
                  </div>

                  {/* Price Display */}
                  <div className="py-2 border-y border-[#242838] space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-bold text-zinc-400">R$</span>
                      <span className="text-2xl sm:text-3xl font-black text-white font-steel">{p.price}</span>
                      <span className="text-xs text-zinc-400 font-medium">{p.period}</span>
                    </div>
                    <div className="inline-block text-[9px] font-bold text-[#00E676] bg-[#00E676]/10 px-2 py-0.5 rounded border border-[#00E676]/30">
                      Inclui 3 Dias de Teste Grátis
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-1.5">
                    {p.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-[#00E676] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 mt-3 border-t border-[#242838] z-10">
                  <Button
                    variant={p.popular ? 'electric' : 'outline'}
                    size="sm"
                    onClick={onOpenTrial}
                    className="w-full text-xs font-bold"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    {p.ctaText}
                  </Button>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
