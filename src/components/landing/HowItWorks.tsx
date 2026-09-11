import React from 'react';
import { UserPlus, Settings, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import Stepper, { Step } from '../ui/Stepper';

interface HowItWorksProps {
  onOpenTrial: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenTrial }) => {
  return (
    <section id="como-funciona" className="py-10 md:py-28 bg-[#0A0C14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight">
            Como funciona o <span className="text-[#00E676]">MechOS?</span>
          </h2>
          <p className="text-xs sm:text-base text-zinc-400">
            Implantação ágil e sem complicações para sua empresa rodar 100% digital hoje mesmo.
          </p>
        </div>

        {/* Interactive React Bits Stepper Component */}
        <div className="max-w-4xl mx-auto">
          <Stepper
            initialStep={1}
            onFinalStepCompleted={() => {
              onOpenTrial();
            }}
            backButtonText="Anterior"
            nextButtonText="Próximo Passo"
          >
            <Step>
              <div className="space-y-3 py-2 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00E676]/10 border border-[#00E676]/30 flex items-center justify-center text-[#00E676]">
                    <UserPlus className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#00E676] uppercase tracking-wider">Passo 01</span>
                    <h3 className="text-lg sm:text-2xl font-black text-white">Cadastre sua Empresa</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                  Crie sua conta em apenas 1 minuto sem burocracia. Não pedimos cartão de crédito nem fidelidade para você testar todas as funcionalidades.
                </p>
                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-emerald-400 font-semibold pt-1">
                  <CheckCircle2 className="w-4 h-4" /> Acesso imediato ao painel de controle
                </div>
              </div>
            </Step>

            <Step>
              <div className="space-y-3 py-2 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00E676]/10 border border-[#00E676]/30 flex items-center justify-center text-[#00E676]">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#00E676] uppercase tracking-wider">Passo 02</span>
                    <h3 className="text-lg sm:text-2xl font-black text-white">Personalize os Serviços & Estoque</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                  Cadastre peças, serviços, mecânicos e tabela de preços de forma simples ou importe seus dados para rodar em poucos minutos.
                </p>
                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-emerald-400 font-semibold pt-1">
                  <CheckCircle2 className="w-4 h-4" /> Importação rápida de tabelas e peças
                </div>
              </div>
            </Step>

            <Step>
              <div className="space-y-3 py-2 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00E676]/10 border border-[#00E676]/30 flex items-center justify-center text-[#00E676]">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#00E676] uppercase tracking-wider">Passo 03</span>
                    <h3 className="text-lg sm:text-2xl font-black text-white">Transforme sua Gestão Automotiva</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
                  Emita sua primeira Ordem de Serviço em menos de 3 minutos, envie orçamentos via WhatsApp e monitore seu faturamento em tempo real.
                </p>
                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-emerald-400 font-semibold pt-1">
                  <CheckCircle2 className="w-4 h-4" /> Pronto para escalar sua oficina
                </div>
              </div>
            </Step>
          </Stepper>
        </div>

        {/* Global CTA below Stepper */}
        <div className="mt-8 sm:mt-12 text-center">
          <Button
            variant="electric"
            size="lg"
            onClick={onOpenTrial}
            icon={<ArrowRight className="w-5 h-5" />}
            className="w-full sm:w-auto"
          >
            Começar Teste Grátis Agora
          </Button>
        </div>
      </div>
    </section>
  );
};
