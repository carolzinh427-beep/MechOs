import React, { useState } from 'react';
import {
  TrendingUp,
  Wrench,
  Users,
  Car,
  Boxes,
  Calendar,
  DollarSign,
  ArrowUpRight,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface DashboardSectionProps {
  onOpenTrial: () => void;
}

export const DashboardSection: React.FC<DashboardSectionProps> = ({ onOpenTrial }) => {
  const [period, setPeriod] = useState<'7d' | '30d' | 'mes'>('30d');

  return (
    <section id="produto" className="py-20 md:py-28 bg-[#0A0C14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Veja sua operação de um jeito <span className="text-gradient-electric">completamente diferente.</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Chega de adivinhar o resultado no fim do mês. Acompanhe gráficos intuitivos de vendas, produtividade dos mecânicos e agenda com transparência total.
          </p>
        </div>

        {/* Big Dashboard Showcase Container */}
        <div className="bg-[#0F111A] border border-[#242838] rounded-3xl p-4 sm:p-8 shadow-2xl space-y-6">
          {/* Header Control Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#242838] pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                 Painel de Controle Operacional
              </h3>
              <p className="text-xs text-zinc-400">Resumo consolidado • Todas as unidades</p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 bg-[#141722] p-1 rounded-xl border border-[#242838] text-xs">
              {(['7d', '30d', 'mes'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`px-3 py-1.5 font-bold rounded-lg uppercase transition-all cursor-pointer ${
                    period === p
                      ? 'bg-[#00E676] text-zinc-950 shadow'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {p === '7d' ? '7 dias' : p === '30d' ? '30 dias' : 'Este mês'}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Floating Highlights Pills */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#00E676]/10 text-[#00E676] text-xs font-bold border border-[#00E676]/30 flex items-center gap-1.5">
              <ArrowUpRight className="w-3.5 h-3.5" /> +17,8% em Faturamento
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/30 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" /> +32 Novos Clientes
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/30 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" /> 127 OS Concluídas
            </span>
          </div>

          {/* Simulated Financial Chart & Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Chart Area */}
            <div className="lg:col-span-2 bg-[#141722] border border-[#242838] rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Evolução do Faturamento Semanal</h4>
                  <p className="text-2xl font-black text-white mt-1">R$ 48.920<span className="text-xs text-zinc-400">,00</span></p>
                </div>
                <Badge variant="electric">Meta Atingida</Badge>
              </div>

              {/* Bar Chart Visual Representation */}
              <div className="h-48 flex items-end justify-between gap-3 pt-6 border-b border-[#242838] pb-2">
                {[
                  { day: 'Seg', val: 40, amt: 'R$ 5.200' },
                  { day: 'Ter', val: 65, amt: 'R$ 7.800' },
                  { day: 'Qua', val: 85, amt: 'R$ 10.400' },
                  { day: 'Qui', val: 55, amt: 'R$ 6.900' },
                  { day: 'Sex', val: 100, amt: 'R$ 13.500' },
                  { day: 'Sáb', val: 45, amt: 'R$ 5.120' }
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                    <span className="text-[9px] font-mono text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      {bar.amt}
                    </span>
                    <div className="w-full bg-[#1F2436] rounded-t-lg overflow-hidden flex items-end h-32">
                      <div
                        style={{ height: `${bar.val}%` }}
                        className="w-full bg-gradient-to-t from-[#00E676] to-emerald-400 rounded-t-lg group-hover:brightness-125 transition-all"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-zinc-400 group-hover:text-white">{bar.day}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-zinc-400 pt-1">
                <span>Serviços Prestados: R$ 33.200 (68%)</span>
                <span>Peças Aplicadas: R$ 15.720 (32%)</span>
              </div>
            </div>

            {/* Sidebar Summary Widget */}
            <div className="bg-[#141722] border border-[#242838] rounded-2xl p-6 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center justify-between">
                <span>Resumo da Agenda de Hoje</span>
                <Calendar className="w-4 h-4 text-[#00E676]" />
              </h4>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-[#181C28] border border-[#242838] space-y-1">
                  <div className="flex justify-between text-xs font-bold text-white">
                    <span>09:00 - Fernando Costa</span>
                    <span className="text-[#00E676]">Corolla</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">Revisão preventiva 30k + Filtros</p>
                </div>

                <div className="p-3 rounded-xl bg-[#181C28] border border-[#242838] space-y-1">
                  <div className="flex justify-between text-xs font-bold text-white">
                    <span>11:30 - Mariana Lima</span>
                    <span className="text-[#00E676]">Compass</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">Higienização Ar-Condicionado + Freios</p>
                </div>

                <div className="p-3 rounded-xl bg-[#181C28] border border-[#242838] space-y-1">
                  <div className="flex justify-between text-xs font-bold text-white">
                    <span>14:30 - Pedro Santos</span>
                    <span className="text-[#00E676]">Civic</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">Troca de óleo sintético 0W20 + Alinhamento</p>
                </div>
              </div>

              <Button variant="electric" size="sm" className="w-full mt-2" onClick={onOpenTrial}>
                Explorar Painel Completo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
