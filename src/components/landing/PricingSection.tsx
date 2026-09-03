import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface PricingSectionProps {
  onOpenTrial: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenTrial }) => {
  const plans = [
    {
      name: 'Essencial',
      price: '197',
      period: '/mês',
      description: 'Ideal para oficinas menores e profissionais autônomos em fase de estruturação.',
      features: [
        'Até 2 usuários',
        'Ordens de Serviço Ilimitadas',
        'Cadastro de Clientes e Veículos',
        'Estoque Básico de Peças',
        'Financeiro Simplificado',
        'Suporte por E-mail'
      ],
      popular: false,
      ctaText: 'Escolher Essencial'
    },
    {
      name: 'Profissional',
      price: '297',
      period: '/mês',
      description: 'Perfeito para centros automotivos e oficinas em crescimento acelerado.',
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
      popular: true,
      badgeText: 'MAIS ESCOLHIDO',
      ctaText: 'Testar 14 Dias Grátis'
    },
    {
      name: 'Premium',
      price: '397',
      period: '/mês',
      description: 'Para grandes empresas automotivas e operações multi-técnicos exigentes.',
      features: [
        'Usuários Ilimitados',
        'Tudo do Profissional +',
        'Inteligência Artificial Total + Insights DRE',
        'Emissão de NF-e e NFS-e Integrada',
        'Multilojas / Gestão Integrada',
        'Histórico Completo por Placa Ilimitado',
        'Gerente de Conta Dedicado'
      ],
      popular: false,
      ctaText: 'Escolher Premium'
    }
  ];

  return (
    <section id="planos" className="py-10 md:py-28 bg-[#07080C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight">
            Comece com o plano certo para <span className="text-gradient-electric">sua empresa.</span>
          </h2>
          <p className="text-xs sm:text-base text-zinc-400">
            Sem fidelidade ou taxa de adesão. Teste por 14 dias sem informar cartão.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-stretch">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                p.popular
                  ? 'bg-[#141722] border-2 border-[#00E676] glow-electric lg:-translate-y-2'
                  : 'bg-[#0F111A] border border-[#242838] hover:border-[#242838]/80'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#00E676] text-zinc-950 font-black text-[10px] tracking-wider uppercase shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> {p.badgeText}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-2xl font-black text-white">{p.name}</h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{p.description}</p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 py-2 border-y border-[#242838]">
                  <span className="text-xs font-bold text-zinc-400">R$</span>
                  <span className="text-3xl sm:text-5xl font-black text-white">{p.price}</span>
                  <span className="text-xs text-zinc-400 font-medium">{p.period}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-2 text-xs">
                  {p.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-[#00E676]/10 text-[#00E676] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <Button
                  variant={p.popular ? 'electric' : 'outline'}
                  size="md"
                  onClick={onOpenTrial}
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full"
                >
                  {p.ctaText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
