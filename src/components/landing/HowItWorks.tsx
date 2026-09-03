import React from 'react';
import { Building2, Sliders, TrendingUp, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Cadastre sua empresa',
      description: 'Crie sua conta em segundos. Selecione seu segmento automotivo e personalize as preferências da sua oficina.',
      icon: <Building2 className="w-6 h-6 text-[#00E676]" />
    },
    {
      step: '02',
      title: 'Organize sua operação',
      description: 'Cadastre clientes, veículos e catálogo de peças. Implante o fluxo rápido de Ordens de Serviço e agenda.',
      icon: <Sliders className="w-6 h-6 text-[#00E676]" />
    },
    {
      step: '03',
      title: 'Acompanhe e faça crescer',
      description: 'Acompanhe o faturamento em tempo real, economize com controle de estoque e use o Assistente IA para reter clientes.',
      icon: <TrendingUp className="w-6 h-6 text-[#00E676]" />
    }
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[#0A0C14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Como funciona o <span className="text-[#00E676]">MechOS?</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Implantação sem complicações ou treinamentos extensos. Sua equipe pronta para operar no primeiro dia.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-[#141722] border border-[#242838] hover:border-[#00E676]/60 rounded-3xl p-8 space-y-6 relative group transition-all duration-300 glow-card-hover"
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black font-mono text-[#00E676]/40 group-hover:text-[#00E676] transition-colors">
                  {s.step}
                </span>
                <div className="w-12 h-12 rounded-2xl bg-[#0F111A] border border-[#242838] flex items-center justify-center group-hover:border-[#00E676]">
                  {s.icon}
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-white tracking-tight">{s.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
