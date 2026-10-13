import React from 'react';
import {
  TrendingUp,
  Wrench,
  Car,
  Boxes,
  ArrowRight
} from 'lucide-react';
import { Button } from '../ui/Button';

interface HeroSystemPreviewProps {
  onOpenTrial: () => void;
}

export const HeroSystemPreview: React.FC<HeroSystemPreviewProps> = ({ onOpenTrial }) => {
  return (
    <section className="py-6 sm:py-10 bg-[#07080C] relative overflow-hidden border-b border-[#242838]/60">
      {/* Background glow behind preview */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#00E676]/10 blur-[130px] pointer-events-none rounded-full z-0" />

      <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-1 sm:space-y-2 mb-4 sm:mb-7">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E676]/10 text-[#00E676] text-[10px] sm:text-xs font-bold border border-[#00E676]/30 uppercase tracking-wider font-steel">
            Painel Operacional em Tempo Real
          </span>
          <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight font-steel uppercase">
            A interface que coloca sua empresa no <span className="text-[#00E676]">piloto automático</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400">
            Acesso rápido às ordens de serviço, fluxo de veículos, estoque e faturamento direto pelo celular ou computador.
          </p>
        </div>

        {/* Mockup Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative Glow Ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00E676]/30 via-emerald-500/15 to-[#00E676]/30 rounded-2xl md:rounded-3xl blur-md opacity-60 transition duration-1000" />

          <div className="relative bg-[#0F111A] border border-[#242838] rounded-xl md:rounded-2xl shadow-2xl overflow-hidden text-left">
            {/* Mockup Top Window Bar */}
            <div className="bg-[#141722] border-b border-[#242838] px-2.5 py-2 sm:px-4 sm:py-3 flex items-center justify-between gap-3 overflow-hidden">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 shrink">
                <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="ml-1 sm:ml-2 text-[9px] xs:text-[10px] sm:text-[11px] font-mono text-zinc-400 truncate">
                  app.mechos.com.br/dashboard
                </span>
              </div>

              {/* Segment Pill indicator */}
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00E676]/10 text-[#00E676] text-[8px] xs:text-[9px] sm:text-[10px] font-bold border border-[#00E676]/30 shrink-0 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-ping shrink-0" /> Centro Automotivo Apex
              </span>
            </div>

            {/* Mockup Body Content */}
            <div className="p-2.5 sm:p-5 md:p-6 space-y-2.5 sm:space-y-4">
              {/* Top Metrics Row - Layout 2x2 no mobile */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5">
                {/* Metric 1 */}
                <div className="p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#141722] border border-[#242838] hover:border-[#00E676]/50 transition-all">
                  <div className="flex items-center justify-between text-zinc-400 mb-0.5">
                    <span className="text-[8px] xs:text-[9px] sm:text-[11px] font-bold uppercase tracking-wider font-steel">Faturamento</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#00E676]" />
                  </div>
                  <p className="text-xs xs:text-sm sm:text-2xl font-black text-white font-steel">R$ 48.920<span className="text-[9px] sm:text-xs text-zinc-400">,00</span></p>
                  <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-bold text-[#00E676] inline-flex items-center gap-0.5 mt-0.5">
                    +17,8% vs mês ant.
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#141722] border border-[#242838]">
                  <div className="flex items-center justify-between text-zinc-400 mb-0.5">
                    <span className="text-[8px] xs:text-[9px] sm:text-[11px] font-bold uppercase tracking-wider font-steel">OS Concluídas</span>
                    <Wrench className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <p className="text-xs xs:text-sm sm:text-2xl font-black text-white font-steel">127 <span className="text-[9px] sm:text-xs text-zinc-400">serviços</span></p>
                  <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-medium text-zinc-400 mt-0.5 block truncate">Ticket médio: R$ 385</span>
                </div>

                {/* Metric 3 */}
                <div className="p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#141722] border border-[#242838]">
                  <div className="flex items-center justify-between text-zinc-400 mb-0.5">
                    <span className="text-[8px] xs:text-[9px] sm:text-[11px] font-bold uppercase tracking-wider font-steel">Veículos</span>
                    <Car className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <p className="text-xs xs:text-sm sm:text-2xl font-black text-white font-steel">94 <span className="text-[9px] sm:text-xs text-zinc-400">carros</span></p>
                  <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-bold text-[#00E676] inline-flex items-center gap-0.5 mt-0.5">
                    +32 novos clientes
                  </span>
                </div>

                {/* Metric 4 */}
                <div className="p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-[#141722] border border-[#242838]">
                  <div className="flex items-center justify-between text-zinc-400 mb-0.5">
                    <span className="text-[8px] xs:text-[9px] sm:text-[11px] font-bold uppercase tracking-wider font-steel">Alerta Estoque</span>
                    <Boxes className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <p className="text-xs xs:text-sm sm:text-2xl font-black text-amber-400 font-steel">3 <span className="text-[9px] sm:text-xs text-zinc-400">baixos</span></p>
                  <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-medium text-amber-400/80 mt-0.5 block truncate">Reposição sugerida</span>
                </div>
              </div>

              {/* Interactive Mockup Work Order List Preview */}
              <div className="bg-[#141722] border border-[#242838] rounded-xl p-2.5 sm:p-3.5 space-y-2">
                <div className="flex items-center justify-between border-b border-[#242838] pb-1.5">
                  <h4 className="text-[9px] xs:text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 font-steel">
                    <Wrench className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#00E676]" /> Ordens de Serviço Recentes
                  </h4>
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#00E676] shrink-0">4 OS ativas</span>
                </div>

                <div className="space-y-1.5 sm:space-y-2">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-[#181C28] border border-[#242838] flex items-center justify-between gap-2 text-xs overflow-hidden">
                    <div className="min-w-0 shrink">
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="font-mono font-bold text-[#00E676] text-[10px] sm:text-xs shrink-0">OS #1042</span>
                        <span className="font-semibold text-white text-[10px] sm:text-xs truncate">Corolla Cross 2.0</span>
                        <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-zinc-800 text-[9px] sm:text-[10px] text-zinc-300 font-mono">ABC-7R89</span>
                      </div>
                      <p className="text-[9px] sm:text-[11px] text-zinc-400 mt-0.5 truncate">Revisão preventiva 30k + Troca pastilhas</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-extrabold text-white text-[10px] sm:text-sm font-steel">R$ 1.190,00</span>
                      <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#00E676]/10 text-[#00E676] text-[8px] sm:text-[10px] font-bold border border-[#00E676]/30 whitespace-nowrap">
                        Em Execução
                      </span>
                    </div>
                  </div>

                  <div className="p-2 sm:p-2.5 rounded-lg bg-[#181C28] border border-[#242838] flex items-center justify-between gap-2 text-xs overflow-hidden">
                    <div className="min-w-0 shrink">
                      <div className="flex items-center gap-1.5 truncate">
                        <span className="font-mono font-bold text-[#00E676] text-[10px] sm:text-xs shrink-0">OS #1041</span>
                        <span className="font-semibold text-white text-[10px] sm:text-xs truncate">Civic 2.0 Touring</span>
                        <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-zinc-800 text-[9px] sm:text-[10px] text-zinc-300 font-mono">JKL-3D45</span>
                      </div>
                      <p className="text-[9px] sm:text-[11px] text-zinc-400 mt-0.5 truncate">Alinhamento 3D + Troca óleo 0W20</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-extrabold text-white text-[10px] sm:text-sm font-steel">R$ 680,00</span>
                      <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[8px] sm:text-[10px] font-bold border border-blue-500/30 whitespace-nowrap">
                        Aprovada
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
