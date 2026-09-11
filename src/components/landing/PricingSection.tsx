import React, { useRef } from 'react';
import { Check, ArrowRight, Wrench, Zap, Crown, Sparkles, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import Dock, { DockItemData } from '../ui/Dock';
import SpotlightCard from '../ui/SpotlightCard';

interface PricingSectionProps {
  onOpenTrial: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenTrial }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  const scrollToPlan = (index: number) => {
    cardRefs[index]?.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  const plans = [
    {
      name: 'Essencial',
      price: '197',
      period: '/mês',
      description: 'Ideal para oficinas menores e autônomos em fase de estruturação.',
      trialBadge: '3 Dias Grátis',
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
      description: 'Perfeito para centros automotivos em crescimento acelerado.',
      trialBadge: '3 Dias Grátis',
      features: [
        'Até 5 usuários',
        'Tudo do Essencial +',
        'CRM de Vendas Kanban',
        'Assistente IA MechOS (Consultas)',
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
      description: 'Para grandes empresas automotivas e operações multi-técnicos.',
      trialBadge: '3 Dias Grátis',
      features: [
        'Usuários Ilimitados',
        'Tudo do Profissional +',
        'Inteligência Artificial Total + Insights DRE',
        'Emissão de NF-e e NFS-e Integrada',
        'Multilojas / Gestão Integrada',
        'Histórico Completo por Placa Ilimitado',
        'Gerente de Conta Dedicado'
      ],
      popular: true,
      badgeText: 'MAIS VOTADO',
      ctaText: 'Testar 3 Dias Grátis'
    }
  ];

  // React Bits Dock Items configuration
  const dockItems: DockItemData[] = [
    {
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      label: 'Plano Essencial',
      onClick: () => scrollToPlan(0)
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      label: 'Plano Profissional',
      onClick: () => scrollToPlan(1)
    },
    {
      icon: <Crown className="w-5 h-5 text-[#00E676]" />,
      label: 'Plano Premium',
      onClick: () => scrollToPlan(2)
    },
    {
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      label: 'Teste Grátis',
      onClick: onOpenTrial
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-[#25D366]" />,
      label: 'Dúvidas WhatsApp',
      onClick: () => window.open('https://wa.me/5561985890417?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos%20do%20MechOS.', '_blank')
    }
  ];

  return (
    <section id="planos" className="py-10 md:py-24 bg-[#07080C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-6 md:mb-10">
          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight">
            Comece com o plano certo para <span className="text-[#00E676]">sua empresa</span>
          </h2>
          <p className="text-xs sm:text-base text-zinc-400 font-medium">
            Todos os planos possuem <strong className="text-[#00E676]">3 dias de teste grátis</strong> sem cartão de crédito.
          </p>
        </div>

        {/* React Bits Interactive Dock Component Navigation */}
        <div className="mb-8 md:mb-12 flex justify-center">
          <Dock
            items={dockItems}
            panelHeight={58}
            baseItemSize={44}
            magnification={60}
            distance={160}
          />
        </div>

        {/* Indicador de rolagem horizontal para mobile */}
        <div className="flex lg:hidden items-center justify-center gap-1.5 text-[11px] font-bold text-zinc-400 mb-3 animate-pulse">
          <span>← Deslize para lado para ver os planos →</span>
        </div>

        {/* Pricing Cards - Side-by-Side Horizontal Scroll no Mobile / Grid 3 Colunas no Desktop */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 sm:gap-6 pb-6 px-1 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 items-stretch [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {plans.map((p, idx) => (
            <div key={idx} ref={cardRefs[idx]} className="shrink-0 snap-center w-[85vw] max-w-[310px] sm:w-[340px] lg:w-auto flex">
              <SpotlightCard
                spotlightColor={p.popular ? 'rgba(0, 230, 118, 0.25)' : 'rgba(0, 230, 118, 0.15)'}
                className={`w-full relative rounded-2xl sm:rounded-3xl p-4 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  p.popular
                    ? 'bg-[#141722] border-2 border-[#00E676] glow-electric lg:-translate-y-2'
                    : 'bg-[#0F111A] border border-[#242838]'
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#00E676] text-zinc-950 font-black text-[9px] sm:text-[10px] tracking-wider uppercase shadow-md z-10">
                    {p.badgeText}
                  </div>
                )}

                <div className="space-y-3.5 z-10">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base sm:text-2xl font-black text-white">{p.name}</h3>
                      <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 leading-relaxed">{p.description}</p>
                    </div>
                  </div>

                  {/* Price Display & Trial Note */}
                  <div className="py-2 border-y border-[#242838] space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-bold text-zinc-400">R$</span>
                      <span className="text-2xl sm:text-4xl font-black text-white">{p.price}</span>
                      <span className="text-xs text-zinc-400 font-medium">{p.period}</span>
                    </div>
                    <div className="inline-block text-[9px] sm:text-[10px] font-bold text-[#00E676] bg-[#00E676]/10 px-2 py-0.5 rounded border border-[#00E676]/30">
                      Inclui 3 Dias de Teste Grátis
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-1.5 text-[11px] sm:text-xs">
                    {p.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-zinc-300">
                        <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#00E676]/10 text-[#00E676] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        </div>
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 sm:pt-6 z-10">
                  <Button
                    variant={p.popular ? 'electric' : 'outline'}
                    size="md"
                    onClick={onOpenTrial}
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="w-full text-xs sm:text-sm"
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

