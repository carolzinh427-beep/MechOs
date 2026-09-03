import React from 'react';
import { XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface ComparisonProps {
  onOpenTrial: () => void;
}

export const Comparison: React.FC<ComparisonProps> = ({ onOpenTrial }) => {
  return (
    <section className="py-20 md:py-28 bg-[#0A0C14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Por que migrar do papel para o <span className="text-[#00E676]">MechOS?</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Veja a transformação direta na rotina da sua oficina quando você substitui cadernos e planilhas por uma plataforma especializada.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Manual Management (Before) */}
          <div className="bg-[#0F111A] border border-rose-500/20 rounded-3xl p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-rose-500/20 pb-4">
              <h3 className="text-xl font-bold text-rose-400 flex items-center gap-2">
                <XCircle className="w-6 h-6" /> Gestão Manual (Tradicional)
              </h3>
              <span className="text-xs text-rose-400/80 font-bold">Lenta e Ineficiente</span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Blocos de papel, fichas rasgadas e orçamentos perdidos.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Planilhas de Excel travadas e propensas a erros manuais.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>WhatsApp misturando conversas pessoais e profissionais.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Sem histórico das manutenções passadas do veículo do cliente.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Estoque desatualizado que gera faltas de peças no meio do serviço.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Falta de visão sobre o lucro líquido real no fim do mês.</span>
              </li>
            </ul>
          </div>

          {/* With MechOS Platform (After) */}
          <div className="bg-[#141722] border border-[#00E676] rounded-3xl p-8 space-y-6 glow-electric">
            <div className="flex items-center justify-between border-b border-[#00E676]/30 pb-4">
              <h3 className="text-xl font-bold text-[#00E676] flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" /> Com o MechOS (Moderno)
              </h3>
              <span className="text-xs text-[#00E676] font-bold">100% Digital e Automático</span>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-zinc-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00E676] shrink-0 mt-0.5" />
                <span><strong className="text-white">Tudo centralizado:</strong> OS, orçamentos e fotos em poucos cliques.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00E676] shrink-0 mt-0.5" />
                <span><strong className="text-white">Processos organizados:</strong> status de cada serviço visível para toda a equipe.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00E676] shrink-0 mt-0.5" />
                <span><strong className="text-white">Histórico completo:</strong> prontuário cronológico por placa e cliente.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00E676] shrink-0 mt-0.5" />
                <span><strong className="text-white">Controle de estoque:</strong> baixas automáticas em OS com alertas de reposição.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00E676] shrink-0 mt-0.5" />
                <span><strong className="text-white">Gestão financeira:</strong> fluxo de caixa, receitas e DRE integrados.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#00E676] shrink-0 mt-0.5" />
                <span><strong className="text-white">Inteligência Artificial:</strong> análises rápidas para tomar decisões com dados.</span>
              </li>
            </ul>

            <div className="pt-4">
              <Button variant="electric" size="lg" className="w-full" onClick={onOpenTrial} icon={<ArrowRight className="w-4 h-4" />}>
                Modernizar Minha Empresa Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
