import React from 'react';
import {
  Wrench,
  Boxes,
  Users,
  DollarSign,
  Calendar,
  Car,
  Receipt,
  FileSpreadsheet
} from 'lucide-react';
import SpotlightCard from '../ui/SpotlightCard';

export const SolutionBento: React.FC = () => {
  return (
    <section id="recursos" className="py-6 sm:py-8 md:py-12 bg-white border-y border-zinc-200 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-1.5 sm:space-y-3 mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-5xl font-black text-zinc-950 tracking-tight font-steel uppercase">
            Tudo o que sua empresa precisa <span className="text-[#00E676]">em um só lugar</span>
          </h2>
          <p className="text-xs sm:text-base text-zinc-600 font-medium">
            A plataforma MechOS conecta a recepção até o estoque e conciliação financeira com máxima agilidade.
          </p>
        </div>

        {/* Bento Grid: 2 cols on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {/* Card 1: OS (Span 2) */}
          <SpotlightCard
            spotlightColor="rgba(0, 230, 118, 0.15)"
            className="col-span-2 bg-slate-50 border border-zinc-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:border-[#00E676]/60 shadow-sm"
          >
            <div className="space-y-2 sm:space-y-3.5 z-10">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center text-[#00E676] group-hover:scale-110 transition-transform">
                <Wrench className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-2xl font-black text-zinc-950 font-steel">ORDENS DE SERVIÇO (OS)</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Crie, acompanhe e finalize OS com poucos cliques. Controle peças aplicadas, mão de obra e técnicos responsáveis.
              </p>
            </div>
            <div className="mt-3 sm:mt-5 p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-white border border-zinc-200 flex items-center justify-between text-[11px] sm:text-xs z-10 shadow-sm">
              <span className="text-zinc-700 font-mono font-semibold">Status: Em Execução</span>
              <span className="font-extrabold text-[#00E676]">R$ 1.190,00</span>
            </div>
          </SpotlightCard>

          {/* Card 2: ESTOQUE */}
          <SpotlightCard
            spotlightColor="rgba(0, 230, 118, 0.15)"
            className="bg-slate-50 border border-zinc-200/90 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 flex flex-col justify-between group transition-all duration-300 hover:border-[#00E676]/60 shadow-sm"
          >
            <div className="space-y-2 sm:space-y-3 z-10">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center text-[#00E676]">
                <Boxes className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-zinc-950 font-steel">ESTOQUE & PEÇAS</h3>
              <p className="text-[11px] sm:text-xs text-zinc-600 leading-tight">
                Saiba exatamente o que entrou, saiu e o que precisa ser reposto.
              </p>
            </div>
          </SpotlightCard>

          {/* Card 3: CRM */}
          <SpotlightCard
            spotlightColor="rgba(0, 230, 118, 0.15)"
            className="bg-slate-50 border border-zinc-200/90 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 flex flex-col justify-between group transition-all duration-300 hover:border-[#00E676]/60 shadow-sm"
          >
            <div className="space-y-2 sm:space-y-3 z-10">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center text-[#00E676]">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-zinc-950 font-steel">CRM DE VENDAS</h3>
              <p className="text-[11px] sm:text-xs text-zinc-600 leading-tight">
                Organize clientes e acompanhe negociações em Kanban.
              </p>
            </div>
          </SpotlightCard>

          {/* Card 4: FINANCEIRO */}
          <SpotlightCard
            spotlightColor="rgba(0, 230, 118, 0.15)"
            className="bg-slate-50 border border-zinc-200/90 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 flex flex-col justify-between group transition-all duration-300 hover:border-[#00E676]/60 shadow-sm"
          >
            <div className="space-y-2 sm:space-y-3 z-10">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center text-[#00E676]">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-zinc-950 font-steel">FINANCEIRO & DRE</h3>
              <p className="text-[11px] sm:text-xs text-zinc-600 leading-tight">
                Tenha clareza sobre receitas, despesas e margem de lucro.
              </p>
            </div>
          </SpotlightCard>

          {/* Card 5: AGENDA */}
          <SpotlightCard
            spotlightColor="rgba(0, 230, 118, 0.15)"
            className="bg-slate-50 border border-zinc-200/90 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 flex flex-col justify-between group transition-all duration-300 hover:border-[#00E676]/60 shadow-sm"
          >
            <div className="space-y-2 sm:space-y-3 z-10">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center text-[#00E676]">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-zinc-950 font-steel">AGENDA</h3>
              <p className="text-[11px] sm:text-xs text-zinc-600 leading-tight">
                Organize serviços e horários da sua equipe de técnicos.
              </p>
            </div>
          </SpotlightCard>

          {/* Card 6: CLIENTES E VEÍCULOS (Span 2) */}
          <SpotlightCard
            spotlightColor="rgba(0, 230, 118, 0.15)"
            className="col-span-2 bg-slate-50 border border-zinc-200/90 rounded-2xl sm:rounded-3xl p-4 sm:p-7 flex flex-col justify-between group transition-all duration-300 hover:border-[#00E676]/60 shadow-sm"
          >
            <div className="space-y-2 sm:space-y-3 z-10">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center text-[#00E676]">
                <Car className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-2xl font-black text-zinc-950 font-steel">CLIENTES E VEÍCULOS</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Histórico completo do cliente e do veículo na palma da mão. Consulte por placa ou CPF/CNPJ instantaneamente.
              </p>
            </div>
          </SpotlightCard>

          {/* Card 7: FATURAMENTO */}
          <SpotlightCard
            spotlightColor="rgba(0, 230, 118, 0.15)"
            className="bg-slate-50 border border-zinc-200/90 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 flex flex-col justify-between group transition-all duration-300 hover:border-[#00E676]/60 shadow-sm"
          >
            <div className="space-y-2 sm:space-y-3 z-10">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center text-[#00E676]">
                <Receipt className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-zinc-950 font-steel">FATURAMENTO</h3>
              <p className="text-[11px] sm:text-xs text-zinc-600 leading-tight">
                Centralize suas vendas e relatórios de performance.
              </p>
            </div>
          </SpotlightCard>

          {/* Card 8: NF-e E NFS-e */}
          <SpotlightCard
            spotlightColor="rgba(0, 230, 118, 0.15)"
            className="bg-slate-50 border border-zinc-200/90 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 flex flex-col justify-between group transition-all duration-300 hover:border-[#00E676]/60 shadow-sm"
          >
            <div className="space-y-2 sm:space-y-3 z-10">
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center text-[#00E676]">
                <FileSpreadsheet className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-zinc-950 font-steel">NF-e E NFS-e</h3>
              <p className="text-[11px] sm:text-xs text-zinc-600 leading-tight">
                Emissão fiscal integrada de notas de produto e serviço.
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};
