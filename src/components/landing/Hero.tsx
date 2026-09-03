import React, { useState } from 'react';
import {
  ArrowRight,
  Play,
  ShieldCheck,
  TrendingUp,
  Wrench,
  Users,
  Car,
  Boxes,
  Calendar,
  Sparkles,
  CheckCircle2,
  DollarSign,
  ChevronRight
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

interface HeroProps {
  onOpenTrial: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial }) => {
  const [activeMockupTab, setActiveMockupTab] = useState<'faturamento' | 'os' | 'estoque'>('faturamento');

  return (
    <section className="relative pt-24 pb-10 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00E676]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-4 md:space-y-6">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1]">
            Tenha o <span className="text-gradient-electric">controle completo</span> da sua operação automotiva.
          </h1>

          {/* Subheadline */}
          <p className="text-xs sm:text-xl text-zinc-400 font-medium max-w-3xl mx-auto leading-relaxed">
            OS, estoque, financeiro, CRM, faturamento, clientes, veículos e Inteligência Artificial reunidos em um único sistema de alta performance.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 sm:pt-4">
            <Button
              variant="electric"
              size="lg"
              onClick={onOpenTrial}
              icon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              Começar agora
            </Button>
            <a href="#como-funciona" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" icon={<Play className="w-4 h-4 fill-current" />} className="w-full">
                Ver como funciona
              </Button>
            </a>
          </div>

          {/* Trust note */}
          <p className="text-[11px] sm:text-sm text-zinc-500 font-medium flex items-center justify-center gap-1.5 pt-1">
            <ShieldCheck className="w-4 h-4 text-[#00E676]" /> Feito para oficinas e empresas automotivas que querem crescer.
          </p>
        </div>

        {/* Mockup Visual do Sistema */}
        <div className="mt-8 md:mt-20 relative max-w-5xl mx-auto">
          {/* Decorative Glow Ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00E676]/40 via-emerald-500/20 to-[#00E676]/40 rounded-2xl md:rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-1000"></div>

          {/* Mockup Container */}
          <div className="relative bg-[#0F111A] border border-[#242838] rounded-xl md:rounded-3xl shadow-2xl overflow-hidden text-left">
            {/* Mockup Top Window Bar */}
            <div className="bg-[#141722] border-b border-[#242838] px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                <span className="ml-2 text-[10px] sm:text-[11px] font-mono text-zinc-400">app.mechos.com.br/dashboard</span>
              </div>

              {/* Segment Pill indicator */}
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00E676]/10 text-[#00E676] text-[9px] sm:text-[10px] font-bold border border-[#00E676]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-ping" /> Centro Automotivo Apex
              </span>
            </div>

            {/* Mockup Body Content */}
            <div className="p-3 sm:p-6 md:p-8 space-y-3 sm:space-y-6">
              {/* Top Metrics Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
                {/* Metric 1 */}
                <div className="p-2.5 sm:p-4 rounded-lg sm:rounded-xl bg-[#141722] border border-[#242838] hover:border-[#00E676]/50 transition-all">
                  <div className="flex items-center justify-between text-zinc-400 mb-0.5">
                    <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider">Faturamento</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#00E676]" />
                  </div>
                  <p className="text-base sm:text-2xl font-black text-white">R$ 48.920<span className="text-[10px] sm:text-xs text-zinc-400">,00</span></p>
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#00E676] inline-flex items-center gap-0.5 mt-0.5">
                    +17,8% vs mês ant.
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="p-4 rounded-xl bg-[#141722] border border-[#242838]">
                  <div className="flex items-center justify-between text-zinc-400 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider">OS Concluídas</span>
                    <Wrench className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-xl sm:text-2xl font-black text-white">127 <span className="text-xs text-zinc-400">serviços</span></p>
                  <span className="text-[10px] font-medium text-zinc-400 mt-1 block">Ticket médio: R$ 385,00</span>
                </div>

                {/* Metric 3 */}
                <div className="p-4 rounded-xl bg-[#141722] border border-[#242838]">
                  <div className="flex items-center justify-between text-zinc-400 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider">Veículos Atendidos</span>
                    <Car className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-xl sm:text-2xl font-black text-white">94 <span className="text-xs text-zinc-400">carros</span></p>
                  <span className="text-[10px] font-bold text-[#00E676] inline-flex items-center gap-0.5 mt-1">
                    +32 novos clientes
                  </span>
                </div>

                {/* Metric 4 */}
                <div className="p-4 rounded-xl bg-[#141722] border border-[#242838]">
                  <div className="flex items-center justify-between text-zinc-400 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider">Alerta Estoque</span>
                    <Boxes className="w-4 h-4 text-amber-400" />
                  </div>
                  <p className="text-xl sm:text-2xl font-black text-amber-400">3 <span className="text-xs text-zinc-400">itens baixos</span></p>
                  <span className="text-[10px] font-medium text-amber-400/80 mt-1 block">Reposição sugerida</span>
                </div>
              </div>

              {/* Interactive Mockup Work Order List Preview */}
              <div className="bg-[#141722] border border-[#242838] rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between border-b border-[#242838] pb-3">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                    <Wrench className="w-3.5 h-3.5 text-[#00E676]" /> Ordens de Serviço Recentes em Execução
                  </h4>
                  <span className="text-[10px] font-bold text-[#00E676]">4 OS ativas</span>
                </div>

                <div className="space-y-2">
                  <div className="p-2.5 rounded-lg bg-[#181C28] border border-[#242838] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-[#00E676]">OS #1042</span>
                        <span className="font-semibold text-white">Toyota Corolla Cross 2.0</span>
                        <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-300 font-mono">ABC-7R89</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Revisão preventiva 30k + Troca de pastilhas Cobreq</p>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                      <span className="font-extrabold text-white">R$ 1.190,00</span>
                      <span className="px-2 py-0.5 rounded-full bg-[#00E676]/10 text-[#00E676] text-[10px] font-bold border border-[#00E676]/30">
                        Em Execução
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#181C28] border border-[#242838] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-[#00E676]">OS #1041</span>
                        <span className="font-semibold text-white">Honda Civic 2.0 Touring</span>
                        <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-[10px] text-zinc-300 font-mono">JKL-3D45</span>
                      </div>
                      <p className="text-[11px] text-zinc-400 mt-0.5">Alinhamento 3D + Balanceamento + Troca óleo 0W20</p>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                      <span className="font-extrabold text-white">R$ 680,00</span>
                      <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold border border-blue-500/30">
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
