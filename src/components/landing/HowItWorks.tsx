import React from 'react';
import { UserPlus, Settings, Rocket, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface HowItWorksProps {
  onOpenTrial: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenTrial }) => {
  const steps = [
    {
      number: '01',
      title: 'Cadastre sua Empresa',
      description: 'Crie sua conta em 1 minuto. Não pedimos cartão de crédito para começar.',
      icon: <UserPlus className="w-5 h-5 text-[#00E676]" />
    },
    {
      number: '02',
      title: 'Personalize os Serviços',
      description: 'Configure seus serviços, peças, equipe e tabela de preços de forma intuitiva.',
      icon: <Settings className="w-5 h-5 text-[#00E676]" />
    },
    {
      number: '03',
      title: 'Transforme sua Gestão',
      description: 'Emita a primeira OS em menos de 3 minutos e acompanhe os resultados em tempo real.',
      icon: <Rocket className="w-5 h-5 text-[#00E676]" />
    }
  ];

  return (
    <section id="como-funciona" className="py-10 md:py-28 bg-[#0A0C14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight">
            Como funciona o <span className="text-[#00E676]">MechOS?</span>
          </h2>
          <p className="text-xs sm:text-base text-zinc-400">
            Implantação ágil e sem complicações para sua empresa rodar 100% digital hoje mesmo.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
          {steps.map((st, idx) => (
            <Card
              key={idx}
              className="relative p-4 sm:p-8 bg-[#141722] border-[#242838] hover:border-[#00E676]/60 space-y-3 sm:space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl sm:text-4xl font-black text-[#00E676]/30 font-mono">
                  {st.number}
                </span>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#0F111A] border border-[#242838] flex items-center justify-center">
                  {st.icon}
                </div>
              </div>
              <h3 className="text-base sm:text-xl font-bold text-white">{st.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{st.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Button variant="electric" size="lg" onClick={onOpenTrial} icon={<ArrowRight className="w-5 h-5" />} className="w-full sm:w-auto">
            Começar Teste Grátis Agora
          </Button>
        </div>
      </div>
    </section>
  );
};
