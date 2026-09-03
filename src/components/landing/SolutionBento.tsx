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
import { Badge } from '../ui/Badge';

export const SolutionBento: React.FC = () => {
  return (
    <section id="recursos" className="py-10 md:py-28 bg-[#0A0C14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-4 mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight">
            Tudo o que sua empresa precisa. <span className="text-[#00E676]">Em um só lugar.</span>
          </h2>
          <p className="text-xs sm:text-base text-zinc-400">
            A plataforma MechOS conecta a recepção até o estoque e conciliação financeira.
          </p>
        </div>

        {/* Bento Grid: 2 cols on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6">
          {/* Card 1: OS (Span 2) */}
          <div className="col-span-2 bg-[#141722] border border-[#242838] hover:border-[#00E676]/60 rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col justify-between group transition-all duration-300 glow-card-hover">
            <div className="space-y-2 sm:space-y-4">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center text-[#00E676] group-hover:scale-110 transition-transform">
                <Wrench className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <Badge variant="electric" size="sm">01. Operacional</Badge>
              <h3 className="text-base sm:text-2xl font-black text-white">ORDENS DE SERVIÇO (OS)</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Crie, acompanhe e finalize OS com poucos cliques. Controle peças aplicadas, mão de obra e técnicos responsáveis.
              </p>
            </div>
            <div className="mt-3 sm:mt-6 p-2.5 sm:p-4 rounded-lg sm:rounded-xl bg-[#0F111A] border border-[#242838] flex items-center justify-between text-[11px] sm:text-xs">
              <span className="text-zinc-300 font-mono">Status: Em Execução</span>
              <span className="font-extrabold text-[#00E676]">R$ 1.190,00</span>
            </div>
          </div>

          {/* Card 2: ESTOQUE */}
          <div className="bg-[#141722] border border-[#242838] hover:border-[#00E676]/60 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 flex flex-col justify-between group transition-all duration-300 glow-card-hover">
            <div className="space-y-2 sm:space-y-4">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Boxes className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-sm sm:text-xl font-bold text-white">ESTOQUE & PEÇAS</h3>
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-tight">
                Saiba exatamente o que entrou, saiu e o que precisa ser reposto.
              </p>
            </div>
          </div>

          {/* Card 3: CRM */}
          <div className="bg-[#141722] border border-[#242838] hover:border-[#00E676]/60 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 flex flex-col justify-between group transition-all duration-300 glow-card-hover">
            <div className="space-y-2 sm:space-y-4">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-purple-500/10 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <Users className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-sm sm:text-xl font-bold text-white">CRM DE VENDAS</h3>
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-tight">
                Organize clientes e acompanhe negociações em Kanban.
              </p>
            </div>
          </div>

          {/* Card 4: FINANCEIRO */}
          <div className="bg-[#141722] border border-[#242838] hover:border-[#00E676]/60 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 flex flex-col justify-between group transition-all duration-300 glow-card-hover">
            <div className="space-y-2 sm:space-y-4">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center text-[#00E676]">
                <DollarSign className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-sm sm:text-xl font-bold text-white">FINANCEIRO & DRE</h3>
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-tight">
                Tenha clareza sobre receitas, despesas e margem de lucro.
              </p>
            </div>
          </div>

          {/* Card 5: AGENDA */}
          <div className="bg-[#141722] border border-[#242838] hover:border-[#00E676]/60 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 flex flex-col justify-between group transition-all duration-300 glow-card-hover">
            <div className="space-y-2 sm:space-y-4">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-blue-500/10 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Calendar className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-sm sm:text-xl font-bold text-white">AGENDA</h3>
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-tight">
                Organize serviços e horários da sua equipe de técnicos.
              </p>
            </div>
          </div>

          {/* Card 6: CLIENTES E VEÍCULOS (Span 2) */}
          <div className="col-span-2 bg-[#141722] border border-[#242838] hover:border-[#00E676]/60 rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col justify-between group transition-all duration-300 glow-card-hover">
            <div className="space-y-2 sm:space-y-4">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#00E676]/10 border border-[#00E676]/40 flex items-center justify-center text-[#00E676]">
                <Car className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-2xl font-black text-white">CLIENTES E VEÍCULOS</h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Histórico completo do cliente e do veículo na palma da mão. Consulte por placa ou CPF/CNPJ instantaneamente.
              </p>
            </div>
          </div>

          {/* Card 7: FATURAMENTO */}
          <div className="bg-[#141722] border border-[#242838] hover:border-[#00E676]/60 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 flex flex-col justify-between group transition-all duration-300 glow-card-hover">
            <div className="space-y-2 sm:space-y-4">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <Receipt className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-sm sm:text-xl font-bold text-white">FATURAMENTO</h3>
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-tight">
                Centralize suas vendas e relatórios de performance.
              </p>
            </div>
          </div>

          {/* Card 8: NF-e E NFS-e */}
          <div className="bg-[#141722] border border-[#242838] hover:border-[#00E676]/60 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 flex flex-col justify-between group transition-all duration-300 glow-card-hover">
            <div className="space-y-2 sm:space-y-4">
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg sm:rounded-2xl bg-blue-500/10 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <FileSpreadsheet className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-sm sm:text-xl font-bold text-white">NF-e E NFS-e</h3>
              <p className="text-[11px] sm:text-xs text-zinc-400 leading-tight">
                Emissão fiscal integrada de notas de produto e serviço.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
