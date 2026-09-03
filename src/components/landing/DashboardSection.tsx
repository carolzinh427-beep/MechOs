import React, { useState } from 'react';
import {
  TrendingUp,
  Wrench,
  Users,
  Calendar,
  AlertTriangle,
  ArrowUpRight,
  Filter
} from 'lucide-react';
import { Card } from '../ui/Card';

export const DashboardSection: React.FC = () => {
  const [period, setPeriod] = useState<'hoje' | 'semana' | 'mes'>('mes');

  return (
    <section id="produto" className="py-10 md:py-28 bg-[#0A0C14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-8 md:mb-14">
          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight">
            Veja sua operação de um jeito <span className="text-gradient-electric">completamente diferente.</span>
          </h2>
          <p className="text-xs sm:text-base text-zinc-400">
            Interface limpa e rápida com gráficos e alertas automáticos para você tomar decisões certas.
          </p>
        </div>

        {/* Outer Dashboard Showcase Box */}
        <div className="bg-[#141722] border border-[#242838] rounded-2xl sm:rounded-3xl p-3 sm:p-8 shadow-2xl">
          {/* Controls Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#242838]">
            <div>
              <h3 className="text-xs sm:text-lg font-bold text-white">Painel Geral de Desempenho</h3>
              <p className="text-[10px] sm:text-xs text-zinc-400">Dados consolidados da sua empresa</p>
            </div>

            {/* Period Selector Tabs */}
            <div className="flex items-center gap-1 bg-[#0F111A] p-1 rounded-xl border border-[#242838] self-start sm:self-auto">
              {(['hoje', 'semana', 'mes'] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-all ${
                    period === p
                      ? 'bg-[#00E676] text-zinc-950 shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout inside Dashboard */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 mt-4 sm:mt-6">
            {/* Main Sales & Revenue Card */}
            <div className="lg:col-span-8 bg-[#0F111A] border border-[#242838] rounded-xl sm:rounded-2xl p-3.5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] sm:text-xs font-bold text-zinc-400 uppercase tracking-wider">Faturamento Total ({period})</span>
                  <p className="text-xl sm:text-3xl font-black text-white mt-1">
                    {period === 'hoje' && 'R$ 3.840,00'}
                    {period === 'semana' && 'R$ 18.450,00'}
                    {period === 'mes' && 'R$ 48.920,00'}
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#00E676]/10 text-[#00E676] text-[10px] sm:text-xs font-bold border border-[#00E676]/30 flex items-center gap-1">
                  <ArrowUpRight className="w-3.5 h-3.5" /> +17.8%
                </span>
              </div>

              {/* Simulated Chart Bars */}
              <div className="pt-2 space-y-2">
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>SEG</span><span>TER</span><span>QUA</span><span>QUI</span><span>SEX</span><span>SÁB</span>
                </div>
                <div className="h-24 sm:h-36 flex items-end justify-between gap-1.5 sm:gap-3 pt-2">
                  <div className="w-full bg-[#00E676]/20 hover:bg-[#00E676] h-[45%] rounded-t transition-all group relative">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-900 text-[#00E676] text-[9px] font-bold px-1 rounded opacity-0 group-hover:opacity-100">4k</span>
                  </div>
                  <div className="w-full bg-[#00E676]/20 hover:bg-[#00E676] h-[65%] rounded-t transition-all group relative">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-900 text-[#00E676] text-[9px] font-bold px-1 rounded opacity-0 group-hover:opacity-100">6k</span>
                  </div>
                  <div className="w-full bg-[#00E676]/20 hover:bg-[#00E676] h-[85%] rounded-t transition-all group relative">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-900 text-[#00E676] text-[9px] font-bold px-1 rounded opacity-0 group-hover:opacity-100">8k</span>
                  </div>
                  <div className="w-full bg-[#00E676]/20 hover:bg-[#00E676] h-[55%] rounded-t transition-all group relative">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-900 text-[#00E676] text-[9px] font-bold px-1 rounded opacity-0 group-hover:opacity-100">5k</span>
                  </div>
                  <div className="w-full bg-[#00E676] h-[95%] rounded-t transition-all group relative">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-900 text-[#00E676] text-[9px] font-bold px-1 rounded opacity-0 group-hover:opacity-100">9.8k</span>
                  </div>
                  <div className="w-full bg-[#00E676]/20 hover:bg-[#00E676] h-[70%] rounded-t transition-all group relative">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-zinc-900 text-[#00E676] text-[9px] font-bold px-1 rounded opacity-0 group-hover:opacity-100">7k</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Agenda/Alert Box */}
            <div className="lg:col-span-4 space-y-3">
              <div className="bg-[#0F111A] border border-[#242838] rounded-xl sm:rounded-2xl p-3.5 sm:p-5 space-y-2">
                <div className="flex items-center justify-between border-b border-[#242838] pb-2">
                  <span className="text-[10px] sm:text-xs font-bold text-white flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#00E676]" /> Agenda de Hoje
                  </span>
                  <span className="text-[10px] text-zinc-400 font-bold">5 Agendados</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-[#141722] border border-[#242838] flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white text-xs">09:00 - Civic 2.0</p>
                      <p className="text-[10px] text-zinc-400">Revisão Geral</p>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-[#00E676]/10 text-[#00E676] text-[9px] font-bold">Confirmado</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[#141722] border border-[#242838] flex items-center justify-between">
                    <div>
                      <p className="font-bold text-white text-xs">11:30 - Compass Diesel</p>
                      <p className="text-[10px] text-zinc-400">Troca de Óleo</p>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[9px] font-bold">Em Chegada</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0F111A] border border-amber-500/20 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                  <AlertTriangle className="w-4 h-4" /> Alerta de Estoque Mínimo
                </div>
                <p className="text-[11px] text-zinc-400">
                  Filtro de óleo Havoline (apenas 2 unidades restantes).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
