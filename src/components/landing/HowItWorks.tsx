import React from 'react';
import { UserPlus, Settings, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import Stepper, { Step } from '../ui/Stepper';

interface HowItWorksProps {
  onOpenTrial: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenTrial }) => {
  return (
    <section id="como-funciona" className="py-8 sm:py-12 md:py-16 bg-white border-y border-zinc-200 relative">
      <div className="max-w-5xl mx-auto px-[1.5cm] sm:px-6 lg:px-8 text-center">
        
        {/* Header Centralizado com subtítulo na margem do título */}
        <div className="max-w-xl mx-auto space-y-2 mb-6 sm:mb-8 text-center">
          <h2 className="text-xl xs:text-2xl sm:text-4xl md:text-5xl font-black text-zinc-950 tracking-tight font-steel uppercase text-center">
            Como funciona o <span className="text-[#00E676]">MechOS</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 font-medium text-center">
            Implantação ágil e sem complicações para sua empresa rodar 100% digital hoje mesmo
          </p>
        </div>

        {/* Stepper Component Adaptado */}
        <div className="max-w-3xl mx-auto">
          <Stepper
            initialStep={1}
            onFinalStepCompleted={() => {
              onOpenTrial();
            }}
            backButtonText="Anterior"
            nextButtonText="Próximo Passo"
            stepCircleContainerClassName="!bg-slate-50 !border-zinc-200 !shadow-lg"
            backButtonProps={{
              className: "!bg-white !text-zinc-700 !border-zinc-300 hover:!border-[#00E676] hover:!text-zinc-950 !transition-all"
            }}
          >
            <Step>
              <div className="space-y-3 py-2 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center text-[#00E676] shrink-0">
                    <UserPlus className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#00E676] uppercase tracking-wider">Passo 01</span>
                    <h3 className="text-base sm:text-xl font-black text-zinc-950 font-steel">Cadastre sua Empresa</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-medium">
                  Crie sua conta em apenas 1 minuto sem burocracia para testar todas as funcionalidades na prática
                </p>
                <div className="flex items-center gap-2 text-xs text-emerald-600 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#00E676]" /> Acesso imediato ao painel de controle
                </div>
              </div>
            </Step>

            <Step>
              <div className="space-y-3 py-2 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center text-[#00E676] shrink-0">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#00E676] uppercase tracking-wider">Passo 02</span>
                    <h3 className="text-base sm:text-xl font-black text-zinc-950 font-steel">Personalize os Serviços e Estoque</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-medium">
                  Cadastre peças serviços mecânicos e tabela de preços de forma simples ou importe seus dados
                </p>
                <div className="flex items-center gap-2 text-xs text-emerald-600 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#00E676]" /> Importação rápida de tabelas e peças
                </div>
              </div>
            </Step>

            <Step>
              <div className="space-y-3 py-2 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center text-[#00E676] shrink-0">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#00E676] uppercase tracking-wider">Passo 03</span>
                    <h3 className="text-base sm:text-xl font-black text-zinc-950 font-steel">Transforme sua Gestão Automotiva</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-medium">
                  Emita sua primeira Ordem de Serviço envie orçamentos via WhatsApp e monitore seu faturamento em tempo real
                </p>
                <div className="flex items-center gap-2 text-xs text-emerald-600 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-[#00E676]" /> Pronto para escalar sua oficina
                </div>
              </div>
            </Step>
          </Stepper>
        </div>

        {/* Global CTA below Stepper */}
        <div className="mt-6 sm:mt-8 text-center">
          <Button
            variant="electric"
            size="md"
            onClick={onOpenTrial}
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Começar Teste Grátis Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
